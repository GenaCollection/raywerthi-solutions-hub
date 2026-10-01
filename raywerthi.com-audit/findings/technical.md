# Technical SEO Audit — raywerthi.com

## Score: 18 / 100

**Justification:** This is a Vite/React SPA hosted on Vercel with **no server-side rendering, no prerendering, and no SPA-fallback rewrite rule**. Independent verification (plain `curl`, no JS execution) confirms that 5 of the site's 6 real pages — `/solutions`, `/services`, `/portfolio`, `/about`, `/contacts` — return a genuine server-level HTTP 404 (`X-Vercel-Error: NOT_FOUND`) when requested directly, which is exactly how Googlebot, Bingbot, social-share scrapers, and any link-following bot request a URL. Only `/` returns 200. Since these 5 URLs are also the exact URLs listed in `sitemap.xml`, the site is effectively telling search engines "index these 5 pages" while simultaneously serving them a 404 — this is very likely why the site is poorly indexed today, and it is scored as the dominant factor here (a site is not meaningfully crawlable/indexable if 83% of its declared URLs 404).

Compounding this: even the one working URL (`/`) is pure client-side-rendered — the raw HTML response has an empty `<div id="root"></div>`, and its `<link rel="canonical">` and `hreflang` tags are injected only after JavaScript execution (react-helmet-async), so any crawler/tool that doesn't fully render JS sees no canonical signal at all. The site also ships no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, or Permissions-Policy headers (only HSTS is present), and the RU/HY/EN language switcher is client-state-only with no distinct URLs, so hreflang alternates all resolve to the identical URL — HY/EN content is invisible to search engines.

Points awarded for: valid, well-formed sitemap.xml; robots.txt correctly allows all crawlers and declares the sitemap; HTTPS enforced with HSTS and clean http→https / www→apex redirects; solid meta tags (title, description, OG, Twitter Card) and JSON-LD present in the raw (pre-JS) HTML for the homepage; responsive, mobile-friendly markup with a proper viewport tag; no mixed-content resources; no accidental `noindex`/`X-Robots-Tag` blocking.

---

## What Works

- **robots.txt** is clean and permissive — explicit `Allow: /` blocks for Googlebot, Bingbot, Twitterbot, facebookexternalhit, and `*`, plus a correct `Sitemap:` declaration. Verified via `sitemap_discovery.py` (`"valid": true`, `"kind": "urlset"`).
- **HTTPS is enforced site-wide**: `http://raywerthi.com/` → `308 Permanent Redirect` → `https://raywerthi.com/`, and `Strict-Transport-Security: max-age=63072000` is sent on every response, including the 404 responses.
- **www → apex redirect** works (`https://www.raywerthi.com/` → `307` → `https://raywerthi.com/`), so domain canonicalization is functionally correct (though see Finding 8 on redirect status codes).
- **No mixed content**: the only `http://` strings on the homepage are XML/SVG namespace URIs (`http://www.w3.org/2000/svg`, etc.) and one comment inside an inlined vector logo — not actual loaded resources.
- **Homepage `<head>` has real, server-delivered SEO metadata before any JS runs**: unique `<title>`, `<meta name="description">`, `<meta name="keywords">`, full Open Graph + Twitter Card tags, and a static `Organization` JSON-LD block — all present in the raw `curl` response (`home_curl_raw.html`), so social scrapers and basic crawlers get *something* useful even without executing JavaScript.
- **No accidental deindexing signals**: no `X-Robots-Tag` header, no `<meta name="robots" content="noindex">` found anywhere in raw or rendered HTML.
- **Viewport meta tag is correct** (`width=device-width, initial-scale=1.0`), and the rendered markup uses Tailwind responsive breakpoints (`sm:`/`md:`/`lg:`) throughout; mobile screenshots (`screenshots/home-mobile-fold.png`) confirm a clean, single-column layout with appropriately sized tap targets for CTAs and the language switcher once the page renders.
- **JS bundle loads and executes without console errors** in the rendered capture (`cwv_raw/home.json`: `console_error_count: 0`), TTFB is fast (269 ms), and DOM content loads quickly (1.29 s) once the JS shell is allowed to run — the underlying app itself is not badly built, it is the hosting/routing layer and rendering strategy that are broken.

---

## Findings

