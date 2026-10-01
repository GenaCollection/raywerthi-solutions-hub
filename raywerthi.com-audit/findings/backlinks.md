# Backlink Profile Audit — raywerthi.com

## Score: INSUFFICIENT DATA (indicative placeholder: 25 / 100)

**Justification:** This audit ran at **Tier 0** (Common Crawl + verification crawler only — confirmed via `backlinks_auth.py --check`: no Moz API key, no Bing Webmaster key, no DataForSEO). At Tier 0, the confidence-weighted scoring model has **7 factors** (referring domains, domain quality distribution, anchor text naturalness, toxic link ratio, link velocity, follow/nofollow ratio, geographic relevance). **0 of 7 have any data source at all** for this domain, because:

- Common Crawl's web graph (`commoncrawl_graph.py`) returned `in_crawl: false` and `in_rankings: false` for raywerthi.com — the domain is **not present** in the latest release (`cc-main-2026-jan-feb-mar`) at any level, so `pagerank`, `pagerank_rank`, `harmonic_centrality`, and `harmonic_centrality_rank` are all `null`. Per the skill's own validation rule (confirmed by running `validate_backlink_report.py`, status: **PASS**, 1 info note), this must **not** be interpreted as "low authority" — it means Common Crawl has not indexed this domain at all, which is common for small, low-traffic, or newly-launched regional sites and carries no authority signal in either direction.
- No known/existing backlink URLs were provided or discovered to feed `verify_backlinks.py`, so no verification crawl was run.
- Moz, Bing Webmaster, and DataForSEO were all unavailable (Tier 0).

Per the skill's own scoring rule, a numeric 0–100 score should not be presented as if it were measured — **doing so would be misleading with 0/7 factors populated**. The **25/100 figure above is an unverified placeholder only**, included solely so the audit-orchestrator has a numeric field to aggregate; it is *not* a measured backlink health score. It reflects a reasonable prior for a small, single-market home/commercial-automation installer with no evidence (positive or negative) of active link-building — **not** a finding. Treat this category as **unscored / not yet measurable** until at least Moz or DataForSEO data is added.

Data source confidence: Common Crawl domain-level check = 0.50 in principle, but since the domain returned no data at all, effective confidence for this audit is **~0**. No other source confidence applies (nothing else ran).

---

## What Works

- The Tier 0 pipeline itself executed cleanly: `backlinks_auth.py` correctly identified the available tier, `commoncrawl_graph.py` returned a well-formed (if empty) response rather than erroring, and no crawl/API errors occurred — the audit infrastructure is not the limiting factor here, data availability is.
- No red flags either: nothing in the data gathered suggests toxic, spammy, or manipulative backlinks (there is simply no signal in either direction).
- The business has a strong, underexploited legitimate foundation for future link-building: RayWerThi is described as the official regional representative for three established international manufacturer brands — **HELLA**, **WAREMA**, and **Silent Gliss** — which is a natural, high-relevance, low-risk backlink source (see Finding 3).

---

## Findings

### 1. Domain absent from Common Crawl's web graph — zero measurable inbound-link signal
**Severity: High**

**Description:** `commoncrawl_graph.py raywerthi.com` returned:
```json
{
  "domain": "raywerthi.com",
  "in_crawl": false,
  "in_rankings": false,
  "pagerank": null,
  "harmonic_centrality": null,
  "n_hosts": null,
  "note": "Domain not found in Common Crawl data. It may be too new, too small, or not yet crawled."
}
```
This is the *only* free, always-available inbound-link data source at Tier 0, and it returned nothing to measure. This does not confirm the site has zero backlinks — Common Crawl only samples a fraction of the web and frequently misses small regional/single-market sites — but it does confirm there is currently **no independently verifiable evidence of any inbound links** to raywerthi.com from any data source available to this audit.

**Recommendation:** This finding cannot be resolved by on-site changes; it requires either (a) building enough real inbound links that a future Common Crawl release picks the domain up, or (b) adding a paid data source (Moz free tier or DataForSEO) to get direct referring-domain counts regardless of Common Crawl coverage. Re-run this check in 3–6 months against a newer Common Crawl release, and prioritize the link-building actions in Findings 3–4 in the meantime.

---

### 2. No premium backlink data sources configured — most scoring factors unmeasured
**Severity: Medium**

**Description:** `backlinks_auth.py --check` confirms Tier 0 only: `moz.available: false`, `bing.available: false`, no DataForSEO. Of the 7 weighted scoring factors (referring domains 20%, domain quality distribution 20%, anchor text naturalness 15%, toxic link ratio 20%, link velocity 10%, follow/nofollow ratio 5%, geographic relevance 10%), **none** have a data source at this tier for a domain not indexed by Common Crawl. This means the business currently has **no visibility at all** into its actual backlink profile — referring domains, spam/toxic links, anchor text distribution, or link growth trend.

