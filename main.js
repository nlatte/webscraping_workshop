const { launch, scrape, teardown } = require('./src/launch.js');

(async () => {
    const url = process.argv[2];
    const n_results = Number(process.argv[3]);
    const { page, browser } = await launch(url);
    const results = await scrape(page, n_results);

    await teardown(browser);
    console.log(results);
})();
