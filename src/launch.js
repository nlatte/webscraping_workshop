const pptr = require('puppeteer');

const SELECTORS = {};

function prep_url() {}

// open browser and create new page
async function launch() {}

function goto_next_page(url, page_no) {}

// collects the information of 1 single page
async function scrape_page(page) {}

// main loop for scraping website
async function scrape_site(page, max_pages, url) {}

// close browser
async function teardown(browser) {}

module.exports = {
    launch,
    scrape_site,
    teardown,
    prep_url,
};