**Recommendation:** At minimum, register a free Moz API key (2,500 rows/month, no cost — https://moz.com/products/api) to unlock DA/PA, spam score, referring domains, and anchor text for raywerthi.com. Also register the domain with Bing Webmaster Tools (free) for a second independent inbound-link source. For ongoing monitoring at a small-business budget, this pair of free tiers is sufficient to replace today's "insufficient data" status with real measurement on the next audit cycle.

---

### 3. Untapped high-relevance backlink opportunity: HELLA, WAREMA, and Silent Gliss dealer/partner listings
**Severity: Medium (opportunity — treat as a link-building priority, not a defect)**

**Description:** RayWerThi is positioned as the official representative in Armenia/Georgia for three established international manufacturers — **HELLA** (sun-shading/automation), **WAREMA** (sun-shading systems), and **Silent Gliss** (blinds/curtain systems). No evidence was found in this Tier 0 audit (Common Crawl has no record of the domain at all, and no manual verification of these manufacturers' dealer-locator pages was performed within scope) confirming that raywerthi.com is currently linked from any of these brands' official "find a dealer/partner near you" pages. This is a significant gap: links from `hella.com`, `warema.com`/`warema.de`, and `silentgliss.com` (or their regional subsidiaries) would be:
- **Highly topically relevant** (official supplier-to-dealer relationship, not a generic directory link),
- **Low spam risk** (large, established brand domains),
- **Naturally justified** (RayWerThi genuinely is their representative — this is not a manipulative link scheme), and
- Likely to carry real authority given these are established multinational manufacturer sites.

This is exactly the kind of backlink opportunity a small regional service business should prioritize over generic directory submissions, since it is both editorially natural and directly relevant to the audience most likely to convert (customers researching these specific brands).

**Recommendation:**
1. Contact the regional/export sales or marketing contact at HELLA, WAREMA, and Silent Gliss and request confirmation/addition of raywerthi.com on each brand's official dealer-locator or "where to buy" page for Armenia and Georgia, with a direct link to raywerthi.com (not just a phone number/address listing with no hyperlink).
2. Ask each brand whether they publish regional partner news, case studies, or project features (e.g. "installed by our Armenia partner RayWerThi") that could include a backlink — manufacturers often do this for flagship regional installations.
3. Cross-check whether raywerthi.com is currently listed at all on these three manufacturer sites (a quick manual check of each brand's dealer-locator tool); if RayWerThi is listed without a hyperlink, request one be added — this is typically a low-effort ask for an active reseller relationship.
4. Once added, re-run `verify_backlinks.py --target https://raywerthi.com --links <file>` with the resulting URLs to confirm the links are live and correctly formed (not `nofollow`-only, not JS-rendered-only), and re-run `commoncrawl_graph.py` on a future Common Crawl release to check whether the domain has since been indexed.
5. Beyond the three core brands, pursue Armenian/Georgian chamber-of-commerce, trade-association, and B2B/architecture-and-construction directory listings as secondary, lower-relevance link sources.

---

### 4. No known-backlinks list available for verification
**Severity: Info**

**Description:** `verify_backlinks.py` (the Tier 0 verification crawler) requires a supplied list of known/claimed backlink URLs to check; none was available for this audit, so no verification pass was run. This is noted for completeness, not as a defect — it simply means Finding 3's recommended links, once obtained, should be fed through this tool to confirm they render correctly and are genuinely followed.

**Recommendation:** Once any backlinks are secured or discovered (e.g. via a future Moz/DataForSEO scan, or the manufacturer-partner outreach above), compile them into a plain-text/CSV list and re-run `verify_backlinks.py --target https://raywerthi.com --links <file> --json` to confirm each is live, correctly targeted, and not `nofollow`/JS-only.

---

## Notes for the Audit Orchestrator

- This category should be flagged in `audit-data.json` as **data-limited (Tier 0)**, not as a genuine poor-performance finding — the site's actual backlink health is unknown, not confirmed-bad.
- Recommend a follow-up `/seo backlinks` re-run once a free Moz API key and/or Bing Webmaster registration is added (see Finding 2) before treating any numeric score in this category as reliable.
- Not duplicated here: on-page E-E-A-T (see `/seo content <url>`) and crawlability/indexability (see `/seo technical <url>` — note Finding 1 in `findings/sitemap.md` already documents a **Critical** SPA-routing 404 issue that independently harms crawlability and could also be suppressing this domain's Common Crawl coverage).
