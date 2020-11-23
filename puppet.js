'use strict';
const puppeteer = require('puppeteer');
const config = require('dotenv').config();

(async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768});
    await page.goto(process.env.URL, {"waitUntil" : "networkidle0"});
    await page.waitForNavigation();
    await page.type(process.env.USERNAME_ELEMENT_SELECTOR, process.env.USERNAME);
    await page.type(process.env.PASSWORD_ELEMENT_SELECTOR, process.env.PASSWORD);
    await page.click(process.env.SUBMIT_ELEMENT_SELECTOR);
    await page.waitForNavigation();
    const interval = setInterval(async () => await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] }), process.env.INTERVAL)
})();