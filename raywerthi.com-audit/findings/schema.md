# Schema.org / Structured Data Audit — raywerthi.com

## Score: 35 / 100

**Justification:** The homepage (`https://raywerthi.com/`) does ship valid, server-rendered JSON-LD (`Organization` + `LocalBusiness`) with correct `@context` ("https://schema.org"), valid non-deprecated `@type` values, and absolute URLs — so the site is not starting from zero. However, the score is pulled down sharply by three compounding problems: (1) a **Critical** site architecture bug — `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` all return a real **HTTP 404** on direct/raw fetch, which means any schema that exists on those pages is invisible to crawlers regardless of what a JS-rendered browser sees; (2) the homepage ships **two conflicting `Organization` blocks** with different business names and different phone number formats, which is a NAP-consistency problem; and (3) the `LocalBusiness` entity is missing `address`, `logo`, `sameAs`, and `contactPoint` — the fields Google actually uses for local/knowledge-panel eligibility. Fixing the routing issue and consolidating/completing the entity data would move this well into the 75–85 range.

---

## What Works

- Homepage JSON-LD uses `"@context": "https://schema.org"` (correct, HTTPS) in both blocks.
- `@type` values used (`Organization`, `LocalBusiness`) are valid, current, non-deprecated schema.org types.
- `url` values are absolute (`https://raywerthi.com`), not relative.
- The React-Helmet-injected block (`data-rh="true"`) is present in the **raw, unrendered HTML** of `/` — confirmed via raw fetch — meaning this particular block is server-rendered/prerendered and *is* actually visible to a crawler doing a simple GET on the homepage (unlike the inner pages, see Critical finding below).
- `areaServed` (Armenia, Georgia, Caucasus) is present on both Organization and LocalBusiness, which is good for a multi-country service business.
- `priceRange` is set on the `LocalBusiness` block ("$$$").
- No deprecated types in use (no `HowTo`, `SpecialAnnouncement`, `FAQPage`, `CourseInfo`, `EstimatedSalary`, `LearningVideo`).
- Real, crawlable business signals exist in the page footer (email `raywerthi@gmail.com`, phone `+374 91 553 822`, brand partners HELLA/WAREMA/Silent Gliss) that are good candidates to fold into the structured data.

---

## Findings

### 1. Inner pages return HTTP 404 on direct/raw fetch — all schema on them is currently unreachable by crawlers
**Severity:** Critical

**Description:** Direct/raw HTTP fetches of `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` all return **status 404** with `X-Vercel-Error: NOT_FOUND` and body `"The page could not be found / NOT_FOUND"` (confirmed independently for `/contacts` via two separate raw fetches — `contacts.json` and `contacts_raw.json`, both `status_code: 404`, `mode_used: "raw"`). This is a client-side-routed SPA on Vercel without a working catch-all rewrite to `index.html`, so any URL that isn't the literal root `/` fails at the server/edge level before any JavaScript (and therefore before any React-Helmet-injected JSON-LD) can run.

Separately captured JS-rendered snapshots (`spa_pages.json`, produced with a forced/"always" render mode) do show full HTML for `/solutions`, `/services`, and `/portfolio`, including page-specific titles, meta tags, and the *same* duplicated `Organization`/`LocalBusiness` JSON-LD block seen on the homepage. This confirms the content and schema **exist** in the app, but that a plain HTTP GET — which is how Googlebot's initial crawl and most SEO/schema validation tools fetch a URL — receives a hard 404 status code first.

**Why this is critical:** Google's indexing pipeline treats HTTP status as authoritative signal before rendering. A URL that returns 404 is generally not queued for indexing regardless of body content, so:
- Any `Organization`/`LocalBusiness`/`Service`/`BreadcrumbList` markup on these 5 pages currently has **zero rich-result eligibility**.
- These pages are also excluded from normal organic indexing, not just rich results.
- This affects 5 of the site's 6 primary navigation destinations (only `/` currently serves 200).

**Recommendation:**
- Add a Vercel rewrite so all app routes fall back to the SPA shell with a **200** status, e.g. in `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
- If the project already prerenders per-route static HTML (the `spa_pages.json` captures suggest per-route `<title>`/meta/canonical are generated), verify the Vercel output directory/build actually deploys those static files at the matching paths (e.g., `solutions.html` → `/solutions`) rather than relying on client-side routing alone — a static hosting export mismatch is a very common cause of this exact symptom.
- After the fix, re-fetch each URL raw (no JS) and confirm `status_code: 200` before treating any schema on those pages as valid.

---

### 2. Duplicate, conflicting `Organization` schema on the homepage
**Severity:** High

**Description:** The raw HTML of `https://raywerthi.com/` contains **two separate `Organization` JSON-LD blocks**:

