// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Missing username is rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open login page, leave Username blank, and enter Password123.
    await loginPage.open();
    await loginPage.password.fill('Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();
  });
});