### 1. Vercel SPA routing misconfiguration — 5 of 6 site pages return a real HTTP 404 on direct request
**Severity: Critical**

**Description:** Independently verified with plain `curl` (no JS execution, matching bot behavior):

| URL | Status | Evidence |
|---|---|---|
| `https://raywerthi.com/` | 200 OK | Serves the SPA shell |
| `https://raywerthi.com/solutions` | **404** | `X-Vercel-Error: NOT_FOUND` |
| `https://raywerthi.com/services` | **404** | `X-Vercel-Error: NOT_FOUND` |
| `https://raywerthi.com/portfolio` | **404** | `X-Vercel-Error: NOT_FOUND` |
| `https://raywerthi.com/about` | **404** | `X-Vercel-Error: NOT_FOUND` |
| `https://raywerthi.com/contacts` | **404** | `X-Vercel-Error: NOT_FOUND` |

Response body for each is Vercel's generic error page: `"The page could not be found / NOT_FOUND / fra1::..."`. This was re-confirmed against a **forced Playwright render** (`render_page.py --mode always`) of `/solutions` (`solutions_forced.json`, `solutions2.json`): even with full browser rendering, `status_code` is still `404` and the response is Vercel's static `404: NOT_FOUND` HTML page, not the React app — proving there is no SPA shell to hydrate at all on these paths. This is not a JS-timing/rendering issue; **the server has no route registered for anything except the literal path `/`**, which is the classic symptom of a Vite/React Router SPA deployed on Vercel with no `vercel.json` rewrite/fallback.

These exact 5 URLs are also the ones listed in `sitemap.xml` and linked from the homepage `<nav>` (`/solutions`, `/services`, `/about`, `/portfolio`, `/contacts`) — so Google Search Console will report "Submitted URL not found (404)" for 83% of the sitemap, real users following a bookmark/shared link/browser-refresh on any inner page hit a dead page, and no inner-page content can be indexed or ranked. This single misconfiguration is the top-priority technical issue on the site and plausibly explains poor overall indexation.

**Recommendation:** Add a Vercel rewrite so every non-asset path falls through to `index.html`, letting React Router handle client-side routing after the initial load:

```json
{
  "rewrites": [
    { "source": "/((?!assets/|favicon.ico|og-image.jpg|sitemap.xml|robots.txt).*)", "destination": "/index.html" }
  ]
}
```

Place this `vercel.json` at the project root and redeploy. After deploying, re-verify all 6 sitemap URLs return `200` via direct `curl -I` (not just via in-app navigation) before resubmitting `sitemap.xml` in Search Console and requesting re-indexing/validation for the previously-404'd URLs. Also spot-check that the rewrite doesn't accidentally swallow real static asset requests (the negative lookahead above should be extended to match the actual `/assets/*`, image, and font paths Vite emits).

---

### 2. Pure client-side rendering — canonical tag, hreflang, and rich structured data are invisible without JS execution
**Severity: Critical**

**Description:** The raw (unrendered) HTML response for `https://raywerthi.com/` — confirmed via fresh `curl` (`home_curl_raw.html`) — contains only `<div id="root"></div>` in the `<body>`; all page content is injected by `/assets/index-CMjOWT8M.js` at runtime. Critically, the following SEO-relevant tags are **absent from the raw HTML and only appear after react-helmet-async runs client-side** (visible in the Playwright-rendered capture `homepage.json`/`home.html`, marked with `data-rh="true"`):
- `<link rel="canonical" href="https://raywerthi.com/">`
- All four `<link rel="alternate" hreflang="...">` tags
- A second, expanded JSON-LD `@graph` block (`Organization` + `LocalBusiness`)

This was cross-checked against `parsed_home.json` (parsed from the pre-render fetch), which reports `Canonical: None` and `Meta Description: None` for that raw parse pass — consistent with the raw HTML evidence.

Google's indexer generally executes JavaScript on a second-wave render, so canonical tags injected this way are *often* eventually picked up for Google specifically — but this is not guaranteed, is delayed (URLs can sit in the crawl queue for the JS-rendering pass), and is unreliable for Bing, Yandex, LinkedIn/Facebook link previews, AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.), and most third-party SEO tools, all of which commonly rely on raw HTML or lightweight rendering only. Combined with Finding 1, this means: even after the routing fix ships, the site's indexing signals for anything beyond the homepage remain fragile because they depend entirely on a full JS render succeeding for every crawler.