Block 1 (static, hand-authored, earliest in `<head>`):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Raywerthi",
  "url": "https://raywerthi.com/",
  "telephone": "+374 91 55 38 22"
}
```

Block 2 (React-Helmet injected, `data-rh="true"`, further down `<head>`):
```json
{
  "@type": "Organization",
  "@id": "https://raywerthi.com/#organization",
  "name": "Raywerthi Solutions Hub",
  "telephone": "+374 91 553 822"
}
```

The two blocks disagree on:
- **Business name**: "Raywerthi" vs. "Raywerthi Solutions Hub" (the footer/visible branding only ever says "RayWerThi").
- **Phone formatting**: "+374 91 55 38 22" vs. "+374 91 553 822" (same number, different grouping — technically parseable but a NAP-consistency red flag when combined with the name conflict).

Having two `Organization` entities describing the same page confuses which is the canonical entity Google should associate with the site, and risks Google picking the less accurate "Raywerthi Solutions Hub" name (which does not appear anywhere in visible page content) over the real brand name "RayWerThi".

**Recommendation:** Remove the static, hand-authored block entirely and keep only one authoritative `Organization` node (ideally emitted via the same React-Helmet mechanism so it's consistent across all pages). Standardize the `name` to match the visible brand ("RayWerThi") and use one consistent phone format (E.164 recommended: `+37491553822`).

---

### 3. `LocalBusiness` entity is missing `address` — a core property for local eligibility
**Severity:** Critical

**Description:** The `LocalBusiness` block on the homepage has no `address` (`PostalAddress`) property at all — only `areaServed: ["Armenia","Georgia","Caucasus"]` and `telephone`. The visible footer likewise shows only the country name "Армения" with no street address. `address` is one of Google's explicitly recommended/required properties for `LocalBusiness` to be eligible for local search features (local pack, Maps knowledge panel, etc.), and its absence is the single biggest completeness gap in the current markup.

**Recommendation:** Add a `PostalAddress`. If RayWerThi does not have a public storefront/office and operates as a service-area business, use `areaServed` (already present) together with `PostalAddress` for the registered/service address, and consider omitting a public `streetAddress` only if intentionally unlisted — but at minimum populate `addressLocality`, `addressRegion`, and `addressCountry`.
> Note: exact street address was not confirmed during this audit (the `/contacts` page could not be fetched due to Finding #1). Verify the correct address directly from the client before publishing — flagged separately as Finding #9 (Low).

---

### 4. Generic `LocalBusiness` type instead of a more specific, still-valid subtype
**Severity:** Medium

**Description:** The business sells and installs sun-protection/facade/shading systems (awnings, roller shutters, blinds, motorized curtain tracks) — this maps well to Google-supported, more specific `LocalBusiness` subtypes rather than the generic `LocalBusiness` type currently used.

**Recommendation:** Use `HomeAndConstructionBusiness` (a valid schema.org/Google-recognized subtype of `LocalBusiness`) as the primary `@type`, e.g. `"@type": ["LocalBusiness", "HomeAndConstructionBusiness"]`, which is more descriptive without losing any `LocalBusiness` compatibility.

---

### 5. Organization/LocalBusiness missing `logo`, `sameAs`, `email`, and `contactPoint`
**Severity:** Medium

**Description:** Neither JSON-LD block includes:
- `logo` (an actual logo image URL — distinct from the generic `og-image.jpg` currently used as `LocalBusiness.image`)
- `sameAs` (links to any social profiles / Google Business Profile / Facebook / Instagram, etc. — none currently referenced)
- `email` (the real contact email `raywerthi@gmail.com` is visible in the footer HTML but not reflected in structured data)
- `contactPoint` (`ContactPoint` with `telephone`, `contactType: "customer service"`, `areaServed`, and `availableLanguage` — the site supports RU/HY/EN per its `hreflang` tags, which is exactly what `availableLanguage` is for)

**Recommendation:** Add these properties to the consolidated `Organization` node (see generated JSON-LD below).

---

### 6. No `WebSite` or `BreadcrumbList` schema anywhere on the site
**Severity:** Medium

**Description:** No `WebSite` entity (which would tie the `Organization`/`LocalBusiness` together via `publisher`) and no `BreadcrumbList` were found on any fetched page (homepage or rendered inner pages). The site has a clear hierarchy (Home → Решения (Solutions) → category anchors like `#private`/`#projects`; Home → Услуги (Services); Home → Портфолио (Portfolio)) that would benefit from breadcrumb markup once Finding #1 is resolved and the pages are actually crawlable.

**Recommendation:** Add a `WebSite` node with `@id` linking to the `Organization` via `publisher`, and add per-page `BreadcrumbList` markup once inner pages return 200.

---

