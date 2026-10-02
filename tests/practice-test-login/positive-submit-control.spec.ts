// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoggedInPage, PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Positive Functional Scenarios', () => {
  test('[P1] Login form accepts credentials and submits using the Submit control', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);
    const loggedInPage = new PracticeTestLoggedInPage(page);

    // 1. Open the login page in a fresh browser context.
    await loginPage.open();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.submitButton).toBeVisible();

    // 2. Enter valid credentials and activate Submit by mouse.
    await loginPage.fillCredentials('student', 'Password123');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/logged-in-successfully\/$/);
    await expect(loggedInPage.confirmation).toBeVisible();
    await expect(loggedInPage.logoutLink).toBeVisible();
    expect(page.url()).not.toContain('student');
    expect(page.url()).not.toContain('Password123');
  });
});