import { Given, Then } from '@cucumber/cucumber';
import { expect, request as playwrightRequest, APIResponse } from '@playwright/test';

let response: APIResponse;

Given('que faço uma requisição GET para {string}', async function (url: string) {
  const requestContext = await playwrightRequest.newContext();
  response = await requestContext.get(url);
});

Then('o status da resposta deve ser {int}', async function (statusCode: number) {
  expect(response.status()).toBe(statusCode);
});
