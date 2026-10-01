# Content Quality / E-E-A-T Findings — raywerthi.com

## Score: 34 / 100

**Justification:** The single largest determinant of this score is not the quality of the prose itself but reach: a sibling technical audit confirmed that `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` — five of this site's six pages — return HTTP 404 on direct fetch due to a Vercel SPA routing bug affecting this React/Vite build. Content quality is evaluated on a per-URL basis by Google; a page that 404s cannot be crawled, indexed, or credited with E-E-A-T signals, regardless of what is rendered client-side once JS executes and React Router takes over. Effectively, only the homepage (`/`) is currently reliably indexable. Even setting the routing bug aside, a 6-page SPA representing three international brands (HELLA, WAREMA, Silent Gliss) in a specialized B2B/B2C installation trade across two country markets (Armenia, Georgia) with RU/HY/EN switching has an inherently thin content footprint relative to the topical breadth it needs to cover (products, services, installation process, portfolio/case studies, service areas per country, authorized-dealer credentials, contact/trust signals) — and prior data-gathering was not able to confirm sufficient word counts, author/company credential markers, or freshness signals on the pages that were reachable. Trustworthiness (30% weight) is the most consequential open question and could not be fully verified.

---

## What Works

- **Legitimate authority hook**: The brand positions itself as an official representative of three recognized international manufacturers (HELLA, WAREMA, Silent Gliss). If substantiated on-page (authorization letters, dealer numbers, logos with links to manufacturer partner pages), this is a genuine, defensible authoritativeness signal that is rare for local installers to have.
- **Multi-market, multi-language targeting** (RU/HY/EN) reflects real audience needs in Armenia/Georgia rather than generic templated localization, which is a positive experience/relevance signal when executed with market-specific content (not just UI string translation).
- **Niche vertical focus** (sun-shading/automation installation) is narrow enough that genuine first-hand installation expertise and project experience — if surfaced as case studies/portfolio detail — could differentiate this site strongly from thin competitor pages in the same niche.
- **Homepage is reachable and indexable**, giving Google at least one crawlable entry point with brand and service framing intact.

---

## Findings

### 1. Five of six pages return HTTP 404 on direct fetch — content is effectively unindexed
- **Severity:** Critical
- **Description:** The sibling technical audit confirmed `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` return HTTP 404 when fetched directly (non-JS request), consistent with a Vercel SPA routing/rewrite misconfiguration rather than genuinely missing content. Googlebot's initial crawl/discovery pass and any non-rendering consumer (AI crawlers, link previews, most SEO tools, some AI Overview/citation pipelines) will see these as dead pages. Any E-E-A-T value in the underlying React content is functionally worthless until this is fixed, because a page search engines record as 404 will not be indexed or ranked no matter how strong its content is.
- **Recommendation:** Treat as the top-priority fix ahead of any further content work. Add a `vercel.json` rewrite rule (e.g., catch-all `{"source": "/(.*)", "destination": "/index.html"}`) or switch to Vercel's built-in SPA fallback so all client-side routes resolve to 200 with the SPA shell server-side. Re-run this content audit only after routing is confirmed fixed — nearly every finding below is provisional until then.

### 2. Trustworthiness signals unverified — highest-weighted E-E-A-T factor is the biggest blind spot
- **Severity:** High
- **Description:** Trustworthiness carries the largest weight (30%) in E-E-A-T scoring, and it depends heavily on the `/contacts` and `/about` pages — precisely the two pages confirmed 404 on direct fetch. Without confirmed access to these pages, it could not be verified whether the site displays a physical address, phone number, business registration/legal entity name, official manufacturer-authorization proof, HTTPS/security posture on all subpages, or a privacy policy — all baseline trust markers Quality Raters are instructed to look for, especially for a site that presumably handles quotes/leads for physical installation work.
- **Recommendation:** Once routing is fixed, verify `/contacts` includes a real street address, local phone numbers for both Armenia and Georgia, and a company registration number if applicable. On `/about`, publish visible proof of manufacturer authorization (e.g., certificates or a statement with verifiable partner-page links from hella.com, warema.com, silentgliss.com).

