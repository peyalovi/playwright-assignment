export class LeavePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.getByText('Leave', { exact: true }).click();
  }

  async applyLeave(fromDate, toDate) {
    await this.page.getByText('Apply', { exact: true }).click();

    await this.page.locator('.oxd-select-text').first().click();
    await this.page.locator('.oxd-select-option').first().click();

    const dates = this.page.locator('input[placeholder="yyyy-dd-mm"]');
    await dates.nth(0).fill(fromDate);
    await dates.nth(1).fill(toDate);

    await this.page.getByRole('button', { name: 'Apply' }).click();
  }

  async openMyLeave() {
    await this.page.getByText('My Leave', { exact: true }).click();
  }

  async cancelFirstLeave() {
    await this.page.getByRole('button', { name: 'Cancel' }).first().click();
  }
}
