import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.waitForLoadState('networkidle');
  const html = await page.content();
  console.log(html.substring(0, 1000));
  // dump to file
  import('fs').then(fs => fs.writeFileSync('dump.html', html));
  await browser.close();
})();
