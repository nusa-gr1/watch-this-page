'use strict';
const puppeteer = require('puppeteer');
const config = require('dotenv').config();

(async() => {
    const start = +new Date();
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(process.env.URL, {"waitUntil" : "networkidle0"});
    await page.waitForNavigation();
    await page.type('#email', process.env.USERNAME);
    await page.type('#password', process.env.PASSWORD);
    await page.click('#login-submit');
    await page.waitForNavigation();
    const interval = setInterval(() => page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] }), process.env.INTERVAL)
})();