// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Incorrect username with correct password is rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open the login page for the invalid-username case.
    await loginPage.open();

    // Enter incorrectUser and Password123, then submit.
    await loginPage.fillCredentials('incorrectUser', 'Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();
  });
});