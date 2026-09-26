const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const times = process.argv.slice(2).map(Number);
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('console', (m) => console.log('console:', m.text()));
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.goto('http://localhost:4181/', { waitUntil: 'networkidle' });
  const layout = await page.evaluate(() => window.ready.then(() => window.__layout));
  console.log('layout', JSON.stringify(layout));
  for (const t of times) {
    await page.evaluate((t) => window.renderAt(t), t);
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    await page.screenshot({ path: `stills/t${t.toFixed(2)}.png` });
  }
  await browser.close();
})();
