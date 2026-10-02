// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Missing password is rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open login page, enter student, and leave Password blank.
    await loginPage.open();
    await loginPage.username.fill('student');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.passwordError).toBeVisible();
  });
});