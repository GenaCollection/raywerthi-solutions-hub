const { chromium, devices } = require('playwright');
const fs = require('fs');

const initScript = () => {
  window.__cwv = { lcp: null, cls: 0, clsEntries: [], fcp: null, longtasks: [], ttiMarks: [] };
  try {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) {
        window.__cwv.lcp = {
          time: last.renderTime || last.loadTime,
          size: last.size,
          url: last.url || null,
          id: last.id || null,
          element: last.element ? (last.element.tagName + (last.element.className ? '.' + String(last.element.className).replace(/\s+/g,'.') : '')) : null
        };
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) { window.__cwv.lcpError = String(e); }
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__cwv.cls += entry.value;
          window.__cwv.clsEntries.push({ value: entry.value, time: entry.startTime, sources: (entry.sources||[]).map(s => s.node ? s.node.tagName : null) });
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
  } catch (e) { window.__cwv.clsError = String(e); }
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') window.__cwv.fcp = entry.startTime;
      }
    }).observe({ type: 'paint', buffered: true });
  } catch (e) { window.__cwv.fcpError = String(e); }
  try {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        window.__cwv.longtasks.push({ start: entry.startTime, duration: entry.duration });
      }
    }).observe({ type: 'longtask', buffered: true });
  } catch (e) { window.__cwv.longtaskError = String(e); }
};

async function measurePage(context, url, label, settleMs = 8000) {
  const page = await context.newPage();
  await page.addInitScript(initScript);

  const resources = [];
  page.on('response', async (resp) => {
    try {
      const req = resp.request();
      const headers = resp.headers();
      resources.push({
        url: resp.url(),
        status: resp.status(),
        resource_type: req.resourceType(),
        content_type: headers['content-type'] || null,
        content_length_header: headers['content-length'] ? parseInt(headers['content-length'], 10) : null,
      });
    } catch (e) {}
  });

  const consoleErrors = [];
  page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', (err) => { consoleErrors.push('pageerror: ' + err.message); });

  const t0 = Date.now();
  let navError = null;
  let status = null;
  try {
    const resp = await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    status = resp ? resp.status() : null;
  } catch (e) {
    navError = String(e);
  }
  const loadMs = Date.now() - t0;

  await page.waitForTimeout(settleMs);
  const settleMsTotal = Date.now() - t0;

  // pull real resource sizes via CDP-independent method: use Resource Timing API transferSize
  const perf = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0] || {};
    const resources = performance.getEntriesByType('resource').map(r => ({
      name: r.name,
      initiatorType: r.initiatorType,
      transferSize: r.transferSize,
      encodedBodySize: r.encodedBodySize,
      decodedBodySize: r.decodedBodySize,
      duration: r.duration,
      startTime: r.startTime,
    }));
    const cwv = window.__cwv || {};
    return {
      ttfb: nav.responseStart,
      domContentLoaded: nav.domContentLoadedEventEnd,
      loadEvent: nav.loadEventEnd,
      transferSize: nav.transferSize,
      encodedBodySize: nav.encodedBodySize,
      domInteractive: nav.domInteractive,
      resources,
      cwv,
      domElementCount: document.getElementsByTagName('*').length,
      title: document.title,
      bodyText: document.body ? document.body.innerText.slice(0, 300) : null,
      rootHTML: document.getElementById('root') ? document.getElementById('root').innerHTML.length : null,
    };
  });

  const renderBlocking = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[src]')).filter(s => !s.async && !s.defer && s.type !== 'module').map(s => s.src);
    const modules = Array.from(document.querySelectorAll('script[src][type=module]')).map(s => s.src);
    const styles = Array.from(document.querySelectorAll('link[rel=stylesheet]')).map(s => s.href);
    return { blocking_scripts: scripts, module_scripts: modules, stylesheets: styles };
  });

  const tbtApprox = (perf.cwv.longtasks || []).reduce((sum, t) => sum + Math.max(0, t.duration - 50), 0);

  await page.screenshot({ path: `${__dirname}/screenshot-${label}.png`, fullPage: false }).catch(()=>{});

  const result = {
    url, label, status, navError,
    load_ms: loadMs,
    settle_ms: settleMsTotal,
    lcp_ms: perf.cwv.lcp ? perf.cwv.lcp.time : null,
    lcp_element: perf.cwv.lcp ? perf.cwv.lcp.element : null,
    lcp_url: perf.cwv.lcp ? perf.cwv.lcp.url : null,
    fcp_ms: perf.cwv.fcp,
    cls: perf.cwv.cls,
    cls_shift_count: (perf.cwv.clsEntries || []).length,
    cls_entries: perf.cwv.clsEntries,
    longtask_count: (perf.cwv.longtasks || []).length,
    tbt_approx_ms: tbtApprox,
    longtasks: perf.cwv.longtasks,
    nav_timing: {
      ttfb_ms: perf.ttfb,
      dom_content_loaded_ms: perf.domContentLoaded,
      load_event_ms: perf.loadEvent,
      dom_interactive_ms: perf.domInteractive,
      transfer_size: perf.transferSize,
      encoded_body_size: perf.encodedBodySize,
    },
    dom_element_count: perf.domElementCount,
    root_html_length: perf.rootHTML,
    title: perf.title,
    body_text_sample: perf.bodyText,
    render_blocking: renderBlocking,
    console_error_count: consoleErrors.length,
    console_errors: consoleErrors.slice(0, 20),
    resource_timing: perf.resources,
    network_responses: resources,
  };

  await page.close();
  return result;
}

