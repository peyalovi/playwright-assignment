import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});