**Recommendation:** Move to server-side rendering or static prerendering rather than relying solely on client-injected `<head>` tags:
- Preferred: migrate to a framework with SSR/SSG (Next.js, Remix, or Astro islands) or add a prerendering step (e.g., `vite-plugin-ssr`, `vite-react-ssg`, or a prerender proxy like Prerender.io) so canonical, hreflang, meta description, and title are present in the raw HTML for every route.
- Minimum viable fix if a full SSR migration isn't feasible short-term: move the canonical tag and hreflang links for the homepage into the static `index.html` `<head>` directly (they're already static values pointing at `/`), so at least the homepage doesn't depend on JS for its most important SEO signal. This does not solve per-page canonicals for inner routes once Finding 1 is fixed — those will still need real SSR/prerendering.

---

### 3. hreflang alternates all point to the identical URL; RU/HY/EN switcher has no distinct URLs — HY/EN content is not indexable
**Severity: High**

**Description:** The rendered `<head>` declares:
```html
<link rel="canonical" href="https://raywerthi.com/" data-rh="true">
<link rel="alternate" hreflang="ru" href="https://raywerthi.com/" data-rh="true">
<link rel="alternate" hreflang="hy" href="https://raywerthi.com/" data-rh="true">
<link rel="alternate" hreflang="en" href="https://raywerthi.com/" data-rh="true">
<link rel="alternate" hreflang="x-default" href="https://raywerthi.com/" data-rh="true">
```
All four `hreflang` values — `ru`, `hy`, `en`, and `x-default` — resolve to the exact same URL. In the rendered header markup, the RU/HY/EN control is implemented as three `<button>` elements (`homepage.json`: `<button ...>RU</button><button ...>HY</button><button ...>EN</button>`) with no `href`, `/en/`, `/hy/` path prefix, or `?lang=` query parameter — confirmed by searching the production bundle (`bundle.js`) for language-routing patterns, which found none. Language selection is pure client-side component state.

Practically: there is no crawlable URL for the Armenian or English version of any page. Google has nothing to differentiate when it sees four `hreflang` entries pointing at one URL, and typically discounts/ignores such a block rather than acting on it. Given the business explicitly targets Armenia and Georgia (per the homepage `areaServed` schema and HY-language keywords already embedded in the `<meta name="keywords">` tag), this means two of the three target-language audiences currently cannot be reached via organic search for language-specific queries at all.

*(Full hreflang validation methodology is owned by the `seo-hreflang` sub-skill — this finding is scoped to indexability impact and is flagged here because it directly affects whether translated content can rank at all.)*

**Recommendation:** Re-architect the language switcher to produce real, distinct, crawlable URLs per language (e.g. `/en/solutions`, `/hy/solutions`, or subdomains), each served with correct self-referencing + reciprocal `hreflang` tags and its own `<title>`/`<meta description>`. Only once real per-language URLs exist should the sitemap and hreflang annotations be expanded to list them — do not add hreflang entries for URLs that don't functionally differ. This work depends on Finding 1's routing fix landing first.

---

### 4. Missing critical security headers (CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
**Severity: High**

**Description:** Full response headers for `https://raywerthi.com/` (`curl -D -`):
```
HTTP/1.1 200 OK
Accept-Ranges: bytes
Access-Control-Allow-Origin: *
Age: 508076
Cache-Control: public, max-age=0, must-revalidate
Content-Type: text/html; charset=utf-8
Server: Vercel
Strict-Transport-Security: max-age=63072000
X-Vercel-Cache: HIT
```
The only security-relevant header present is `Strict-Transport-Security` (and it lacks `includeSubDomains`/`preload`). Missing entirely:
- `Content-Security-Policy` — no mitigation against XSS/injection via third-party scripts.
- `X-Frame-Options` (or `frame-ancestors` in a CSP) — the site can be embedded in an `<iframe>` on any external origin (clickjacking risk).
- `X-Content-Type-Options: nosniff` — browsers may MIME-sniff responses.
- `Referrer-Policy` — no control over referrer leakage to third parties.
- `Permissions-Policy` — no restriction on browser feature access (camera, geolocation, etc.) if a third-party script is ever compromised.
- `Access-Control-Allow-Origin: *` is set globally on the HTML document response itself, which is unusual/unnecessary for a document response (CORS is meant for fetched sub-resources, not top-level navigations) and should be scoped down or removed if it's a default Vercel/CDN behavior rather than an intentional API exposure.

