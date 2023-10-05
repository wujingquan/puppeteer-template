import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    // executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      // '--user-data-dir=C:\\Users\\exampleUser\\AppData\\Local\\Microsoft\\Edge\\User Data\\Default',
      // '--user-data-dir=C:\\Users\\exampleUser\\AppData\\Local\\Google\\Chrome\\User Data',
      // '--no-sandbox', '--disable-setuid-sandbox'
    ],
    // userDataDir: 'C:\\Users\\exampleUser\\AppData\\Local\\Google\\Chrome\\User Data'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://www.baidu.com')
  const soutuEl = await page.waitForSelector('span.soutu-btn')
  await soutuEl.click()
  const uploadPicEl = await page.waitForSelector('input.upload-pic')
  // 绝对路径
  // await uploadPicEl.uploadFile('C:\\Users\\exampleUser\\workspace\\puppeteer-template\\example\\image-ikun.jpg')

  // 相对路径
  // cd example && node baidu-upload.mjs
  // await uploadPicEl.uploadFile('./image-ikun.jpg')

  // 相对路径
  // node example/baidu-upload.mjs
  // await uploadPicEl.uploadFile('./example/image-ikun.jpg')

  await browser.close();
})();