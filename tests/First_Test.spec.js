const { test, expect } = require('@playwright/test');

test.only('Login', async ({ page, context }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
    
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.pause();

})

test('Login with Trace', async ({ page, context }) => {
    await context.tracing.start({
         snapshots: true, 
         screenshots: true 
        });
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
    await page.locator("//input[@id='user-name']").fill("standard_user");
    await page.locator("//input[@id='password']").fill("secret_sauce");
    await page.locator("//input[@id='login-button']").click();
    await page.pause();

    await context.tracing.stop({path: 'test_trace.zip'})
})


