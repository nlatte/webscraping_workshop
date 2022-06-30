const { launch, scrape_site, teardown, prep_url } = require('./src/launch.js');

(async () => {
    const url = prep_url();
    const n_results = Number(process.argv[3]);
    const { page, browser } = await launch();
    const results = await scrape_site(page, n_results, url);

    await teardown(browser);
    console.log(results);
})();
