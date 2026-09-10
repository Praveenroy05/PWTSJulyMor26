// Codegen - Code generation - Record and playback tool

// To open the codegen
// npx playwright codegen "url"

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});


test('Frames', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
  await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
  await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Nested Frames');
  await expect(page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox')).toHaveValue('Nested Frames');
});

