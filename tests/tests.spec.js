const { test, expect } = require('@playwright/test');

test.describe('test task', () => {
  test.beforeEach( async ({ page }) => {
    await page.goto('/');
  })

  test('verify text on the main page', async ({ page }) => {
    await expect(page.locator('.logosColumn_GJVT h2')).toBeVisible;
    await expect(page.locator('.logosColumn_GJVT h2')).toHaveText('Chosen by companies and open source projects');
  });
  
  test('verify the button "Get started" is clickable and user will be redirected new url', async ({ page }) => {
      await page.locator('.getStarted_Sjon').click();
      await expect(page).toHaveURL(/.*intro/);
   });
  
   test('Verify that user can be redirected to the "Community" page', async ({ page }) => {
       await page.locator('a[href="/community/welcome"]').click(); 
       await expect(page).toHaveURL(/.*welcome/);
   });
  
   test('verify search button', async ({ page }) => {
       await page.locator('.DocSearch-Button').click();
       await page.locator('.DocSearch-Input').fill('api');
       await page.locator('.DocSearch-Hit-title').first().click();
       await expect(page).toHaveTitle(/API testing/);
   });
  
   test('screenshot test of the main page', async ({ page }) => {
      await page.screenshot({ path: 'img/mainPage.png', fullPage: true })
      expect(await page.screenshot()).toMatchSnapshot('img/mainPage.png') 
   });

   test('screenshot test of the footer', async ({ page }) => {
    await page.locator('.footer ').screenshot({path: 'img/footer.png'})
    expect(await page.locator('.footer').screenshot()).toMatchSnapshot();
   });
});
