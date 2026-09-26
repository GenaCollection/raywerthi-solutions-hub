const { chromium } = require('/opt/node22/lib/node_modules/playwright');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  const pages = [['home', '/'], ['patio', '/solutions/category/patio-awnings'], ['warema', '/solutions/warema'], ['solutions', '/solutions'], ['contacts', '/contacts?solution=Маркизы&model=WAREMA%20Terrea%20700S']];
  for (const [name, path] of pages) {
    await page.goto('http://localhost:4173' + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(800);
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    console.log(name, 'height', h);
    await page.screenshot({ path: `shots/${name}-top.png` });
    await page.screenshot({ path: `shots/${name}-full.png`, fullPage: true });
  }
  await browser.close();
})();
