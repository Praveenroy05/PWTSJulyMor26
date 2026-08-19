// TestNG, Junit, BDD cucumber, Playwright

// test(), expect()

import {test, expect} from '@playwright/test'

// async-await

test("Title",  async function({page}){
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.getByLabel("Username").fill("student")
  await page.locator("#password").fill("Password123")
  await page.locator("#submit").click()
  await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")


})

// JS-TS - Asynchronous - 

// Promise - pending, successful, Rejected
