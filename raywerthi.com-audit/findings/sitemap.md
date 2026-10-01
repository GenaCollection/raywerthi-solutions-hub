# Sitemap Audit — raywerthi.com

## Score: 15 / 100

**Justification:** The sitemap file itself is well-formed, correctly declared in `robots.txt`, and well within Google's 50,000-URL/50MB limit (6 URLs total). However, on direct verification **5 of the 6 URLs listed in the sitemap (83%) return a genuine HTTP 404 Not Found** when fetched the way Googlebot fetches sitemap entries (a direct GET request, no client-side JS execution). A sitemap whose primary function — telling Google "these are valid, crawlable, indexable pages" — is true for only 1 of 6 entries cannot be scored as passing regardless of clean XML syntax. This is a site-wide SPA-routing/hosting misconfiguration (Vercel is missing an SPA fallback rewrite), not a sitemap-file problem per se, but it is the sitemap's job to only list URLs that actually resolve, so it is scored here as a sitemap-coverage failure. Secondary deductions: no `lastmod` on any entry, and use of deprecated `priority`/`changefreq` tags.

---

## What Works

- `sitemap.xml` is valid, well-formed XML using the correct `urlset` namespace (`http://www.sitemaps.org/schemas/sitemap/0.9`) — confirmed via `sitemap_discovery.py` (`"valid": true`, `"kind": "urlset"`).
- `robots.txt` correctly declares `Sitemap: https://raywerthi.com/sitemap.xml` and does not block any crawler (`Allow: /` for Googlebot, Bingbot, Twitterbot, facebookexternalhit, and `*`).
- URL count (6) is trivially within Google's per-file caps (≤50,000 URLs / ≤50MB) — no splitting/index needed at current site size.
- URL casing/format in the sitemap matches the site's actual internal link structure (no trailing slash on sub-pages, e.g. `/solutions` matches `href="/solutions"` in the rendered nav) — no path-mismatch/case-mismatch issues.
- Domain canonicalization is correctly handled at the edge: `http://` → `https://` (308) and `www.` → apex (307) both redirect to the canonical `https://raywerthi.com/` host used in the sitemap.
- No orphaned/extraneous content types found: the sitemap's 6 entries correspond 1:1 with the site's real top-level routes (`/`, `/solutions`, `/services`, `/portfolio`, `/about`, `/contacts`); no evidence of additional indexable pages (blog, legal pages, individual portfolio project URLs) that are missing from the sitemap — portfolio project cards on the homepage are non-linked `<div>` cards, not distinct URLs, so there is nothing further to add today.
- No `news:`, `image:`, or `video:` sitemap extensions are misused, and only one sitemap file exists (confirmed no orphaned `sitemap_index.xml`/`sitemap-index.xml`/`wp-sitemap.xml`, all return 404 as expected for a non-WordPress SPA).

---

## Findings

### 1. Five of six sitemap URLs return HTTP 404 on direct fetch (the exact request pattern Googlebot uses to verify sitemap URLs)
**Severity: Critical**

**Description:** Fetching each sitemap URL directly (no JS execution, matching how Googlebot initially requests a sitemap URL) shows:

| URL (as listed in sitemap) | HTTP status |
|---|---|
| `https://raywerthi.com/` | 200 OK |
| `https://raywerthi.com/solutions` | **404 Not Found** |
| `https://raywerthi.com/services` | **404 Not Found** |
| `https://raywerthi.com/portfolio` | **404 Not Found** |
| `https://raywerthi.com/about` | **404 Not Found** |
| `https://raywerthi.com/contacts` | **404 Not Found** |

