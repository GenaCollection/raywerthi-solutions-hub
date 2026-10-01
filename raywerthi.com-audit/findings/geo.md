# GEO / AI-Search Readiness Audit — raywerthi.com

## Score: 16 / 100

| Dimension | Weight | Score (of weight) |
|---|---|---|
| Citability | 25% | 4 / 25 |
| Structural Readability | 20% | 3 / 20 |
| Multi-Modal Content | 15% | 3 / 15 |
| Authority & Brand Signals | 20% | 4 / 20 |
| Technical Accessibility | 20% | 2 / 20 |
| **Total** | 100% | **16 / 100** |

**Justification:** This is a Vite/React client-side-rendered (CSR) SPA with two compounding, near-total blockers for AI search visibility. First (technical accessibility floor): a direct, non-JS HTTP request — exactly how GPTBot, ClaudeBot, PerplexityBot, CCBot, Amazonbot, and OAI-SearchBot fetch pages — returns a genuine server-level **HTTP 404** for `/solutions`, `/services`, `/about`, `/portfolio`, and `/contacts` (5 of 6 sitemap URLs; verified via curl and via `render_page.py --mode never`, headers show `Server: Vercel` / `X-Vercel-Error: NOT_FOUND`). Only `https://raywerthi.com/` returns 200. This is a hosting/routing misconfiguration (missing Vercel SPA rewrite) already flagged as the top Critical finding in `findings/sitemap.md`; it is restated here because it is equally fatal to AI-search discovery. Second (content-access floor, independent of the 404 bug): even the one page that *does* return 200, the homepage, delivers an essentially empty document to any crawler that does not execute JavaScript — `raw_content` is 2,397 bytes and its entire `<body>` is `<div id="root"></div>`. All visible prose (hero copy, brand descriptions, "how we work" steps, project cards, footer) only exists in the Playwright-*rendered* DOM (34,875 bytes), which is not what GPTBot/ClaudeBot/PerplexityBot/CCBot/Amazonbot fetch — none of these crawlers are known to execute client-side JavaScript. Net effect: the *entire site's* independently-fetchable, non-JS text budget is a single meta description (~30 words) plus a static JSON-LD Organization block. Even the JS-rendered homepage only carries 167 words of extractable body text total (`extracted_text`, trafilatura-stripped) for the whole site — that's the entire citable corpus, not one passage; there is no single self-contained 134–167-word answer block anywhere, no FAQ content, no statistics, no dated/authored content, and no social/entity corroboration (no Wikipedia, Reddit, YouTube, LinkedIn, or any social link found on-page). robots.txt does not explicitly block AI crawlers (they fall through to the permissive `User-agent: * / Allow: /` group), and `llms.txt` does not exist (404). Given the compounding 404s + CSR-only content + zero brand/authority corroboration + missing llms.txt, the site is close to invisible to ChatGPT search, Perplexity, and Bing Copilot's non-rendering crawl paths, and only marginally better for Google AI Overviews (which can render JS but only for the one page that resolves at all).

---

## What Works

