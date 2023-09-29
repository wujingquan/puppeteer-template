import puppeteer from 'puppeteer';
import {writeFile } from 'node:fs'

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      // '--user-data-dir=C:\\Users\\wuwuwu\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default',
      '--user-data-dir=C:\\Users\\wuwuwu\\AppData\\Local\\Google\\Chrome\\User Data',
      // '--no-sandbox', '--disable-setuid-sandbox'
    ],
    userDataDir: 'C:\\Users\\wuwuwu\\AppData\\Local\\Google\\Chrome\\User Data'
  });
  const page = await browser.newPage();
  // Navigate the page to a URL
  const viewSource = await page.goto('https://www.wujingquan.com/posts/b48f5160/image.png');
  writeFile('./saveImage.png', await viewSource.buffer(), (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })

  await browser.close();
})();