While these don't directly cause ranking penalties, Google's security signals and Core Web Vitals tooling (Lighthouse "Best Practices" audits) flag missing CSP/X-Frame-Options, and they represent a real security gap for a business site that collects contact/lead information.

**Recommendation:** Add security headers via `vercel.json` `headers` config:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; img-src 'self' data: https://images.unsplash.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self'; font-src 'self' https://fonts.gstatic.com; connect-src 'self'" }
      ]
    }
  ]
}
```
Test the CSP in report-only mode first (`Content-Security-Policy-Report-Only`) since the app loads Google Fonts and Unsplash-hosted images and will need explicit allow-listing for those origins before enforcing.

---

### 5. Oversized, non-responsive LCP-candidate images
**Severity: Medium**

**Description:** From the rendered CWV capture (`cwv_raw/home.json`):
- The hero background image (`hero-home-DEkII6aE.jpg`) is a single **1920×1080, 250 KB JPEG** served identically to all breakpoints, but renders at only **375×731** on mobile — no `srcset`/`sizes`, no responsive image pipeline, no modern format (WebP/AVIF). This image is the most likely LCP element on both mobile and desktop.
- The header logo (`raywerthi-mark-BJtAylsg.png`) is a **116 KB PNG at 700×312** natural resolution rendered at just **99×44** — over 25x more pixel data than needed, and delivered with no `width`/`height` HTML attributes on the `<img>` (only CSS sizing classes), which is a latent CLS risk if the CSS fails to load before the image.
- No `<link rel="preload">` for the hero image and no `fetchpriority="high"` attribute were found in the raw HTML.
- Direct PSI measurement (`psi_home.json`) hit a rate limit and returned no lab/field metrics, so authoritative LCP/INP/CLS numbers are not available from this audit — the assessment below is based on source/resource inspection only, not a Lighthouse run.

**Recommendation:** Generate responsive `srcset`/`sizes` variants (or use Vercel/Next Image-style automatic responsive images) for the hero and logo, convert to WebP/AVIF with JPEG/PNG fallback, add explicit `width`/`height` (or `aspect-ratio` CSS) on every image including the logo, and add `<link rel="preload" as="image" fetchpriority="high">` for the hero image plus `fetchpriority="high"` on its `<img>` tag. Re-run PSI/Lighthouse after the Finding 1 routing fix to get real field/lab CWV numbers for the inner pages, not just the homepage.

---

### 6. Render-blocking Google Fonts stylesheet with no preconnect
**Severity: Medium**

**Description:** The rendered page loads `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap` as a synchronous, render-blocking stylesheet (`cwv_raw/home.json` → `render_blocking.stylesheets` includes it), which in turn triggers a same-priority fetch to `fonts.gstatic.com` for the actual `.woff2` files. No `<link rel="preconnect">` or `<link rel="dns-prefetch">` to either `fonts.googleapis.com` or `fonts.gstatic.com` was found in the raw HTML — meaning the browser pays full DNS+TLS connection setup cost serially, after discovering the font CSS, before either font file starts downloading. This adds avoidable latency to FCP/LCP on every page load, and six font weights (300–800) are requested for a single family, more than typical body/heading text needs.

**Recommendation:** Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to the document `<head>`, trim the requested font weights to only those actually used in the design system, and consider self-hosting the Inter `.woff2` files (via `@fontsource/inter` or similar) to remove the third-party round-trip entirely.

---

### 7. Duplicate, inconsistent Organization structured data
**Severity: Medium**

**Description:** Two separate JSON-LD blocks describe the organization with different names and shapes:
1. Static, in raw HTML (present before JS runs): `@type: Organization`, `"name": "Raywerthi"`.
2. Injected client-side via react-helmet-async: an `@graph` with `@type: Organization` **and** `@type: LocalBusiness`, both named `"Raywerthi Solutions Hub"`, adding `priceRange` and `image`.

Having two different `Organization` entities with two different names for the same business (`Raywerthi` vs. `Raywerthi Solutions Hub`) on the same URL is a structured-data consistency problem — Google's Rich Results Test / Search Console structured data reports may flag ambiguous or duplicate entities, and it undermines Knowledge Panel eligibility, which benefits from one consistent, canonical `name`/`sameAs` identity.

**Recommendation:** Keep only one JSON-LD source of truth — ideally the richer `Organization` + `LocalBusiness` `@graph` version, moved into the static `index.html` (so it survives without JS, per Finding 2) — and delete the duplicate static block. Standardize on a single business name across the JSON-LD `name`, the `<title>` tag, and Google Business Profile listing (currently `Raywerthi` in `<title>`/meta vs. `Raywerthi Solutions Hub` in the richer schema — pick one and use it everywhere).

---

### 8. www→apex and legacy-path redirects use temporary (307) status instead of permanent
**Severity: Low**

**Description:** `https://www.raywerthi.com/` → `307 Temporary Redirect` → `https://raywerthi.com/`. A `307` tells search engines and browsers this redirect might not be permanent, so link equity consolidation and caching are less certain than with a `301`/`308`. (The `http://` → `https://` redirect correctly uses `308 Permanent Redirect`.)