### 7. No `Service`/`Product`/`Offer` schema despite dedicated, content-rich `/solutions` and `/services` pages
**Severity:** Info (blocked by Finding #1 — do not implement until routing is fixed, or it will suffer the same indexing problem)

**Description:** The `/solutions` page (confirmed via rendered capture) describes six distinct offerings (external venetian blinds/facade systems, roller shutters, awnings/pergolas, textile/ZIP screens, interior curtain tracks, smart-home/automation control) each tied to specific brands (HELLA, WAREMA, Silent Gliss). None of this is currently expressed as `Service` or `Product` schema. This is a genuine missed opportunity for rich results (e.g., `Service` with `provider`, `areaServed`, `brand`) but is low priority until the page itself is indexable.

**Recommendation:** Once Finding #1 is fixed, add one `Service` entity per solution category with `provider` pointing to the `Organization` `@id`, `areaServed`, and `brand`/`offers` where applicable.

---

### 8. Existing `FAQPage`, if any is later added — informational note only
**Severity:** Info

**Description:** No `FAQPage` markup was detected on any fetched page. This is noted only as a standing policy reminder: Google retired FAQ rich results for all sites (May 7, 2026), so `FAQPage` should **not** be added for Google SERP benefit. If the site later adds a genuine user Q&A section, use `QAPage`, not `FAQPage`.

---

### 9. Verify real contact/address details before publishing new schema
**Severity:** Low

**Description:** Because `/contacts` returns 404 on raw fetch (Finding #1), the audit could not confirm the business's actual street address, precise `openingHours`, or `geo` coordinates. The footer on other pages shows only email (`raywerthi@gmail.com`), phone (`+374 91 553 822`), and the country name "Армения" — no street-level address was found anywhere in the captured content.

**Recommendation:** Once `/contacts` is reachable, pull the authoritative address/hours from that page (or from the client directly) and replace the `[address from /contacts]` placeholder in the JSON-LD below before deployment.

---

## Generated JSON-LD (recommended replacement for both existing homepage blocks)

This consolidates the two conflicting blocks into a single `@graph`, fixes the type, and fills the gaps identified above. Replace the bracketed placeholders with confirmed values before publishing (see Finding #9).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://raywerthi.com/#organization",
      "name": "RayWerThi",
      "url": "https://raywerthi.com/",
      "description": "Официальный представитель HELLA, WAREMA и Silent Gliss в Армении и Грузии. Проектирование, поставка и монтаж солнцезащитных и фасадных систем по всему Кавказу.",
      "logo": "https://raywerthi.com/assets/raywerthi-mark-BJtAylsg.png",
      "image": "https://raywerthi.com/og-image.jpg",
      "email": "raywerthi@gmail.com",
      "telephone": "+37491553822",
      "areaServed": ["Armenia", "Georgia", "Caucasus"],
      "sameAs": [
        "[social/Google Business Profile URL from /contacts]"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+37491553822",
          "email": "raywerthi@gmail.com",
          "contactType": "customer service",
          "areaServed": ["AM", "GE"],
          "availableLanguage": ["ru", "hy", "en"]
        }
      ]
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://raywerthi.com/#localbusiness",
      "name": "RayWerThi",
      "url": "https://raywerthi.com/",
      "description": "Официальный представитель HELLA, WAREMA и Silent Gliss в Армении и Грузии. Проектирование, поставка и монтаж солнцезащитных и фасадных систем по всему Кавказу.",
      "image": "https://raywerthi.com/og-image.jpg",
      "telephone": "+37491553822",
      "email": "raywerthi@gmail.com",
      "priceRange": "$$$",
      "areaServed": ["Armenia", "Georgia", "Caucasus"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[address from /contacts]",
        "addressLocality": "[city from /contacts]",
        "addressCountry": "AM"
      },
      "parentOrganization": {
        "@id": "https://raywerthi.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://raywerthi.com/#website",
      "url": "https://raywerthi.com/",
      "name": "RayWerThi",
      "publisher": {
        "@id": "https://raywerthi.com/#organization"
      },
      "inLanguage": ["ru", "hy", "en"]
    }
  ]
}
```

---

## Priority Summary

| # | Finding | Severity |
|---|---|---|
| 1 | Inner pages (`/solutions`, `/services`, `/portfolio`, `/about`, `/contacts`) return raw HTTP 404 | Critical |
| 3 | `LocalBusiness` missing `address` | Critical |
| 2 | Duplicate/conflicting `Organization` blocks (name + phone mismatch) on homepage | High |
| 4 | Generic `LocalBusiness` type — should add `HomeAndConstructionBusiness` | Medium |
| 5 | Missing `logo`, `sameAs`, `email`, `contactPoint` | Medium |
| 6 | No `WebSite` / `BreadcrumbList` schema | Medium |
| 7 | No `Service`/`Product` schema for solutions/services content | Info (blocked by #1) |
| 8 | No `FAQPage` present — policy note only, no action needed | Info |
| 9 | Address/contact details unverified due to `/contacts` 404 | Low |

---

**Files referenced during this audit:**
`C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\homepage.json`,
`C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\contacts.json`,
`C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\contacts_raw.json`,
`C:\Users\tatos\Desktop\Gena\RayWerThi(WEB)\raywerthi.com-audit\spa_pages.json`
