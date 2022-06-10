const pptr = require('puppeteer');

const SELECTORS = {
    name: '[class*="srp-river-results"] [class="s-item__title"]',
};

async function launch(url) {
    const browser = await pptr.launch({ headless: !process.argv.includes('-hf') ? 1 : 0 });
    const page = await browser.newPage();

    await page.goto(url, { waitFor: 'networkIdle0' });
    return { page, browser };
}

async function scrape(page, n_results) {
    const results = [];

    while (results.length < n_results) {
        const items = await page.$$(SELECTORS['name']);

        for (const item of items) {
            let result = {};

            result.name = await item.evaluate((e) => e.innerText);

            results.push(result);
        }
    }
    return results;
}

async function teardown(browser) {
    browser.close();
}

module.exports = {
    launch,
    scrape,
    teardown,
};
