const { test, expect } = require('@playwright/test');

// test('verify text on the main page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   page.locator()
//   await expect(page).toHaveTitle(/Any browser • Any platform • One API/);

// });

test('verify the button "Get started" is clickable and user will be redirected new url', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();
    await expect(page).toHaveURL(/.*intro/);
 });

 test('Verify that user can be redirected to the "Community" page', async ({ page }) => {
     await page.goto('https://playwright.dev/');
     await page.locator('a[href="/community/welcome"]').click(); 
     await expect(page).toHaveURL(/.*welcome/)   
 });

 test('Verify that user can be redirected to the "Java" page from dropdown menu', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('.getStarted_Sjon').click();

 })

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });
