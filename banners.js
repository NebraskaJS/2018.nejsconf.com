const puppeteer = require('puppeteer');

const banners = require('./_data/speakers.json');

banners.forEach(async ({twitter:speaker}) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 720, height: 1280});
  await page.goto(`http://localhost:8080/speaker-banner/${speaker}/`);
  await page.waitFor(2500);
  await page.screenshot({path: `_site/speakers/${speaker}.png`});
  await browser.close();
});