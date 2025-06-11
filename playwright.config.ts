import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './features',
  testMatch: /.*\.feature/,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  timeout: 60000,
});
