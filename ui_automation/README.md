# UI Automation – Playwright

This folder contains the UI test automation suite for the assignment, built using [Playwright](https://playwright.dev/) with JavaScript, following the **Page Object Model (POM)** design pattern.

## 📁 Folder Structure

```
ui_automation/
├── pages/              
├── tests/              
├── utils/              
├── playwright-report/  
├── test-results/       
├── playwright.config.js
├── package.json
└──package-lock.json     
```

## 🧱 Design Pattern

This project follows the **Page Object Model (POM)**:
- Each page of the application under test has a corresponding class in `pages/`, encapsulating its locators and actions.
- Test files in `tests/` use these page objects to keep tests clean, readable, and maintainable.
- Common reusable logic lives in `utils/`.

## ⚙️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/peyalovi/playwright-assignment.git
   cd playwright-assignment/ui_automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## ▶️ Running Tests

Run all tests:
```bash
npx playwright test
```

Run a specific test file:
```bash
npn run test test:q1
npn run test test:q2
npn run test test:q3
npn run test test:q4
```

## 📊 Viewing Test Reports

After a test run, view the HTML report:
```bash

npx playwright show-report
```
