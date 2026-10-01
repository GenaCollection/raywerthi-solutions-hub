# SXO (Search Experience Optimization) Audit — raywerthi.com

## SXO Gap Score: 32 / 100

*(This is a separate metric from any general "SEO Health Score" elsewhere in this audit — it measures how well the search experience matches what users and Google actually reward for RayWerThi's target queries, not technical crawlability alone.)*

**Justification (7-dimension breakdown, 100 pts total):**

| Dimension | Score | Why |
|---|---|---|
| Page Type (0-15) | 5/15 | The rendered content (home + 5 client-side-only routes) is well-suited *in substance* to the Hybrid Service/Dealer page type the SERP rewards (process steps, brand affiliation, portfolio, contact form) — but because 5 of 6 routes 404 on direct fetch, Google can only ever see **one flat page**, not the distinct Solutions/Services/Portfolio/About/Contacts pages the SERP's dealer/local-directory competitors use to rank per-intent. Structure exists; it is architecturally invisible. |
| Content Depth (0-15) | 8/15 | Solutions page enumerates 6 product categories with brand attribution; Services page has a clear 6-step process; Portfolio has 8 tagged projects. But no pricing, no spec sheets/PDFs, no Georgia-specific content, no FAQ, no blog/informational layer for awareness-stage queries. |
| UX Signals (0-15) | 5/15 | Working lead-capture form, WhatsApp/Telegram/email/phone listed, embedded Google Map on /contacts. Undercut by: an entirely **empty "Преимущества RayWerThi" section** on the homepage (verified in rendered HTML and screenshot), every non-home URL 404ing on refresh/direct link/share (breaks real users, not just bots), phone number not a clickable `tel:` link, no breadcrumbs. |
| Schema (0-15) | 4/15 | Organization + LocalBusiness JSON-LD present but **no `address`, no `geo`, no `openingHoursSpecification`, no `aggregateRating`**, and no Service/Product/BreadcrumbList schema anywhere. A static placeholder Organization block in `index.html` also duplicates/conflicts with the React-Helmet-injected `@graph` block. |
| Media (0-15) | 7/15 | Good volume of descriptive-alt imagery (hero, solution cards, brand logos, 8 portfolio photos). Undercut by portfolio photos being **generic Unsplash stock images**, not real project photography, on a page explicitly labeled "Реализованные объекты" (completed projects) — an authenticity risk. |
| Authority (0-15) | 2/15 | Official-partner claims for HELLA/WAREMA/Silent Gliss are asserted in text only — no certificate imagery, no dealer ID, no years-in-business figure, no named team/credentials, no testimonials/reviews, and (see SERP analysis below) **raywerthi.com did not appear at all** in results for any of the 5 target queries tested, including the two queries most directly about its own official-partner status. |
| Freshness (0-10) | 3/10 | No `lastmod` in sitemap.xml, no dated content, no blog/news, no "founded in X" — only a generic `© 2026` footer stamp. |
| **Total** | **34 → rounded 32/100** | |

The headline reason this score is low is not that the page content is bad — parts of it (the process steps, the categorized solutions, the contact form) are reasonably well built for the persona once they arrive. It's that **the search experience effectively does not exist**: Google cannot crawl 5 of 6 pages (confirmed 404, see `findings/sitemap.md`), and independent verification below shows RayWerThi does not surface in Google results for any of its core commercial queries. A well-matched page type is worthless if it's unreachable from the SERP — that is the primary SXO finding of this audit.

---

## What Works

- Homepage hero has a single, clear value proposition ("Премиальные солнцезащитные системы на Кавказе") with two well-differentiated CTAs ("Подобрать решение" → /solutions, "Связаться с нами" → /contacts) — good landing-page discipline for the one URL Google can actually see.
- `/services` content (verified in rendered HTML) maps closely to what "Service Page" SERP consensus rewards: named process steps (Консультация → Замеры → Поставка → Монтаж → Сервис и поддержка) with icons and short descriptions.
- `/solutions` cleanly segments 6 product categories (наружные жалюзи, роллставни, маркизы, текстильные экраны, интерьерные шторы/карнизы, Smart Home) each tagged with the responsible brand (HELLA/WAREMA/Silent Gliss) and a deep-link into a pre-filled contact form (`/contacts?solution=...`) — a low-friction, persona-aware CTA pattern.
- `/contacts` has a real, geocoded Google Maps embed for "Армения, Ереван, Тиграна Мец 69," a working multi-field lead form (name, phone, email, property type, region, solution type, comment), and three parallel contact channels (phone, email, WhatsApp/Telegram).
- The 8-project portfolio grid includes a city tag and product/brand tag per project (e.g., "Вилла в Цахкадзоре — Цахкадзор — Наружные жалюзи — HELLA"), which is the right data shape for local + product signals even though the depth is currently shallow.
- `robots.txt` allows all crawlers and correctly declares the sitemap — nothing is being technically blocked; the 404s are a routing config gap, not a deliberate exclusion, so this is a fixable architecture problem rather than a content strategy problem.

---

## SERP Reality Check: 5 Target Queries

Queries chosen to reflect the RU/HY/EN, Armenia+Georgia, multi-brand nature of the business:

| # | Query | Intent | Dominant Result Types Observed | RayWerthi Visible? |
|---|---|---|---|---|
| 1 | "солнцезащитные системы Ереван" | Awareness — what types exist | Generic multi-country product/catalog sites, informational explainer content, B2B directory (Kompass) | **No** |
| 2 | "маркизы Тбилиси купить" | Consideration/local — who installs in Tbilisi | Local business directory (`yell.ge`) with real Tbilisi street addresses (Digomi, Didube), regional delivery-catalog site, foreign (Kazakhstan) product pages | **No** |
| 3 | "автоматические жалюзи Армения" | Consideration/technical — automated blind options | An actual Armenian retailer (`alp.am`) product-catalog page ranks; remainder are generic RU smart-blinds explainer/catalog content | **No** |
| 4 | "HELLA официальный представитель Армения" | Decision — verify official distributor | HELLA's own global corporate site, Wikipedia, and — critically — an **unrelated Armenian automotive-parts shop** (`areg.am/hella`, selling HELLA car lighting, a different product vertical entirely) | **No** |
| 5 | "Silent Gliss Армения карнизы" | Decision — verify official distributor | Multiple **Moscow-based Silent Gliss dealers** (sclassic.ru, paradox-interior.ru, vesta-decor.ru, elektrokarniz.pro, gluts.ru) — competing distributors for a different territory outranking the entity that should own this exact query | **No** |

**RayWerthi did not appear in the visible results for any of the 5 queries tested.** This is consistent with — and directly explained by — the crawl/index failure documented in `findings/sitemap.md`: with only `/` returning 200, Google has almost nothing to rank, and the one page it can index (home) is not specifically optimized for any single one of these queries, since all the query-specific content (solutions catalog, service process, Georgia coverage claims, brand-partner proof) lives on the 404ing subpages.

**SERP consensus dominant page type across all 5 queries:** a mix of **Local/Directory pages** (query 2) and **Hybrid Dealer/Product pages** (queries 1, 3, 5) — i.e., pages that pair a real local address/service area with a product catalog and brand name, often per-city. Query 4 is contaminated by an unrelated automotive-parts entity sharing the "HELLA" brand name, which is itself a finding (see below).

---

## Page-Type Mismatch Detection

**Target page classified (taxonomy: `page-type-taxonomy.md`):** Home page = **Hybrid (Service + Content)** bordering **Service Page** — problem statement (hero) → solution categories → brand credibility → process → portfolio teaser → contact CTA. This is architecturally the *right* shape.

**SERP dominant type:** **Local Page / Dealer-Hybrid** — directory listings and distributor pages with real per-city NAP data and product catalogs.

**Severity: CRITICAL** — not primarily because the *type* is wrong (it's close), but because:
1. The taxonomy-matching content lives on URLs (`/solutions`, `/services`, `/portfolio`, `/about`, `/contacts`) that return HTTP 404 on direct fetch — so Google cannot index the very sections that would make the type-match count.
2. Where the SERP rewards **Local Page** signals specifically (query 2, Tbilisi), RayWerthi has no matching content at all: no Georgia office address, no Tbilisi-specific page, no LocalBusiness schema `address`/`geo` field even for the one address it does have (Yerevan).

This mismatch/indexability combination is the primary finding of this audit and should be treated as more urgent than any content-quality issue below.

---

## User Stories (derived from the SERP signals above)

1. **As a Yerevan homeowner researching options** (Awareness), I want to understand which shading system type fits my house, because I don't yet know the difference between маркиза/рафштора/жалюзи, but I'm blocked by an **information gap**: Google shows me generic multi-market catalog/explainer sites instead of RayWerThi's own `/solutions` page — which *does* have exactly this categorized breakdown — because that page 404s for crawlers.
   *(Source: SERP query 1 dominant type = generic informational/catalog sites; `/solutions.html` confirms the matching content exists but is unreachable.)*

2. **As a Tbilisi-based property owner or developer** (Consideration, trust-seeking), I want to confirm a supplier that reliably installs in Georgia, because cross-border logistics is a real risk for a premium install, but I'm blocked by a **trust gap**: query 2 surfaces a local directory (`yell.ge`) with concrete Tbilisi street addresses, while RayWerthi's own site has no Georgia office address, no Tbilisi-specific page, and all 8 portfolio projects are tagged with Armenian cities only (Ереван, Цахкадзор, Аштарак, Севан).
   *(Source: SERP query 2; portfolio project city tags in `spa_pages.json`.)*

3. **As a technical evaluator/architect** (Consideration, technical), I want spec sheets, smart-home integration details, and price ranges for automated blind systems, because I need to spec a real project, but I'm blocked by **technical/price ambiguity**: `/services` mentions "умный дом" generically with no named platforms (KNX, Google Home, Alexa, etc.), no price range, and no downloadable spec PDF anywhere on the site.
   *(Source: SERP query 3, `alp.am` product-spec catalog and smart-blind explainer competing content; `/services.html` content review.)*

4. **As a high-value B2B buyer verifying legitimacy before a large purchase** (Decision, risk-averse), I want proof RayWerthi is the genuine official HELLA/WAREMA/Silent Gliss partner, because buying grey-market goods for an expensive villa/office installation is a real risk, but I'm blocked by an **entity-collision and trust gap**: searching the exact branded-distributor queries returns HELLA's own generic global site, Wikipedia, and an *unrelated automotive-parts shop* — not RayWerthi — and the Silent Gliss query surfaces Moscow dealers instead.
   *(Source: SERP queries 4 and 5 — RayWerthi absent from both; `areg.am/hella` is a different vertical entirely.)*

5. **As a visually-driven prospective buyer (villa owner)** (Decision), I want to see rich, credible past-project evidence — photos, scale, client feedback — before hiring, because a premium shading installation is expensive, but I'm blocked by **shallow, unverifiable proof**: each portfolio card is only a title + city + one product tag, uses stock Unsplash photography rather than real project photos, has no square-meterage/before-after, no client quote, and no individual case-study page to open or share.
   *(Source: `portfolio.html`/`spa_pages.json` — 8 cards, no body copy; zero testimonial-related text found anywhere in `home.html`.)*

Stories span Awareness (#1), Consideration (#2, #3), and Decision (#4, #5) — 3 journey stages.

---

## Persona Scoring

| Persona | Journey Stage | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|---|
| P1 — Yerevan homeowner, new to the category | Awareness | 18/25 | 16/25 | 8/25 | 8/25 | 50/100 | Needs Work |
| P2 — Tbilisi developer/property owner | Consideration | 10/25 | 10/25 | 6/25 | 6/25 | **32/100** | Critical Mismatch |
| P3 — Technical evaluator / architect | Consideration | 15/25 | 14/25 | 9/25 | 7/25 | 45/100 | Needs Work |
| P4 — B2B buyer verifying legitimacy | Decision | 12/25 | 12/25 | 7/25 | 6/25 | 37/100 | Critical Mismatch |
| P5 — Visual/portfolio-driven buyer | Decision | 14/25 | 15/25 | 8/25 | 10/25 | 47/100 | Needs Work |

### Weakest Persona: P2 — Tbilisi developer/property owner (32/100)
**Top issue:** The site claims Caucasus-wide/Georgia coverage in copy ("по всему Кавказу, включая Грузию") but backs it with zero Georgia-specific proof — no Georgia office/address, no Tbilisi portfolio project, no Georgia phone number, no `hy`/`en`/Georgian-market schema. A Tbilisi buyer has no way to confirm real local capability and will default to the directory-listed local competitor instead.
**Recommended fix:** Add a real or partnered Georgia contact point (even a regional phone number or partner office address) to the `/contacts` page and LocalBusiness schema; add at least 1–2 Tbilisi/Georgia projects to the portfolio with real photography; consider a dedicated `/georgia` or `/tbilisi` landing section once the indexability fix (below) lands.

### Systemic Issue Across All Personas
**Trust dimension is the weakest across the board (6–9/25 for every persona).** No testimonials, no review counts/star ratings, no certification imagery, no named installer/team credentials, and — most fundamentally — the site is absent from every SERP tested, so even a persona who would trust the content never encounters it via search in the first place.

### Priority Actions
1. Fix the routing/indexability issue (P0, cross-referenced from `findings/sitemap.md`) — no persona score above can meaningfully improve until Google can actually crawl `/solutions`, `/services`, `/portfolio`, `/about`, `/contacts`.
2. Build real Georgia/Tbilisi proof (P2, weakest persona) — address, phone, or partner presence, plus at least one genuine Georgian project in the portfolio.
3. Add trust infrastructure site-wide (systemic issue) — testimonials/reviews, certificate or "official partner since [year]" badge, named team bios, real (non-stock) project photography.

---

## Findings

### 1. Search-facing pages are unreachable by Google — RayWerthi does not appear in any of 5 target-query SERPs tested
**Severity: Critical**

**Description:** Direct fetch confirms `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` all return genuine server-level HTTP 404 (Vercel `NOT_FOUND`), while only `/` returns 200 (full detail and root-cause already documented in `findings/sitemap.md`, Finding #1). The downstream, SXO-specific consequence verified in this audit: searching Google for 5 realistic commercial queries — "солнцезащитные системы Ереван," "маркизы Тбилиси купить," "автоматические жалюзи Армения," "HELLA официальный представитель Армения," and "Silent Gliss Армения карнизы" — returned **zero appearances of raywerthi.com** in any result set. Competitors, generic catalog sites, local directories, and even an unrelated automotive-parts business (`areg.am/hella`) all outrank a site that literally cannot be crawled beyond its homepage.

**Recommendation:** Treat as P0, owned jointly with `seo-technical`/dev per the sitemap finding: add the Vercel SPA rewrite (`vercel.json` with a catch-all rewrite to `/index.html`) so every route returns 200 with its React-rendered content. This is the single highest-leverage SXO fix available — it doesn't just fix a technical score, it is the precondition for any of the content/UX findings below to matter at all in search.

---

### 2. Site architecture collapses 5 distinct search intents into 1 crawlable URL, while the SERP rewards per-intent pages
**Severity: Critical**

**Description:** The SERP consensus across all 5 target queries is dominated by pages built around a single, narrow intent: a local directory listing for "маркизы Тбилиси," a product catalog for "автоматические жалюзи Армения," a distributor/dealer page for "Silent Gliss Армения." RayWerthi's content model matches this shape *in principle* (distinct Solutions/Services/Portfolio/About/Contacts sections exist in the React app) but, because of Finding #1, Google can only ever index the single combined home route. Even after the routing fix, the current information architecture has no per-city or per-brand landing pages (e.g., nothing addressing "Тбилиси," "Грузия," or a dedicated "HELLA-жалюзи" page), so it will still under-serve the more specific queries that make up a large share of the tested SERP.

**Recommendation:** After the routing fix lands, extend the architecture with intent-specific pages: at minimum a Georgia/Tbilisi-focused page (or clearly marked section within `/contacts` and `/portfolio`) and per-brand or per-category pages under `/solutions` (e.g., `/solutions/markizy`, `/solutions/rollstavni`) that can each independently rank for their narrower query variants, mirroring the dealer/catalog structure the SERP already rewards.

---

### 3. "Преимущества RayWerThi" section renders completely empty
**Severity: High**

**Description:** The homepage has a full `<h2>`-titled section, "Преимущества RayWerThi" (RayWerthi's Advantages), between "Как мы работаем" and "Наши проекты." Its content container renders as an empty `<div class="grid ... max-w-5xl mx-auto"></div>` with zero child elements — confirmed both in the parsed `home.html` and visually in `screenshots/home-desktop.png`, where the section is a blank gap with only the heading. This is precisely the section that should carry the strongest Authority/Trust signals (years in business, warranty length, certified installers, etc.) — the exact content missing from the Authority dimension of the SXO score above — and instead it delivers nothing.

**Recommendation:** Investigate the frontend data source for this section (likely a CMS/content array that failed to populate or a broken map/render call) and populate it with 3–6 concrete, evidence-backed advantage cards (e.g., "Официальный партнёр с [год]," "Гарантия до [N] лет," "Собственная команда монтажников," "Прямые поставки от производителя — без посредников"). This single fix meaningfully improves both the Authority and UX Signals dimensions of the score above.

---

### 4. LocalBusiness schema is missing address, geo-coordinates, and opening hours — despite a real, geocoded office existing on `/contacts`
**Severity: High**

**Description:** The `LocalBusiness` JSON-LD block present on every page (`{"@type":"LocalBusiness", ... "telephone":"+374 91 553 822", "areaServed":[...], "priceRange":"$$$", "image":"..."}`) has no `address` (PostalAddress), no `geo` (latitude/longitude), and no `openingHoursSpecification`. This is despite `/contacts` visually and functionally embedding a real Google Maps iframe for "Армения, Ереван, Тиграна Мец 69" — the address data exists in the page but was never translated into structured data. This directly undercuts eligibility for Google's local search features (local pack, Maps knowledge panel, Merchant listing) precisely where SERP query 2 ("маркизы Тбилиси купить") shows local/directory listings dominating.

**Recommendation:** Add the full address to both `Organization`/`LocalBusiness` schema blocks: `"address": {"@type":"PostalAddress","streetAddress":"Тиграна Мец 69","addressLocality":"Ереван","addressCountry":"AM"}`, plus `"geo": {"@type":"GeoCoordinates","latitude":...,"longitude":...}`. If a Georgia service point/partner address exists or can be added (see Finding #6), model it as a second `LocalBusiness`/`Place` entity via `hasPart` or a second `@graph` entry so Georgia-specific local intent has something to attach to. Cross-reference: recommend `/seo schema` for full schema generation and validation.

---

### 5. No Georgia/Tbilisi-specific presence despite explicit "Georgia coverage" claims
**Severity: High**

**Description:** Copy on the homepage, `/about`, and footer repeatedly states RayWerthi serves "по всему Кавказу, включая Армению и Грузию" (all of the Caucasus, including Armenia and Georgia) — but every concrete proof point is Armenia-only: the only address is in Yerevan, the LocalBusiness `telephone` is an Armenian (+374) number, and all 8 portfolio project city tags are Armenian cities (Ереван, Цахкадзор, Аштарак, Севан) — none in Tbilisi or elsewhere in Georgia. SERP query 2 ("маркизы Тбилиси купить") shows a Tbilisi-specific local directory (`yell.ge`) with real Digomi/Didube street addresses dominating — exactly the kind of concrete local proof RayWerthi's page lacks for the Georgian market.

**Recommendation:** If Georgia projects have actually been completed, add at least 1–2 to the portfolio with real photos and city tags (e.g., "Тбилиси"). If there is a Georgian contact number, partner installer, or service address, surface it explicitly on `/contacts` and in schema. If Georgia service is currently lead-only (no local presence), soften the claim or make clear it's serviced from Armenia, since an unsubstantiated "we cover Georgia" claim that a Tbilisi buyer can't verify actively damages trust more than a modest, honest claim would.

---

### 6. "HELLA" brand-name entity collision suppresses branded-distributor visibility
**Severity: Medium**

**Description:** Searching "HELLA официальный представитель Армения" returns HELLA's own global corporate site, a Wikipedia article, and — most notably — `areg.am/hella`, an Armenian **automotive parts** retailer selling HELLA-branded car lighting/electronics, a completely different product vertical from RayWerthi's sun-shading systems. HELLA is a diversified German manufacturer with a much larger automotive-parts brand footprint than its architectural shading division, so RayWerthi is competing for brand-name search real estate against an unrelated, better-established vertical under the same trademark — on top of not being indexed at all (Finding #1).

**Recommendation:** This cannot be fully solved by RayWerthi alone (it's a shared-trademark SERP reality), but the site should maximize disambiguation once indexed: consistently pair "HELLA" with "солнцезащитные системы" / "жалюзи" / "маркизы" (shading-specific terms) in title tags, H1s, and schema `description` fields — which the current `/about` and `/solutions` titles already do reasonably well ("Каталог систем: Маркизы, Рафшторы..." | Raywerthi) — and consider explicitly stating "не путать с автозапчастями HELLA" (not to be confused with HELLA auto parts) in on-page copy or an FAQ to capture the disambiguation intent directly. Cross-reference: recommend `/seo content` for a deeper E-E-A-T / entity-disambiguation review once pages are indexed.

---

### 7. Portfolio uses generic stock photography, not real project photos, on a page claiming "Реализованные объекты"
**Severity: Medium**

**Description:** All 8 portfolio images on the homepage and `/portfolio` resolve to `images.unsplash.com` stock photo URLs (e.g., `https://images.unsplash.com/photo-1600596542815-...`), not custom project photography, despite each card being labeled with a specific real-sounding project name, city, and brand ("Вилла в Цахкадзоре — Цахкадзор — Наружные жалюзи — HELLA"). For a persona in the Decision stage evaluating whether to trust RayWerthi with an expensive installation (User Story #5), discovering the "completed project" photos are stock imagery is a credibility risk if noticed, and it also means these images carry no unique visual/EXIF or reverse-image-search signal that could reinforce authenticity or local relevance to Google Images.

**Recommendation:** Replace stock imagery with real, on-site project photography (own hosting, descriptive filenames/alt text, e.g., `villa-tsaghkadzor-hella-blinds.jpg`) as projects are completed. Where real photos aren't yet available for older projects, either clearly caption them as illustrative or prioritize photographing the next few completed installs before further promoting this section.

---

### 8. No pricing, spec sheets, or downloadable technical content for evaluators
**Severity: Medium**

**Description:** `/services` and `/solutions` describe the process and categories well but contain zero price ranges, no specification PDFs, and no named smart-home integration protocols beyond the generic phrase "умный дом" (smart home). SERP query 3 ("автоматические жалюзи Армения") shows competing content (`alp.am` and generic explainer articles) that goes further into product specifics and use-case framing for exactly this persona (User Story #3, Technical evaluator).

**Recommendation:** Add at minimum a "от [price]" starting-price indicator per solution category (common trust-building pattern even for consultative/custom-quote businesses), and name the specific smart-home platforms/protocols supported (e.g., KNX, Google Home, Apple HomeKit, Alexa) if applicable. Consider a downloadable brochure/spec-sheet PDF per brand as gated or ungated content.

---

### 9. Contact phone number is not a clickable `tel:` link
**Severity: Low**

**Description:** The phone number `+374 91 553 822` appears as plain text (not wrapped in `<a href="tel:...">`) in the footer across all pages and in the `/contacts` NAP block, while the email address correctly uses `mailto:`. On mobile — the device class most likely to be used by a homeowner calling from a jobsite or during a Google search session — this adds unnecessary friction to the lowest-friction possible conversion action (tapping to call).

**Recommendation:** Wrap the phone number in `<a href="tel:+37491553822">+374 91 553 822</a>` sitewide (footer, `/contacts` NAP block, and anywhere else it appears).

---

### 10. No testimonials, reviews, or third-party trust signals anywhere on the site
**Severity: Medium**

**Description:** A full-text scan of `home.html` and all rendered subpage HTML in `spa_pages.json` found no testimonial quotes, no star ratings, no review counts, no "as seen in" or press mentions, and no `Review`/`AggregateRating` schema. This is the single lowest-scoring dimension across all 5 personas (Trust: 6–9/25 for every persona) and compounds Finding #1: since RayWerthi doesn't surface in search either, there is currently no independent way — on-page or off-page — for a prospective buyer to validate the "official partner" and "premium quality" claims made throughout the copy.

**Recommendation:** Collect and publish 3–5 real client testimonials (ideally with name/city/project type) tied to specific portfolio projects, and pursue Google Business Profile reviews for both the Armenia (and future Georgia) presence — which also directly supports local-pack eligibility for queries like #2 in the SERP analysis above. Cross-reference: recommend `/seo local` for a full Google Business Profile audit given the strong local-intent signal in the Tbilisi query.

---

## Limitations

- WebSearch results used for SERP analysis are AI-summarized snippets of Google's organic results, not a full manual SERP capture — they do not reliably surface Featured Snippets, People Also Ask boxes, ad density, AI Overview presence/citations, or exact ranking positions. All SERP-consensus and page-type classifications above are based on the domains/titles/summaries returned, which is directionally reliable for "is RayWerthi present at all" (a binary, clearly answered "no" across all 5 queries) but not precise enough to state RayWerthi's exact rank if it were indexed.
- Only `home.html` (the one 200-status page) was screenshot-reviewed in this pass; `/about`, `/services`, `/solutions`, `/portfolio`, `/contacts` were assessed from the captured rendered HTML in `spa_pages.json`/`*_rendered.json` rather than fresh screenshots, since a prior agent run already captured this data and re-fetching was explicitly out of scope for this pass.
- No access to Google Search Console, Google Analytics, or any real click/impression/ranking data — all findings are based on structural/content analysis and point-in-time SERP snippets, not verified historical performance.
- Persona scores are evidence-grounded in the SERP signals observed but, per the framework's own caveat, snippet-level SERP summaries provide a thinner signal base than a full manual SERP audit with PAA/ads/related-searches visibility — treat the exact point totals as directional, not precise.
- Georgian-language and Hy (Armenian) search behavior was not separately tested; all 5 queries were run in Russian, the site's default/only real language (see `findings/sitemap.md` Finding #4 on non-functional hreflang).

---

## Cross-References for Other Audit Agents

- **seo-technical / dev**: Own Finding #1 (SPA rewrite fix) jointly with `findings/sitemap.md` Finding #1 — this is the precondition for every other SXO finding to matter.
- **`/seo schema`**: Recommended for Finding #4 (LocalBusiness address/geo/hours) and to resolve the duplicate/conflicting Organization schema blocks noted during data collection.
- **`/seo local`**: Recommended for Finding #5 (Georgia/Tbilisi presence) and Finding #10 (Google Business Profile / reviews), given the strong local-pack signal observed in the Tbilisi SERP.
- **`/seo content`**: Recommended for Finding #6 (HELLA entity disambiguation / E-E-A-T) and Finding #8 (technical/spec depth for evaluator personas).
- **`/seo page`**: Recommended for a page-level audit once routing is fixed and each of `/solutions`, `/services`, `/portfolio`, `/about`, `/contacts` becomes independently assessable as a real, indexable page.

---

Generate a PDF report? Use `/seo google report`.
