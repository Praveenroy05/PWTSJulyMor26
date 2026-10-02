// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoggedInPage, PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Positive Functional Scenarios', () => {
  test('[P1] Login form submits valid credentials with Enter', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);
    const loggedInPage = new PracticeTestLoggedInPage(page);

    // 1. Open the login page, enter valid credentials, and submit with Enter.
    await loginPage.open();
    await loginPage.fillCredentials('student', 'Password123');
    await loginPage.submitWithEnter();
    await expect(page).toHaveURL(/\/logged-in-successfully\/$/);
    await expect(loggedInPage.heading).toBeVisible();
    await expect(loggedInPage.logoutLink).toBeVisible();
  });
});