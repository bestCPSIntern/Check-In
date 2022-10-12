//WIP, need to add reoccurance everyday @ 8:45 AM
//time stuff here
//checkin process
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://app.getpasspoint.com/checkin');
  await page.waitForTimeout(5000);
  //enter credentials here
  await page.type('input[id=login-email]', 'EnterEmailHere', { delay: 10});
  await page.type('input[placeholder=Password]', 'EnterPasswordHere', { delay: 10});
  await page.waitForTimeout(3000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(8000);
  await page.goto('https://app.getpasspoint.com/checkin');
  await page.waitForTimeout(15000);
  await page.evaluate(() => {const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  checkboxes[checkboxes.length - 1].click();
  checkboxes[checkboxes.length - 2].click();});
  page.waitForTimeout(1000);
  await page.evaluate(() => {const button = document.querySelector('button[id=":r1:"]');
  button.click()});
  window.close();
})();