// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Both credentials missing are rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open login page and verify no stale error before submission.
    await loginPage.open();
    await expect.soft(loginPage.usernameError).toBeHidden();

    // Submit with both Username and Password empty.
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();
  });
});