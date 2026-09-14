import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { PimPage } from '../pages/PimPage.js';
import { randomEmployee } from '../utils/testData.js';

test('Q2-add employee, search employee and logout', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const pimPage = new PimPage(page);

  const employee = randomEmployee();

  await loginPage.open();

  await page.waitForLoadState('load');

  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);

  await pimPage.open();

  await pimPage.addEmployee(
    employee.firstName,
    employee.lastName,
    employee.employeeId
  );

  await pimPage.searchEmployee(employee.firstName);

  const employeeRow = page.locator('.oxd-table-row').filter({
    hasText: employee.firstName
  });

  await expect(employeeRow).toBeVisible();

  await expect(employeeRow).toContainText(employee.firstName);

  await expect(employeeRow).toContainText(employee.lastName);

  await pimPage.logout();

  await expect(page).toHaveURL(/auth\/login/);

});