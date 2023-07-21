const { test, expect } = require('@playwright/test');
test('Assertion Demo',async({page})=> {
    await page.goto('https://kitchen.applitools.com/');
    await page.pause()
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    //below conditions will work, if we want to add the assertion in if condtion. 
    if(await page.$('text=The Kitchen')){  //If the text exist.
        await page.locator('text=The Kitchen').click()
    }
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')

    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class',/.*css-dpmy2a/);
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);

    await expect(page).toHaveURL("https://kitchen.applitools.com/")
    await expect(page).toHaveTitle(/.*Kitchen/)
    await page.pause()
    await expect(page).toHaveScreenshot()
})

