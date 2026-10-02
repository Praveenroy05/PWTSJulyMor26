// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoggedInPage, PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Positive Functional Scenarios', () => {
  test('[P1] Logout returns to a reusable login form', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);
    const loggedInPage = new PracticeTestLoggedInPage(page);

    // 1. Log in with valid credentials and activate Log out.
    await loginPage.open();
    await loginPage.fillCredentials('student', 'Password123');
    await loginPage.submit();
    await expect(loggedInPage.heading).toBeVisible();
    await loggedInPage.logout();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();
    await expect(loggedInPage.heading).toBeHidden();
  });
});