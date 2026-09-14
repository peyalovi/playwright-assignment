import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('Q1 - invalid username and password shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  await loginPage.login('Random', '147258369');

  await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
  await page.waitForTimeout(3000);
});