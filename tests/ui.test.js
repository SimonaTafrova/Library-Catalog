const { expect, test} = require('@playwright/test');

test("Verigy All Books is visible", async ({page}) => {
    await page.goto("http://localhost:3000/");
    await page.waitForSelector("#site-header > nav");
    const allBooksLink = await page.$('#site-header > nav > section > a');
    const isAllBooksVisible = await allBooksLink.isVisible();
    expect(isAllBooksVisible).toBe(true);
});

