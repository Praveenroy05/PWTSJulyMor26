// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Correct username with incorrect password is rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open the login page for the invalid-password case.
    await loginPage.open();

    // Enter student and incorrectPassword, then submit.
    await loginPage.fillCredentials('student', 'incorrectPassword');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.passwordError).toBeVisible();
  });
});