Response headers confirm this is a real server-level 404 from the hosting platform, not a soft-404 or SPA-rendered "not found" page:
```
HTTP/1.1 404 Not Found
Server: Vercel
X-Vercel-Error: NOT_FOUND
Content-Type: text/plain; charset=utf-8

The page could not be found
NOT_FOUND
```
Retested three times (non-transient) and with a `Googlebot/2.1` user-agent string — same result every time. A control request to a deliberately nonexistent path (`/some-random-nonexistent-path-xyz123`) produces an **identical** generic Vercel 404, confirming there is no client-side-routing fallback configured at all: every path except the literal root `/` is unrecognized by the server. This is consistent with a Vite/React SPA deployed on Vercel **without** an SPA rewrite rule (e.g. a `vercel.json` with `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`), so the server has no route for `/solutions`, `/services`, etc. — only client-side navigation (clicking a link from within the already-loaded app) reaches these views; a direct hit, a page refresh, a shared/bookmarked link, or a crawler's independent fetch of the URL does not.

Practical impact:
- Google Search Console will report "Submitted URL not found (404)" for 5 of the 6 sitemap URLs, and Google will very likely deindex or never index `/solutions`, `/services`, `/portfolio`, `/about`, `/contacts`.
- Any backlink, social share, or bookmark pointing directly at these URLs (not routed through the homepage first) is broken for real users, not just bots.
- This single issue accounts for the bulk of the score deduction, since it means the sitemap is — from a search engine's perspective — currently advertising 5 broken URLs.

**Recommendation:** This is a hosting/deployment fix, not a sitemap-content fix — flag for `seo-technical` / dev team as a P0. Add an SPA fallback rewrite in the Vercel project config so all non-file paths serve `index.html` (letting the React Router take over client-side), e.g. in `vercel.json`:
```json
{
  "rewrites": [{ "source": "/((?!assets/|favicon.ico|og-image.jpg).*)", "destination": "/index.html" }]
}
```
After deploying the fix, re-verify all 6 sitemap URLs return 200 via direct curl/`curl -I` before resubmitting the sitemap in Search Console, then request re-indexing for the affected URLs.

---

### 2. No `<lastmod>` on any of the 6 URL entries
**Severity: Medium**

**Description:** None of the 6 `<url>` entries include a `<lastmod>` tag. Per the task brief and general current guidance, Google can use accurate `lastmod` values (valid W3C Datetime, reflecting genuinely significant content changes) as a freshness/recrawl-priority signal; omitting it entirely gives Google no freshness signal to work with at all for this small site.

**Recommendation:** Add `<lastmod>` in `YYYY-MM-DD` (or full W3C datetime) format to each entry, set to the actual last date of a *significant* content change to that page/route (not a build-time stamp applied uniformly, and not refreshed on every deploy) — e.g. derive it from the CMS/git history for each route's content rather than the last time the whole site rebuilt. Do not set all 6 entries to the same date; identical-across-the-board dates read as fabricated and are effectively ignored by Google.

---

### 3. Deprecated `priority` and `changefreq` tags present on every entry
**Severity: Info**

**Description:** Every entry sets `<priority>` (1.0 down to 0.6) and `<changefreq>` (`weekly`/`monthly`/`yearly`). Google has publicly and repeatedly stated both tags are ignored for crawling/ranking purposes; Bing also gives them minimal weight. The values themselves are also somewhat inconsistent with real update cadence (e.g. `/about` is `yearly` while `/contacts` is also `yearly` but ranked a higher `priority` (0.7) than `/about` (0.6) — the internal relative-ranking logic is not obviously tied to anything Google will act on).

**Recommendation:** Optional cleanup — safe to remove both tags entirely to slim the file and remove any false impression (for whoever maintains this sitemap) that these values influence indexing/crawl behavior. Not required, no ranking impact either way.

---

### 4. hreflang alternates all resolve to the identical URL — no real per-language URLs exist to add to the sitemap (indexability gap, flagged here for completeness; primary fix belongs to seo-technical)
**Severity: High** *(sitemap-completeness note; root cause is technical/architecture, not the sitemap file)*

