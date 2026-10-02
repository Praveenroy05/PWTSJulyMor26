// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoggedInPage, PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Positive Functional Scenarios', () => {
  test('[P2] Correct credentials work after a prior failed attempt', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);
    const loggedInPage = new PracticeTestLoggedInPage(page);

    // 1. Submit incorrectUser / Password123 and verify the username error.
    await loginPage.open();
    await loginPage.fillCredentials('incorrectUser', 'Password123');
    await loginPage.submit();
    await expect(loginPage.usernameError).toBeVisible();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);

    // 2. Replace the credentials with valid values and submit again.
    await loginPage.fillCredentials('student', 'Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/logged-in-successfully\/$/);
    await expect(loggedInPage.heading).toBeVisible();
    await expect(loggedInPage.logoutLink).toBeVisible();
  });
});