### 3. Expertise/Experience signals (author credentials, project case studies) not confirmed
- **Severity:** High
- **Description:** Prior review could not confirm named staff/installer credentials, years-in-business claims, certifications, or detailed project case studies with photos/specs on `/portfolio` or `/services` (both currently 404 on fetch). Generic "we install sun-shading systems" copy without specific project details, measurable outcomes, or first-hand installation photography reads as low-experience/low-specificity content under Sept 2025 QRG guidance, and is also the type of content most likely to look AI-generated/templated if not addressed.
- **Recommendation:** Once accessible, audit `/portfolio` for real project photography (before/after, in-progress installation), address/region tags per project (Yerevan, Tbilisi, etc.), and named team members with role/tenure. Add a short "why choose us" section with concrete differentiators (response time, warranty terms, number of completed installations) rather than generic claims.

### 4. Word-count / topical-coverage floors not confirmed against page-type minimums
- **Severity:** Medium
- **Description:** Insufficient data gathered for `/solutions`, `/services`, `/portfolio`, `/about`, and `/contacts` — flag for re-audit. These map to service-page (800-word floor) and location/about-page (500-600 word floor) content types respectively, but actual rendered word counts were not captured in prior turns before the 404 issue was discovered and turns were exhausted. Cannot currently confirm whether topical coverage is adequate or thin.
- **Recommendation:** Re-run word count and topical-coverage extraction against `extracted_text` from a Playwright-rendered fetch (`render_page.py --mode always`) once the routing fix is deployed, since raw fetch will continue to 404 until then.

### 5. Homepage content depth and freshness signals not fully captured
- **Severity:** Low
- **Description:** Insufficient data gathered for `/` (homepage) on readability metrics, exact word count, keyword density, and publication/update-date signals — flag for re-audit. General framing (brand rep for HELLA/WAREMA/Silent Gliss, sun-shading/automation, Armenia/Georgia) was established, but sentence-level readability scoring and freshness metadata were not captured before prior sessions ran out of turns.
- **Recommendation:** Re-fetch `/` with `render_page.py` and run full readability (Flesch or equivalent) and freshness checks; confirm homepage meets the 500-word service-page-adjacent floor with genuine topical coverage rather than boilerplate.

### 6. Risk of repetitive/templated structure across RU/HY/EN variants unverified
- **Severity:** Low
- **Description:** Insufficient data gathered on whether the RU/HY/EN language variants contain genuinely localized content (market-specific references, currency, regional case studies) versus straight machine-translated strings — flag for re-audit. Sept 2025 QRG flags repetitive structure across pages/variants as a low-quality AI-content marker, which is a particular risk for thin, template-driven multilingual SPAs.
- **Recommendation:** When re-auditing, compare corresponding sections across all three locales for genuine localization (not just translation) — e.g., Armenia-specific vs. Georgia-specific service area language, local phone/address per market, and currency/units.

### 7. AI citation readiness could not be assessed
- **Severity:** Low
- **Description:** Insufficient data gathered on structured data (schema.org LocalBusiness/Organization markup), clear H1-H6 hierarchy, and quotable/extractable facts (e.g., "X installations completed," "authorized dealer since YYYY") across the site — flag for re-audit. This is compounded by the 404 routing issue, since AI crawlers that don't execute JS will hit the same dead ends as Googlebot's initial pass.
- **Recommendation:** Once routing is fixed, add `LocalBusiness`/`Organization`/`Service` JSON-LD schema (business name, address, phone, service area, brand affiliations) and ensure each page has one clear H1 and logically nested subheadings to improve extractability for AI Overviews and other LLM citation surfaces.

---

## Priority Order for Remediation
1. **Fix Vercel SPA routing (Critical)** — unblocks everything else and is a prerequisite for any further content audit work to produce reliable data.
2. **Verify and strengthen trust signals on `/contacts` and `/about` (High).**
3. **Verify/build out expertise and experience signals in `/portfolio` and `/services` (High).**
4. **Re-run full word-count, readability, localization, and structured-data checks (Medium/Low)** once pages are confirmed to return HTTP 200.