**Description:** The homepage `<head>` declares:
```html
<link rel="alternate" hreflang="ru" href="https://raywerthi.com/" />
<link rel="alternate" hreflang="hy" href="https://raywerthi.com/" />
<link rel="alternate" hreflang="en" href="https://raywerthi.com/" />
<link rel="alternate" hreflang="x-default" href="https://raywerthi.com/" />
```
All four hreflang alternates — including the `x-default`, and RU/HY/EN — point at the **exact same URL**. The RU/HY/EN language switcher in the header (`RU` / `HY` / `EN` buttons, confirmed in rendered markup) is purely client-side state (no `?lang=`, no `/en/`, `/hy/` path prefix, no separate route) — it swaps displayed text in place without changing the URL at all.

From a sitemap-completeness standpoint this means:
- There is currently **no separate crawlable URL per language** to add to the sitemap — the sitemap's 6 RU-only URLs are, in effect, the only URLs that exist for the entire site regardless of language.
- The hreflang annotations as currently implemented are non-functional for their stated purpose (helping Google serve the correct language variant in search results) since all four "variants" are the same URL — Google has nothing to differentiate. This typically gets the hreflang block ignored/discounted rather than actively harmful, but it provides zero SEO benefit for the HY and EN audiences RayWerThi is presumably trying to reach in Armenia/Georgia.
- HY and EN content is likely invisible to Google entirely: since it only renders after a client-side language toggle with no distinct URL, crawlers cannot request "the English page" or "the Armenian page" independently — there is nothing to crawl, index, or rank by language.

**Recommendation (sitemap-specific slice):** Once the language switcher is re-architected to use real per-language URLs (e.g. `/en/solutions`, `/hy/solutions`, or subdomain/path-based i18n routing — implementation choice belongs to `seo-technical`/dev), extend `sitemap.xml` to a proper multilingual structure: either (a) list all language-URL variants as separate `<url>` entries each with a full set of reciprocal `<xhtml:link rel="alternate" hreflang="...">` annotations pointing at every language version including itself, or (b) split into per-language sitemap files referenced from a `sitemap_index.xml`. Until real per-language URLs exist, do not add hreflang-driven sitemap entries — there is nothing valid to list. Full technical remediation (routing architecture, i18n library choice, content rendering) should be owned by `seo-technical`; this note exists so that agent has the sitemap-coverage context.

---

### 5. Sitemap coverage vs. crawlable site: no missing pages found, but coverage cannot be meaningfully validated beyond the 6 known routes
**Severity: Info**

**Description:** Comparing the sitemap against the rendered homepage's internal links and nav, the 6 sitemap URLs match the site's 6 top-level routes with no gaps (no orphaned nav links pointing elsewhere, no additional top-level sections found). Individual portfolio project entries on the homepage (e.g. "Вилла в Цахкадзоре") are rendered as non-linked `<div>` cards with no `href`, so they are not separate indexable URLs today and correctly have no sitemap entries. No `/blog`, `/privacy-policy`, `/terms`, or similar secondary pages were found to exist (all return 404), so their absence from the sitemap is not a gap — they simply don't exist yet as pages.

**Recommendation:** No sitemap action needed at this time. If a blog, case-study pages per portfolio project, or legal pages (privacy policy, terms — worth having given the site collects contact/lead info) are added in the future, add them to the sitemap with accurate `lastmod` at that time. Re-run sitemap coverage validation after the routing/404 fix in Finding #1 lands, since a working SPA fallback may also make it easier to add deep-linkable portfolio project pages later.

---

## Cross-References for Other Audit Agents

- **seo-technical**: Own Finding #1 (SPA hosting/routing fix — Vercel rewrite) and Finding #4 (client-side-only i18n / hreflang architecture). Both are indexability-blocking issues that sit upstream of anything sitemap-level can fix.
- **content/i18n reviewer** (if applicable): HY and EN content exists in the DOM but is not independently crawlable/indexable under the current URL scheme — worth confirming whether ranking for Armenian/English queries in Armenia and Georgia is a business goal, since the current implementation cannot support it.
