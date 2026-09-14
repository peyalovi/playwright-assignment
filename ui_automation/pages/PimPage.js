export class PimPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.getByText('PIM', { exact: true }).click();

    await this.page.getByText('Employee Information', {
      exact: true
    }).waitFor({ state: 'visible' });
  }

  async addEmployee(firstName, lastName, employeeId) {
    await this.page.getByRole('link', {
      name: 'Add Employee'
    }).click();

    await this.page.getByPlaceholder('First Name').waitFor({
      state: 'visible'
    });

    await this.page.getByPlaceholder('First Name').fill(firstName);

    await this.page.getByPlaceholder('Last Name').fill(lastName);

    const employeeIdBox = this.page
      .locator('.oxd-input-group')
      .filter({ hasText: 'Employee Id' })
      .locator('input');

    await employeeIdBox.fill(employeeId);

    await this.page.getByRole('button', {
      name: 'Save'
    }).click();

    await this.page.getByText('Successfully Saved').waitFor({
      state: 'visible'
    });
  }

  async searchEmployee(firstName) {
    await this.page.getByRole('link', {
      name: 'Employee List'
    }).click();

    const searchBox = this.page
      .getByPlaceholder('Type for hints...')
      .first();

    await searchBox.waitFor({
      state: 'visible'
    });

    await searchBox.fill(firstName);

    await this.page.getByRole('button', {
      name: 'Search'
    }).click();
  }

  async logout() {
    await this.page.getByAltText('profile picture').click();

    await this.page.getByText('Logout', {
      exact: true
    }).click();
  }
}