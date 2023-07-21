import { test, expect } from "@playwright/test";


test.describe("SauceDemoSuit", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator("//input[@id='user-name']").fill("standard_user");
        await page.locator("//input[@id='password']").fill("secret_sauce");
        await page.locator("//input[@id='login-button']").click();
    })


    test('Home Page', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'All Items' }).click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    })

    test('LogOut', async ({ page }) => {
        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.getByRole('link', { name: 'Logout' }).click();
    })


    test.afterEach(async ({ page }) => {
        await page.close();
    })

})