const { test, expect } = require('@playwright/test');

test('Login e navegação para produtos', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Valida se chegou na tela de produtos
  await expect(page).toHaveURL(/.*inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});