- **robots.txt does not block AI crawlers.** GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, CCBot, Amazonbot, etc. are not named explicitly, but per standard robots.txt matching (RFC 9309 / Google & OpenAI's own documented behavior) an unnamed user-agent falls through to the wildcard `User-agent: * / Allow: /` group, which permits full-site crawling. No `Disallow` directives exist anywhere in the file.
- **A static, JS-independent JSON-LD `Organization` block exists in the raw `<head>`**, readable by every crawler regardless of JS execution — `name: "Raywerthi"`, `areaServed: ["Armenia","Georgia","Caucasus"]`, `telephone: "+374 91 55 38 22"`. This is currently the single most substantive machine-readable fact about the business available to non-rendering AI crawlers.
- **Static (non-JS) `<title>` and `<meta name="description">` are present and reasonably descriptive** on the raw homepage HTML: title names the brand and service ("Raywerthi — Солнцезащитные системы и автоматика | Армения, Грузия, Кавказ"); description names all three brand partnerships (HELLA, WAREMA, Silent Gliss) and the service area (Armenia, Georgia, Caucasus) in the first sentence.
- **Sitemap correctly declared** in robots.txt (`Sitemap: https://raywerthi.com/sitemap.xml`) and is valid XML — see `findings/sitemap.md` for full sitemap-specific analysis.
- **When rendered, the content that does exist is on-topic and unambiguous about brand + partnerships + service area** — e.g. "RayWerThi — официальный представитель HELLA, WAREMA и Silent Gliss. Полный цикл: подбор решения, точные замеры, поставка и профессиональный монтаж по всему Кавказу, включая Армению и Грузию" is a clean, factual, quotable sentence — it just never reaches a non-JS crawler.
- **Canonical tag present and self-referential** on the homepage (`<link rel="canonical" href="https://raywerthi.com/">`), reducing duplicate-content ambiguity for the one URL that resolves.

---

## Findings

### 1. Five of six pages return a genuine HTTP 404 to every crawler that doesn't execute client-side JavaScript — including essentially all major AI crawlers
**Severity: Critical**

**Description:** Direct, non-JS HTTP requests to `/solutions`, `/services`, `/about`, `/portfolio`, and `/contacts` all return HTTP 404 with `Server: Vercel` / `X-Vercel-Error: NOT_FOUND`, verified both via `curl` and via `render_page.py --mode never` (raw fetch, no browser):
```
curl -I https://raywerthi.com/about
HTTP/1.1 404 Not Found
Server: Vercel
X-Vercel-Error: NOT_FOUND
```
Critically, this 404 is a genuine *server-side* response, not a client-side "not found" screen rendered by React Router — it was reproduced even with `render_page.py --mode always` (a full Playwright/Chromium render): the browser never receives the SPA's `index.html` for these routes at all, so no client-side JavaScript router ever gets a chance to run. This means the 404 is not a "JS crawlers only" problem — it affects literally every consumer of these URLs: GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, CCBot, Amazonbot, Googlebot's second-pass renderer, Bingbot, and real human visitors clicking a shared link, bookmark, or refreshing mid-navigation. Root cause: no SPA fallback/rewrite is configured on Vercel (confirmed identical generic 404 returned for a deliberately nonexistent path, i.e. there is no catch-all route to `index.html` at all). This is the same root cause already documented as Finding #1 (Critical) in `findings/sitemap.md`; it is restated here because for AI-search purposes it is effectively total: **83% of the site's declared URLs are non-existent from any AI crawler's point of view**, leaving only the homepage as a candidate for citation.

**Recommendation:** This is a P0 hosting/deploy fix, not a content fix. Add a Vercel SPA rewrite (e.g. `vercel.json`: `{"rewrites":[{"source":"/((?!assets/|favicon.ico|og-image.jpg).*)","destination":"/index.html"}]}`) so all non-asset paths serve `index.html` and let the client router take over. Re-verify all 6 sitemap URLs return 200 via `curl -I` before doing anything else in this report — every other GEO recommendation below is moot for the 5 affected pages until this lands.

---

### 2. Raw (non-JS) HTML for every page is an empty shell — `<div id="root"></div>` — with zero body text for any non-rendering AI crawler
**Severity: Critical**

**Description:** This site is 100% client-side-rendered React (Vite build, `is_spa: true` confirmed via `render_page.py`). The raw HTML fetched without JavaScript execution (`raw_content`, 2,397 bytes) contains only `<head>` metadata and `<body><div id="root"></div></body>` — no headings, no paragraphs, no service descriptions, no brand copy, nothing. The full page text (hero copy, "Бренды, с которыми мы работаем" brand descriptions, "Как мы работаем" 4-step process, "Преимущества RayWerThi", "Наши проекты" portfolio cards, footer) exists only in the Playwright-rendered DOM (34,875 bytes / 167 words of extracted body text via trafilatura). GPTBot (OpenAI), ClaudeBot (Anthropic), PerplexityBot, and CCBot (Common Crawl, feeding many downstream LLMs) are documented as non-JS-executing crawlers — they will fetch exactly the empty-shell version. Only Googlebot and Bingbot (which underlie Google AI Overviews and Bing Copilot respectively) have documented headless-rendering capability, and even they render JS on a deferred/resource-constrained second pass, and only for the homepage since every other route hard-404s before rendering could even be attempted (see Finding #1).

**Recommendation:** Implement server-side rendering, static pre-rendering, or a bot-triggered prerender layer (e.g. Vite SSG output, a prerender.io-style dynamic-rendering proxy keyed on crawler user-agent, or migrating the marketing pages to a framework with SSR/SSG — Next.js, Astro, or React Router 7's SSR mode) so that the *first* HTTP response for every URL contains full readable text, not just an empty mount point. This is the single highest-leverage fix on this audit: it unlocks citability, structural readability, and technical accessibility simultaneously, and should be sequenced immediately after the routing fix in Finding #1.

---

### 3. `llms.txt` does not exist
**Severity: Medium**

**Description:** `https://raywerthi.com/llms.txt` returns HTTP 404 (`The page could not be found / NOT_FOUND`, confirmed via curl). No RSL 1.0 licensing file was found either (`/rsl.xml` and `/.well-known/rsl.xml` both 404). While `llms.txt` is an emerging, non-standardized convention (not yet acted on identically by all AI platforms), its absence means there is no explicit, crawler-friendly summary of what RayWerThi is, which pages matter, and what content is available for citation — which would partially compensate for the CSR content-access problem in Finding #2 if AI crawlers choose to honor it.
**Recommendation:** Create `/llms.txt` at the site root with a concise Markdown summary: company name/entity ("RayWerThi"), one-line description (official HELLA/WAREMA/Silent Gliss representative and installer for Armenia, Georgia, and the Caucasus), links to the 6 core pages with one-line descriptions each, and contact information. This is low-effort and can be done independently of the SSR fix, though its value is limited until Findings #1–2 are resolved (linking to pages that themselves 404 or render empty undermines it).

---

### 4. robots.txt does not explicitly name any AI crawler — relies entirely on wildcard fallthrough, creating an unintentional/undocumented allow rather than a deliberate one
**Severity: Low**

**Description:** `robots.txt` lists explicit groups only for `Googlebot`, `Bingbot`, `Twitterbot`, and `facebookexternalhit`, plus a catch-all `User-agent: * / Allow: /`. None of GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, anthropic-ai, Amazonbot, or Bytespider appear anywhere in the file. Per standard robots.txt precedence rules, any crawler without its own matching group falls through to the `*` group and is currently allowed — so functionally, nothing is blocked today. However, this is an implicit allow, not a deliberate, auditable one: it provides no signal to the business or future maintainers about which AI crawlers are intentionally welcomed, and a future edit to the wildcard group (e.g. adding a blanket `Disallow` for unrelated reasons, such as blocking scrapers) would silently deny all AI crawlers at once with no dedicated group to catch the mistake.
**Recommendation:** Add explicit `Allow: /` groups for the AI-search crawlers this business wants visibility with — `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot` — for documentation and future-proofing. Optionally add explicit `Disallow: /` groups for training-only crawlers not tied to live answer engines (`CCBot`, `anthropic-ai`, `Google-Extended` if AI Overviews training opt-out is desired — note `Google-Extended` does not affect Google Search/AI Overviews indexing, only Gemini/Vertex model training, so blocking it would not reduce AI Overviews visibility). This is a low-priority clarity/documentation fix, not a functional unblock — the real blockers are Findings #1 and #2.

---

### 5. Duplicate, mutually inconsistent JSON-LD and meta description tags in the rendered `<head>` — conflicting entity name for the same organization
**Severity: Medium**

**Description:** The raw, static `<head>` contains one `Organization` JSON-LD block (`"name": "Raywerthi"`, `telephone: "+374 91 55 38 22"`). After client-side render, `react-helmet-async` *appends* a second, different JSON-LD block (an `@graph` with `Organization` + `LocalBusiness`, both named `"Raywerthi Solutions Hub"`, `telephone: "+374 91 553 822"`) rather than replacing the first — so the final DOM ships **two JSON-LD blocks with two different names for the same entity** ("Raywerthi" vs. "Raywerthi Solutions Hub") simultaneously. The same append-not-replace pattern duplicates `<meta name="description">`: the raw static description ("Премиальные маркизы, рафшторы, фасадные экраны и моторизованные карнизы от HELLA, WAREMA и Silent Gliss...") and the React-Helmet-injected description ("Официальные системы HELLA, WAREMA и Silent Gliss: маркизы, рафшторы, роллеты, автоматика для умного дома...") both exist as separate `<meta name="description">` tags in the final DOM, with different wording. (`<title>` is the one exception — react-helmet correctly replaces it in place, so only one `<title>` exists, though its wording also differs from the static raw-HTML title.) For an AI system building an entity/knowledge-graph representation of the business, two differently-named `Organization`/`LocalBusiness` JSON-LD blocks on the same page is a direct source of name ambiguity.
**Recommendation:** Pick one canonical legal/brand name ("Raywerthi" or "Raywerthi Solutions Hub" — confirm which is the actual registered/marketing name) and use it consistently everywhere: static `<head>` JSON-LD, react-helmet-injected JSON-LD, meta description, title, and visible page copy. Fix the react-helmet-async configuration so injected tags *replace* the static placeholders (e.g. give the static tags matching `id`/`data-rh` markers, or remove the static duplicates entirely and let react-helmet own all of `<head>` post-hydration, while also solving Finding #2 via SSR so the "static" version becomes the real first-paint version).

---

### 6. Zero brand/entity corroboration signals anywhere on-site — no Wikipedia, Reddit, YouTube, LinkedIn, or social links found
**Severity: Medium**

**Description:** A full text search of the rendered homepage (the only page that renders at all) for `instagram`, `facebook`, `youtube`, `linkedin`, `telegram`, `whatsapp`, `tiktok`, and `vk.com` returned zero matches. There is no social proof, no reviews/testimonials markup (no `Review`/`AggregateRating` schema), no case-study detail beyond a project name + city + one or two tag chips (no square-meterage, no client type, no completion date, no measurable outcome), and no external links at all other than the three manufacturer homepages (hella.info, warema.com, silentgliss.com). Per the stated brand-mention correlation data, YouTube presence correlates most strongly with AI citation (~0.737) and Reddit/Wikipedia entity presence are also high-value signals — RayWerThi currently has none of these referenced from its own site, so even if the technical-access issues (Findings #1–2) were fixed, the site offers no cross-corroboration pathway for AI systems to validate the business as a real, citable entity beyond its own claims.
**Recommendation:** Add functioning social/profile links (Google Business Profile, Instagram/Facebook if active, LinkedIn company page) to the footer with real `sameAs` entries in the `Organization` JSON-LD (schema.org `sameAs` array). If no YouTube presence exists, consider even a small install/process video — this is the single strongest documented correlate with AI citation per the brand-mention data in this audit's scope. Add a testimonials/reviews section with `Review`/`AggregateRating` schema if genuine client reviews exist (Google Business Profile is a natural source).

---

### 7. No FAQ-style, question-based, or comparison content anywhere on the site
**Severity: Medium**

**Description:** All six headings on the rendered homepage are declarative/topical, not question-based (e.g. "Мы решаем задачи частных домов и проектов", "Бренды, с которыми мы работаем", "Как мы работаем", "Преимущества RayWerThi") — none phrased as a question an AI Overview / ChatGPT / Perplexity user might literally type ("Какая компания представляет HELLA в Армении?", "Чем маркизы HELLA отличаются от WAREMA?", "Сколько стоит установка солнцезащитных систем в Ереване?"). No `FAQPage` schema exists anywhere in the structured data (confirmed: only 2 JSON-LD blocks total, both `Organization`/`LocalBusiness` — see Finding #5). There is also no brand-comparison content (HELLA vs. WAREMA vs. Silent Gliss — what each is best for) despite the homepage already grouping all three brands together, which is a natural, low-effort place to add differentiating factual statements. Separately, the "Преимущества RayWerThi" ("RayWerThi Advantages") section renders an empty grid (`<div class="grid ... max-w-5xl mx-auto"></div>` with zero child cards) — the section heading exists but the content that was clearly intended to populate it (a natural home for citable differentiators/USPs) is missing entirely, likely a broken data fetch or empty CMS collection.
**Recommendation:** Add a short FAQ section (5–8 question-based H3s with 40–80 word direct-answer paragraphs immediately following) covering the highest-intent queries: which brands RayWerThi represents, which areas it services (explicitly list cities: Yerevan, Tbilisi, etc., not just "Caucasus"), what the installation process/timeline looks like, and how the three brands differ. Fix the empty "Преимущества" section — it's already structurally planned for exactly this kind of citable content and currently renders nothing. Add a lightweight `FAQPage` JSON-LD block alongside the existing Organization/LocalBusiness schema once real FAQ content exists.

---

### 8. Multi-language content (RU/HY/EN) exists only as client-side UI state — no distinct crawlable URLs, so HY/EN content is invisible to all crawlers regardless of JS execution
**Severity: Medium** *(cross-referenced from `findings/sitemap.md` Finding #4; restated here for its direct GEO impact)*

**Description:** The header's RU/HY/EN language switcher swaps displayed text in place with no URL change; hreflang alternates in `<head>` all point at the identical URL (`https://raywerthi.com/`) for `ru`, `hy`, `en`, and `x-default`. Since AI crawlers request URLs, not UI states, there is no way for any crawler — rendering or non-rendering — to independently fetch "the Armenian page" or "the English page." Given RayWerThi's stated service area explicitly includes Armenia and Georgia, and English is the likely language for a meaningful share of both AI-search users and cross-border/expat queries, this is a material lost-visibility surface, compounding the existing content-access problems in Findings #1–2 for two of the business's three target languages.
**Recommendation:** Implement real per-language routing (`/en/...`, `/hy/...`, or subdomains) once SSR/pre-rendering (Finding #2) and the routing fix (Finding #1) are in place, so each language variant is an independently fetchable, indexable, citable URL with correct reciprocal hreflang.

---

## Platform-Specific Visibility Estimate

| Platform | Crawl method | Estimated visibility today |
|---|---|---|
| **Google AI Overviews** | Googlebot — full JS rendering, but deferred/resource-limited | Very Low — only the homepage returns 200 at all; the other 5 pages 404 before rendering is even attempted. Homepage content, once rendered, is thin (167 words) and un-cited by external sources. |
| **ChatGPT Search (GPTBot/OAI-SearchBot)** | Documented as non-JS-rendering | Near Zero — receives the empty `<div id="root"></div>` shell on the homepage and hard 404s on every other page. Only the static meta description and Organization JSON-LD are visible. |
| **Perplexity (PerplexityBot)** | Documented as non-JS-rendering | Near Zero — same empty-shell + 404 problem as ChatGPT Search. |
| **Bing Copilot (Bingbot)** | Bingbot has some JS-rendering capability, similar constraints to Googlebot | Very Low — same 404 ceiling as Google; homepage-only, thin content. |

---

## Priority Summary (highest impact first)

1. **Fix Vercel SPA routing (Finding #1)** — Effort: Low (config change) — unlocks 5 of 6 pages from total 404.
2. **Add SSR/pre-rendering so raw HTML contains real text (Finding #2)** — Effort: Medium–High (architecture change) — the single biggest lever for citability, structural readability, and technical accessibility simultaneously.
3. **Add FAQ content + fix the empty "Преимущества" section (Finding #7)** — Effort: Low–Medium — depends on #1–2 to be crawlable, but content can be authored in parallel.
4. **Resolve duplicate/conflicting JSON-LD entity name and duplicate meta description (Finding #5)** — Effort: Low.
5. **Add `llms.txt` + explicit AI-crawler robots.txt groups + social/`sameAs` links (Findings #3, #4, #6)** — Effort: Low, but value is gated behind #1–2.
