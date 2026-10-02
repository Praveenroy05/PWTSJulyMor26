// spec: specs/practice-test-login-test-plan.md
// seed: tests/seed.spec.ts

import { expect, test } from '@playwright/test';
import { PracticeTestLoginPage } from './pages/PracticeTestLoginPages';

test.describe('Negative Functional Scenarios', () => {
  test('[P1] Both credentials incorrect are rejected', async ({ page }) => {
    const loginPage = new PracticeTestLoginPage(page);

    // Open login page, enter invalid credentials, and submit.
    await loginPage.open();
    await loginPage.fillCredentials('wrongUser', 'wrongPassword');
    await loginPage.submit();
    await expect(page).toHaveURL(/\/practice-test-login\/$/);
    await expect(loginPage.usernameError).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeHidden();
  });
});