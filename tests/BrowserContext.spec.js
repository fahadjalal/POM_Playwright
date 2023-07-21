import { test, expect, chromium } from "@playwright/test"

test("Browser Context", async () => {
    const browser = await chromium.launch({
        // also can be perform using the  playwright.config.js
        slowMo: 1000,
        headless: false
    });
    const context = await browser.newContext({
        // also can be perform using the  playwright.config.js, but its having more varity.
        recordVideo: {
            dir: 'videos/',
            size: {
                width: 800, height: 600
            }
        }
    });
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();


    await context.close();
})