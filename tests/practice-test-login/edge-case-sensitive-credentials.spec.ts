// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Functional Edge Cases', () => {
  test('[P2] Credential matching is case-sensitive where required', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Attempt 1: submit the case-modified username with the valid password.
    await loginPage.open();
    await loginPage.fillCredentials('Student', 'Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();

    // Attempt 2: reload and submit the valid username with a case-modified password.
    await loginPage.open();
    await loginPage.fillCredentials('student', 'password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.passwordError).toBeVisible();
  });
});