**Recommendation:** Change the `www` → apex redirect to a permanent status (`301` or `308`) at the Vercel domain/DNS configuration level, matching the scheme redirect's behavior.

---

### 9. IndexNow protocol not implemented
**Severity: Low**

**Description:** No IndexNow key file was found at the expected root path, and no IndexNow API calls are referenced anywhere in the production JS bundle (`bundle.js`, searched for `indexnow`, no matches). Bing, Yandex, and Naver all support IndexNow for near-instant crawl notification on publish/update, which is especially valuable for a low-authority site trying to get newly-fixed pages (post Finding 1) re-crawled quickly.

**Recommendation:** Low priority until Finding 1 is fixed — pinging IndexNow for URLs that currently 404 provides no benefit. Once the routing fix ships, generate an IndexNow key, host it at `/{key}.txt`, and submit the 6 sitemap URLs via a single IndexNow API call (`https://api.indexnow.org/indexnow`) to accelerate Bing/Yandex re-crawl of the newly-working pages.

---

### 10. Minimal favicon/touch-icon set
**Severity: Info**

**Description:** Only a single `<link rel="icon" type="image/x-icon" href="/favicon.ico">` is present; no `apple-touch-icon`, no SVG favicon, no `manifest.json`/web app manifest, and no `theme-color` meta tag were found in the raw HTML. This doesn't affect indexability but affects presentation quality on iOS home-screen bookmarks, Android "Add to Home Screen," and some browser UI surfaces (Chrome's address-bar favicon on high-DPI displays).

**Recommendation:** Add a modern icon set (`favicon.svg`, `apple-touch-icon.png` 180×180, a `site.webmanifest` with maskable icons) — low priority relative to Findings 1–4, but a quick, low-cost polish item.

---

## Cross-References

- Sitemap-specific detail for Finding 1 (per-URL verification methodology, retest-with-Googlebot-UA confirmation) is documented in `findings/sitemap.md`, Finding #1 — both audits independently confirmed the same root cause.
- Full hreflang validation (return-tag reciprocity, x-default correctness once real per-language URLs exist) should be re-run by the `seo-hreflang` sub-skill after Finding 3's remediation ships.

## Source Files Referenced

- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\homepage.json` — Playwright-rendered homepage capture
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\home_curl_raw.html` — fresh raw (pre-JS) `curl` fetch of homepage, produced during this session
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\raw_content_dump.txt` — earlier raw fetch, empty `<div id="root">` confirmation
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\parsed_home.json` — raw-HTML parse pass (Canonical: None, Meta Description: None)
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\about.json`, `solutions.json`, `services.json`, `portfolio.json`, `contacts.json`, `solutions2.json`, `solutions_forced.json` — per-URL 404 verification (raw + forced-render)
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\sitemap.xml`, `robots.txt`, `sitemap_discovery.json`
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\cwv_raw\home.json` — resource/image sizing and render-blocking data
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\psi_home.json` — PSI attempt (rate-limited, no lab/field data available)
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\screenshots\home-mobile-fold.png` — mobile rendering sanity check
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\bundle.js` — production JS bundle (searched for i18n/IndexNow patterns)
- `C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\findings\sitemap.md` — sibling sitemap-audit report (cross-referenced)
