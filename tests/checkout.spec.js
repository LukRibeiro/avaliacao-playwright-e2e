const { test, expect } = require('@playwright/test');

test('Fluxo de checkout completo no SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Adiciona um item ao carrinho
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Vai para o carrinho
  await page.click('.shopping_cart_link');

  // Clica em checkout
  await page.click('[data-test="checkout"]');

  // Preenche dados
  await page.fill('[data-test="firstName"]', 'Lucas');
  await page.fill('[data-test="lastName"]', 'Costa');
  await page.fill('[data-test="postalCode"]', '80000-000');

  await page.click('[data-test="continue"]');

  // Finaliza compra
  await page.click('[data-test="finish"]');

  // Valida mensagem final
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
