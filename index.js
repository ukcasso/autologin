const puppeter = require('puppeteer');

(async () => {
  // launch 메서드는 chrome을 실행시킴. headless는 ui를 제공하는지 안하는지 여부임. false로 해야 ui가 뜨고 아니면 백그라운드에서만 켜짐
  const browser = await puppeter.launch({headless: false, defaultViewport: null});

  // goto는 url로 이동하는 메서드
  const page = await browser.newPage();

  await page.goto('url');
  
  await page.type('#id', 'id');
  await page.type('#pw', 'password');
  await page.click('#btn');
  await page.waitForNavigation();
  
})();