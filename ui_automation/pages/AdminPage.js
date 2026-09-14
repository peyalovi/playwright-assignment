export class AdminPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.getByText('Admin', { exact: true }).click();
    await this.page.waitForTimeout(3000);
  }

  async getExistingUsername() {
    const rows = this.page.locator('.oxd-table-body .oxd-table-row');

    await rows.first().waitFor();

    const count = await rows.count();

    for (let i = 0; i < count; i++) {
      const row = rows.nth(i);
      const cells = row.locator('.oxd-table-cell');

      const username = (await cells.nth(1).innerText()).trim();

      if (username !== 'Admin' && username !== '') {
        return username;
      }
    }

    throw new Error('No suitable user was found in the Admin table.');
  }

  async searchUser(username) {
    const usernameInput = this.page
      .locator('.oxd-input-group')
      .filter({
        has: this.page.locator('label').filter({ hasText: 'Username' })
      })
      .locator('input');

    await usernameInput.fill(username);
    await this.page.waitForTimeout(2000);

    await this.page.getByRole('button', { name: 'Search' }).click();
    await this.page.waitForTimeout(4000);
  }

  getUserRow(username) {
    return this.page
      .locator('.oxd-table-body .oxd-table-row')
      .filter({ hasText: username })
      .first();
  }

  async editUser(username) {
    const row = this.getUserRow(username);

    await row.waitFor();
    await this.page.waitForTimeout(2000);

    await row
      .locator('.oxd-table-cell-action-space')
      .nth(1)
      .click();

    await this.page.waitForTimeout(4000);
  }

  async selectESS() {
    const roleGroup = this.page
      .locator('.oxd-input-group')
      .filter({
        has: this.page.locator('label').filter({ hasText: 'User Role' })
      });

    await roleGroup.locator('.oxd-select-text').click();
    await this.page.waitForTimeout(1500);

    await this.page
      .locator('.oxd-select-option')
      .filter({ hasText: 'ESS' })
      .click();

    await this.page.waitForTimeout(2000);
  }

  async selectEnabled() {
    const statusGroup = this.page
      .locator('.oxd-input-group')
      .filter({
        has: this.page.locator('label').filter({ hasText: 'Status' })
      });

    await statusGroup.locator('.oxd-select-text').click();
    await this.page.waitForTimeout(1500);

    await this.page
      .locator('.oxd-select-option')
      .filter({ hasText: 'Enabled' })
      .click();

    await this.page.waitForTimeout(2000);
  }

  getRoleField() {
    return this.page
      .locator('.oxd-input-group')
      .filter({
        has: this.page.locator('label').filter({ hasText: 'User Role' })
      })
      .locator('.oxd-select-text-input');
  }

  getStatusField() {
    return this.page
      .locator('.oxd-input-group')
      .filter({
        has: this.page.locator('label').filter({ hasText: 'Status' })
      })
      .locator('.oxd-select-text-input');
  }

  async save() {
    await this.page.getByRole('button', { name: 'Save' }).click();
    await this.page.waitForTimeout(5000);
  }

  async refresh() {
    await this.page.reload();
    await this.page.waitForTimeout(5000);
  }
}