async function measureSpaTransition(context, startUrl, linkText, label, settleMs = 6000) {
  const page = await context.newPage();
  await page.addInitScript(initScript);
  const resources = [];
  page.on('response', (resp) => {
    resources.push({ url: resp.url(), status: resp.status(), resource_type: resp.request().resourceType() });
  });
  await page.goto(startUrl, { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(1500);

  // reset CLS counters right before transition to isolate the transition's own shifts
  await page.evaluate(() => { window.__cwv.cls = 0; window.__cwv.clsEntries = []; });

  const t0 = Date.now();
  let clicked = false;
  let navErr = null;
  try {
    const link = page.locator(`a:has-text("${linkText}")`).first();
    await link.click({ timeout: 5000 });
    clicked = true;
  } catch (e) {
    navErr = String(e);
  }
  await page.waitForTimeout(settleMs);
  const elapsed = Date.now() - t0;

  const state = await page.evaluate(() => ({
    url: location.href,
    title: document.title,
    domElementCount: document.getElementsByTagName('*').length,
    rootHTML: document.getElementById('root') ? document.getElementById('root').innerHTML.length : null,
    bodyText: document.body ? document.body.innerText.slice(0, 300) : null,
    cwv: window.__cwv,
  }));

  await page.screenshot({ path: `${__dirname}/screenshot-spa-${label}.png` }).catch(()=>{});
  await page.close();

  return {
    label: 'spa-transition-' + label,
    start_url: startUrl,
    clicked,
    nav_err: navErr,
    final_url: state.url,
    elapsed_ms_to_settle: elapsed,
    title: state.title,
    dom_element_count: state.domElementCount,
    root_html_length: state.rootHTML,
    body_text_sample: state.bodyText,
    cls_during_transition: state.cwv.cls,
    cls_shift_count: (state.cwv.clsEntries || []).length,
    new_resources: resources.filter(r => !r.url.includes('raywerthi.com/') || true).slice(0, 40),
  };
}

(async () => {
  const browser = await chromium.launch({ channel: 'chromium' });
  const results = {};

  // Mobile (Moto G Power-like / mid-tier) throttled-ish profile via device descriptor (no CPU/network throttle, but realistic viewport/UA)
  const mobileContext = await browser.newContext({ ...devices['Pixel 7'] });
  results.home_mobile = await measurePage(mobileContext, 'https://raywerthi.com/', 'home-mobile');
  await mobileContext.close();

  const desktopContext = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  results.home_desktop = await measurePage(desktopContext, 'https://raywerthi.com/', 'home-desktop');

  // Direct-URL 404 re-confirmation
  results.solutions_direct = await measurePage(desktopContext, 'https://raywerthi.com/solutions', 'solutions-direct', 2000);
  results.portfolio_direct = await measurePage(desktopContext, 'https://raywerthi.com/portfolio', 'portfolio-direct', 2000);

  // SPA client-side transitions (should work since it's the same JS app instance)
  results.spa_to_solutions = await measureSpaTransition(desktopContext, 'https://raywerthi.com/', 'Решения', 'solutions');
  results.spa_to_portfolio = await measureSpaTransition(desktopContext, 'https://raywerthi.com/', 'Портфолио', 'portfolio');

  await desktopContext.close();
  await browser.close();

  fs.writeFileSync(`${__dirname}/cwv_results.json`, JSON.stringify(results, null, 2));
  console.log('DONE');
})().catch(e => { console.error('FATAL', e); process.exit(1); });
