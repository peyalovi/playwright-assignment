import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { LeavePage } from '../pages/LeavePage.js';

test('Q4 - apply for leave and cancel request', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const leavePage = new LeavePage(page);

  await loginPage.open();
  await page.waitForTimeout(3000);

  await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(3000);

  await leavePage.open();
  await page.waitForTimeout(2000);

  await leavePage.applyLeave('2026-09-15', '2026-09-16');
  await page.waitForTimeout(3000);

  await leavePage.openMyLeave();

  await expect(page.getByText('Pending Approval')).toBeVisible();
  await page.waitForTimeout(4000);

  await leavePage.cancelFirstLeave();

  await expect(page.getByText('Cancelled')).toBeVisible();
  await page.waitForTimeout(3000);
});