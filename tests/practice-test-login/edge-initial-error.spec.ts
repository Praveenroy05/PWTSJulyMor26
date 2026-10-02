// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Functional Edge Cases', () => {
  test('[P1] Login page starts without a stale authentication error', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open a fresh login page and inspect feedback without interacting.
    await loginPage.open();
    await expect(loginPage.username).toBeVisible();
    await expect(loginPage.password).toBeVisible();
    await expect.soft(loginPage.usernameError).toBeHidden();
  });
});