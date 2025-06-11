import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('que estou na página de login', async () => {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com');
});

When('preencho usuário e senha válidos', async () => {
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
});

Then('devo ver a página de inventário', async () => {
  await expect(page.locator('.title')).toHaveText('Products');
  await browser.close();
});
