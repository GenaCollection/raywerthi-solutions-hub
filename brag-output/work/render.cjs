const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { spawn } = require('child_process');
const FPS = 30, DUR = 22.5, FRAMES = Math.round(FPS * DUR), POSTER_T = 2.8;
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.goto('http://localhost:4181/', { waitUntil: 'networkidle' });
  await page.evaluate(() => window.ready);
  const shot = async (t) => {
    await page.evaluate((t) => window.renderAt(t), t);
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
    return page.screenshot({ type: 'png' });
  };
  const poster = await shot(POSTER_T);
  require('fs').writeFileSync('poster.png', poster);
  const ff = spawn('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
    '-i', 'audio.wav',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-r', String(FPS),
    '-c:a', 'aac', '-b:a', '192k', '-ar', '48000',
    '-movflags', '+faststart', '-shortest', '../brag.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res) => ff.on('close', res));
  const t0 = Date.now();
  for (let i = 0; i < FRAMES; i++) {
    // frame 0 is the poster, so every platform's thumbnail shows the settled hook
    const buf = i === 0 ? poster : await shot(i / FPS);
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % 75 === 0) console.log(`frame ${i}/${FRAMES}  ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  }
  ff.stdin.end();
  console.log('ffmpeg exit', await done);
  await browser.close();
})();
