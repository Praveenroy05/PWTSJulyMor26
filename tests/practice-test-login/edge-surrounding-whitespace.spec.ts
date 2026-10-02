// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Functional Edge Cases', () => {
  test('[P2] Leading and trailing whitespace has deterministic credential handling', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Attempt 1: submit a space-padded username with the valid password.
    await loginPage.open();
    await loginPage.fillCredentials(' student ', 'Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();

    // Attempt 2: reload and submit the valid username with a space-padded password.
    await loginPage.open();
    await loginPage.fillCredentials('student', ' Password123 ');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.passwordError).toBeVisible();
  });
});