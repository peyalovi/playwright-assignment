import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';

test.setTimeout(90000);

test('Q3 - search user, edit role/status and verify changes', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);

  await loginPage.open();
  await page.waitForTimeout(3000);

  await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(4000);

  await adminPage.open();

  const username = await adminPage.getExistingUsername();

  console.log('Username selected for test:', username);

  await page.waitForTimeout(3000);

  await adminPage.searchUser(username);

  const row = adminPage.getUserRow(username);

  await expect(row).toBeVisible();
  await expect(row).toContainText(username);

  await page.waitForTimeout(3000);

  await adminPage.editUser(username);

  await adminPage.selectESS();

  await expect(adminPage.getRoleField()).toContainText('ESS');

  await page.waitForTimeout(2000);

  await adminPage.selectEnabled();

  await expect(adminPage.getStatusField()).toContainText('Enabled');

  await page.waitForTimeout(2000);

  await adminPage.save();

  await adminPage.refresh();

  await adminPage.searchUser(username);

  const updatedRow = adminPage.getUserRow(username);

  await expect(updatedRow).toBeVisible();
  await expect(updatedRow).toContainText(username);
  await expect(updatedRow).toContainText('ESS');
  await expect(updatedRow).toContainText('Enabled');

  await page.waitForTimeout(5000);
});