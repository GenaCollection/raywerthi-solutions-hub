# Local SEO Audit — raywerthi.com

## Score: 20 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| GBP Signals | 25% | 20/100 | 5.0 |
| Reviews & Reputation | 20% | 5/100 | 1.0 |
| Local On-Page SEO | 20% | 30/100 | 6.0 |
| NAP Consistency & Citations | 15% | 25/100 | 3.75 |
| Local Schema Markup | 10% | 20/100 | 2.0 |
| Local Link & Authority Signals | 10% | 25/100 (unverifiable — see Limitations) | 2.5 |
| **Total** | | | **~20/100** |

**Justification:** RayWerThi is a **hybrid** business — a real street address in Yerevan, Armenia, combined with explicit multi-country service-area language ("работает по всему Кавказу," `areaServed: ["Armenia","Georgia","Caucasus"]`) covering Armenia *and* Georgia. The score is low for three compounding reasons, each independently severe: (1) the only two pages that carry any local trust signal at all — `/contacts` (address, phone, map embed, lead form) and `/about` (official-representative claims, Georgia project claims) — return a genuine server-level HTTP 404 on direct fetch, meaning Google cannot currently index or trust anything on them (cross-ref `findings/sitemap.md` Finding #1); (2) reviews/reputation signals are completely absent — no visible reviews, no testimonials, no `aggregateRating` anywhere in schema or markup; (3) the site markets itself for two countries but provides only one address, one phone number, and zero Georgia-specific content or project evidence, undermining the Georgia-market claim it makes in its own meta tags and About copy. Business type: **hybrid** (brick-and-mortar HQ + explicit SAB language for the wider Caucasus region). Industry vertical: **Home Services** (premium sun-shading/automation systems — installation, official brand representation, estimates/measurement visits — closest analog in the Home Services vertical despite not being emergency/repair-oriented).

---

## What Works

- `areaServed: ["Armenia","Georgia","Caucasus"]` is machine-readably declared in both `Organization` and `LocalBusiness` JSON-LD blocks — multi-country intent is at least structured at the organization level, even though it isn't backed by location-specific pages.
- A phone number is present and the *digits* are consistent everywhere it appears (`+374 91 55 38 22` / `+374 91 553 822` — only spacing differs, not the number itself) — homepage `<head>` schema, page-level `@graph` schema, visible contact block, and footer all resolve to the same Armenian mobile number.
- A Google Maps iframe embed exists on `/contacts` (even though it is a weak, non-place-ID embed — see Finding #4) and a physical street address (Tigran Mets 69, Yerevan) is present in visible HTML.
- Multiple contact channels are offered (phone, `mailto:`, WhatsApp button, Telegram button) reflecting awareness that regional clients (AM/GE) commonly prefer messaging apps over forms.
- Portfolio project cards do carry a location tag (map-pin icon + city name), showing the template supports location-tagged proof-of-work — it's just only ever populated with "Ереван" (see Finding #6).
- Country-targeted keywords ("маркизы Ереван," "рафшторы Тбилиси," "солнцезащита Армения") are present in meta titles/descriptions/keywords, showing correct *intent* to rank for both Armenian and Georgian city queries, even though the on-page/technical execution doesn't yet support it.

---

## Findings

### 1. `/contacts` and `/about` — the only pages carrying NAP, map embed, and Georgia-market claims — return real HTTP 404 on direct/crawler fetch
**Severity: Critical**

**Description:** Direct fetch of `https://raywerthi.com/contacts` and `https://raywerthi.com/about` (no JS execution — the way Googlebot's initial crawl of a sitemap URL works) returns a genuine Vercel-level 404, not a soft-404 or client-rendered "not found" page:
```
HTTP/1.1 404 Not Found
Server: Vercel
X-Vercel-Error: NOT_FOUND
```
Confirmed in `about_raw.json` / `contacts_raw.json` (`"status_code": 404`). This is the same site-wide SPA-routing gap documented in `findings/sitemap.md` Finding #1 (missing Vercel rewrite/SPA fallback) — flagged here specifically because it is the **entire local-NAP payload of the site**: the street address, phone, Google Maps embed, and lead-capture form (all on `/contacts`), plus the official-representative and Georgia-project claims (`/about`), only exist behind client-side navigation. A crawler landing on either URL independently (from a backlink, a citation listing, a shared link, or Search Console's own re-fetch of a submitted sitemap URL) sees nothing but a 404.

**Recommendation:** This is the single highest-leverage fix available. Once the Vercel SPA-fallback rewrite (already flagged to `seo-technical`/sitemap) ships, re-verify `/contacts` and `/about` return 200 on a cold, unauthenticated `curl` request before doing any further local-SEO work — every other local signal on this list is downstream of this fix.

---

### 2. `LocalBusiness` schema has no `address` property (required) and no `geo` (recommended)
**Severity: Critical**

**Description:** The page-level `@graph` JSON-LD block (react-helmet-injected, present on `/`, `/about`, `/contacts`) defines a `LocalBusiness` entity with `name`, `description`, `url`, `telephone`, `areaServed`, `priceRange`, and `image` — but **no `address` field at all**, and no `geo` (lat/long). Example (from `contacts_spa.html`, `about_spa.html`):
```json
{"@type":"LocalBusiness","@id":"https://raywerthi.com/#localbusiness","name":"Raywerthi Solutions Hub", ... ,"areaServed":["Armenia","Georgia","Caucasus"],"priceRange":"$$$","image":"..."}
```
`address` is a required property for `LocalBusiness` per Google's structured-data guidelines; its absence, combined with no `geo`, means the schema cannot support Local Pack eligibility or a Knowledge Panel address match even once the 404 issue (Finding #1) is fixed. The visible street address ("Тиграна Мец 69") that *does* exist in the rendered HTML is never surfaced to structured data at all.

**Recommendation:** Add a `PostalAddress` object (`streetAddress`, `addressLocality: "Yerevan"`, `addressCountry: "AM"`) and `geo` (`GeoCoordinates` with 5-decimal lat/long) to the `LocalBusiness` schema. Full schema-type and property remediation (e.g. whether `LocalBusiness` is even the correct subtype) is owned by `seo-schema`; flagging the missing `address`/`geo` here because it is directly a local-signal gap.

---

### 3. Conflicting business name and phone-number formatting across two simultaneous JSON-LD blocks on the same page
**Severity: High**

**Description:** Every page ships **two** `application/ld+json` blocks in the same rendered `<head>` (confirmed: 2 `<script type="application/ld+json">` tags in both `about_spa.html` and `contacts_spa.html`):
- A static, un-marked block baked into the HTML template: `"name": "Raywerthi"`, `"telephone": "+374 91 55 38 22"`.
- A react-helmet-injected block (`data-rh="true"`) with `@graph`: `"name":"Raywerthi Solutions Hub"`, `"telephone":"+374 91 553 822"`.

Both are present in the DOM simultaneously — the helmet script does not appear to remove the static one (it lacks a `data-rh` marker to target for replacement). Combined with a third name variant used in visible branding — `"RayWerThi"` (logo alt text, `aria-label="RayWerThi — Intelligent Shading Systems"`) — the business name appears in **three different forms** across the same site: `RayWerThi`, `Raywerthi`, `Raywerthi Solutions Hub`. The phone number is the same digits in both schema blocks but formatted differently (`91 55 38 22` vs `91 553 822`), which is a minor but real string-level mismatch a citation-matching algorithm can flag.

**Recommendation:** Pick one canonical legal/brand name (recommend `RayWerThi`, matching the visible logo/brand) and one canonical phone format, and use both identically in: the static template schema, the helmet-injected schema, all visible text, meta tags, and — critically — the Google Business Profile listing itself, since GBP name mismatches against on-site NAP are a well-documented ranking suppressor. Remove the duplicate/orphaned static JSON-LD block once the helmet-injected one is corrected, so only one canonical `LocalBusiness` entity is emitted per page.

---

### 4. No verifiable Google Business Profile signal — map embed is a generic text-search query, not a Place ID/CID embed; no reviews, photos, or Posts surfaced anywhere
**Severity: High**

**Description:** The only Maps-related element on the site is an iframe on `/contacts`:
```html
<iframe src="https://www.google.com/maps?q=Армения,%20Ереван,%20Тиграна%20Мец%2069&z=16&output=embed" ...>
```
This uses the `?q=` free-text search parameter, which geocodes an address *string* — it does not reference a Place ID or CID and therefore does not prove a Google Business Profile listing exists, is claimed, or is verified for RayWerThi. It would render identically whether or not a GBP profile has ever been created. No GBP review widget, review count, star rating, photo carousel, or "Posts" feed was found anywhere on the homepage, `/about`, `/contacts`, `/portfolio`, or `/services` (checked directly — no matches for review/rating/testimonial content anywhere on the site; see Finding #5).

**Recommendation:** Replace the `?q=` embed with the real Maps Embed API `place` mode pointed at the actual GBP Place ID once a listing is created/claimed (`https://www.google.com/maps/embed/v1/place?key=...&q=place_id:ChIJ...`). Independently confirm (outside this on-page audit, via Google Business Profile Manager / Search Console) whether a GBP listing actually exists and is claimed for this address — per Whitespark 2026, correct primary GBP category is the #1 local ranking factor, and there is currently zero on-page evidence a profile even exists to have a category on.

---

### 5. Zero reviews, testimonials, or ratings anywhere on the site
**Severity: High**

**Description:** Full-text search of homepage, portfolio, and services content for review/rating/testimonial terms (RU: "отзыв"; EN: "review," "rating," "testimonial") returns no matches, and no schema block anywhere on the site includes `aggregateRating` or `Review`. For a business selling premium installed systems (official HELLA/WAREMA/Silent Gliss representation, priceRange `$$$`), the complete absence of displayed social proof is a significant trust and ranking gap. Per Whitespark 2026's "18-day rule," ranking cliffs appear after ~3 weeks with no new reviews — a site displaying zero reviews at all has no review velocity signal whatsoever to work with.

**Recommendation:** Once a GBP listing is confirmed/created (Finding #4), actively solicit reviews from Armenian and Georgian clients post-installation, and surface a review widget (with `aggregateRating` schema) on the homepage and `/portfolio`. Location-tag testimonials by country/city where possible (see Finding #6) to reinforce the Georgia-market claim with real evidence.

---

### 6. Site claims a two-country footprint (Armenia + Georgia) but has one address, one phone, and zero Georgia-tagged proof of work
**Severity: High**

**Description:** Meta titles/descriptions explicitly target both markets — `"Контакты и заказ замера | Ереван, Тбилиси, Кавказ | Raywerthi"` (contacts), and About page copy states: *"позволяют нам реализовывать проекты любой сложности, в том числе в Грузии"* and *"включая успешные проекты в Грузии"* (successful projects in Georgia). Yet:
- The only address anywhere on the site is the Yerevan HQ (Tigran Mets 69, Armenia) — no Georgia/Tbilisi address, phone, or contact point exists.
- All 5 visible portfolio project cards on `/portfolio` are location-tagged **"Ереван"** (Yerevan) — confirmed via the map-pin icon + city label pattern repeated 5 times in `portfolio_spa.html`. **Zero** portfolio items are tagged with any Georgian city, despite the explicit "successful projects in Georgia" claim on `/about`.
- There is no dedicated Georgia/Tbilisi landing page, no Georgia-specific service content, and no Georgia-based testimonial or case study anywhere on the site.

This is both a credibility gap (the Georgia-project claim has zero visible supporting evidence) and a local-SEO structural gap: a single generic page cannot rank for "Тбилиси"-intent local queries the same way a dedicated, uniquely-optimized location/city page could, and Google has no independent location signal tying RayWerThi to Georgia beyond a keyword mention in body copy.

**Recommendation:** Build a dedicated Georgia/Tbilisi service-area page (per Whitespark 2026, dedicated service pages are the #1 local-organic ranking factor and #2 AI-visibility factor) with Georgia-specific proof: at minimum one tagged Tbilisi/Georgia portfolio project with photos, a Georgia-relevant phone/WhatsApp contact note if one exists, and city-specific copy (not a reskin of the Armenia page). If RayWerThi genuinely has no completed Georgia projects yet, soften or remove the "successful projects in Georgia" claim until evidence exists — an unsupported claim is worse for trust than no claim.

---

### 7. Visible NAP address block omits the city name and postal code
**Severity: Medium**

**Description:** The address widget on `/contacts` renders only:
```
Армения
Тиграна Мец 69
```
— country and street, but no city ("Ереван"/Yerevan) and no postal code, in the actual visible/structured address element. The city only appears indirectly, via the Maps iframe's underlying query string (`q=Армения, Ереван, Тиграна Мец 69`) and via page `<title>`/meta tags — not in the address a user or a citation-matching system would read directly.

**Recommendation:** Complete the visible address to full "Street, City, Country" (and postal code if available): e.g. "Тиграна Мец 69, Ереван, Армения." This also directly feeds Finding #2 (the `PostalAddress` schema needs an `addressLocality` value, which should be sourced from a complete, correct on-page address).

---

### 8. Armenian-language (HY) toggle produces no independently crawlable Armenian content
**Severity: Medium**

**Description:** The header offers a RU/HY/EN language switcher, but (per `findings/sitemap.md` Finding #4) all `hreflang` alternates — including `hy` — point at the identical single URL, and the switch is purely client-side state with no distinct route. The Armenian language does appear once, in the meta `keywords` tag (`արևապաշտպան համակարգեր` — "sun protection systems" in Armenian script), but this is metadata, not indexable page content. For a business headquartered in Armenia and explicitly trying to build trust with Armenian-speaking customers and reviewers, having zero independently crawlable Armenian-language content is a missed local-relevance and local-trust signal — Google cannot rank or serve a language variant that has no distinct crawlable URL.

**Recommendation:** Cross-referenced to `seo-technical`/i18n scope (owned there for implementation) — flagging here because it directly affects local trust with the Armenian home-market audience. Once real per-language URLs exist (e.g. `/hy/...`), ensure the Armenian version is a genuine translation with locally-relevant proof (Armenian testimonials, Armenian-language contact prompts), not just a translated shell.

---

### 9. WhatsApp and Telegram contact buttons on `/contacts` are non-functional placeholders
**Severity: Medium**

**Description:** Both messaging-app buttons on the contact page point to `href="#"` rather than a real `wa.me/...` or `t.me/...` deep link:
```html
<a href="#" ...> WhatsApp</a>
<a href="#" ...> Telegram</a>
```
(confirmed in `contacts_spa.html`). In the Armenia/Georgia/Caucasus region, WhatsApp and Telegram are commonly the preferred first-contact channel over web forms or phone calls — for a business explicitly serving two countries remotely, broken messaging-app links directly reduce lead capture from exactly the local/regional visitors this page is meant to convert (on the rare occasion they reach it directly at all, given Finding #1).

**Recommendation:** Wire both buttons to real deep links (`https://wa.me/37491553822`, `https://t.me/<handle>`) as soon as the page is reachable/crawlable again.

---

### 10. Contact email uses a free Gmail address rather than the owned domain
**Severity: Low**

**Description:** All `mailto:` links sitewide (footer, `/contacts`) point to `raywerthi@gmail.com`, despite the business owning and operating on the `raywerthi.com` domain. This is a minor trust/consistency signal — a domain-branded address (e.g. `info@raywerthi.com`) is generally preferred for citation consistency and reinforces the "official representative of HELLA/WAREMA/Silent Gliss" premium positioning the site otherwise projects.

**Recommendation:** Set up and switch to a branded domain email address; keep the Gmail address as a forward if needed for continuity.

---

### 11. `LocalBusiness` schema uses the generic type with no recommended `openingHoursSpecification`
**Severity: Info** *(brief note — full schema-type/property audit owned by `seo-schema`)*

**Description:** The schema uses plain `LocalBusiness` rather than a more specific subtype, and includes no `openingHoursSpecification`. Both are recommended (not required) properties/refinements that support Local Pack and Maps-panel completeness once the `address`/`geo` gaps (Finding #2) and crawlability gap (Finding #1) are resolved.

**Recommendation:** Deferred to `seo-schema` for the correct subtype recommendation and full property checklist; noted here only because it's a local-signal completeness gap.

---

## Limitations Disclaimer

- **Citation presence (Tier 1 directories — Yelp, BBB, local Armenian/Georgian directories):** Could not be verified in this pass — no live web-search or DataForSEO citation-lookup tool was invoked. This is an unassessed gap, not a confirmed absence; recommend a follow-up citation audit using `business_data_business_listings_search` if/when DataForSEO access is available.
- **Actual Google Business Profile existence/verification status:** Cannot be confirmed from on-page signals alone (the `?q=` map embed proves nothing either way — see Finding #4). Requires direct GBP Manager access or a live Maps/Search API query.
- **Review platform data (Google reviews, Facebook reviews, etc.):** Not assessable without live API/browser access to Google Maps or third-party review platforms; on-page audit only confirms zero reviews are *surfaced on the site itself*.
- **Local link/authority signals (backlinks from local/regional sites, directory backlinks):** Not assessable without a backlink-index tool; scored conservatively low by default given no local citation or partner-page links were found during on-page review.
- **Proximity/ranking-variance factors:** Per Whitespark/Search Atlas research, proximity accounts for the majority of local ranking variance and is entirely outside this site's control — noted for context, not scored.
