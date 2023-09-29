const puppeteer = require('puppeteer');
const fs = require('fs');
const mime = require('mime');
const URL = require('url').URL;

(async() => {
const browser = await puppeteer.launch();
const page = await browser.newPage();

const responses = [];
page.on('response', resp => {
  responses.push(resp);
});

page.on('load', () => {
  responses.map(async (resp, i) => {
    const request = await resp.request();
    console.log(request.url())
    const url = new URL(request.url());

    const split = url.pathname.split('/');
    let filename = split[split.length - 1];
    if (!filename.includes('.')) {
      filename += '.html';
    }

    const buffer = await resp.buffer();
    fs.writeFileSync(filename, buffer);
  });
});

await page.goto('https://news.ycombinator.com/', {waitUntil: 'networkidle0'});
browser.close();
})();