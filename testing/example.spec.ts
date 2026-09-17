// TestNG, Junit, BDD cucumber, Playwright

// test(), expect()

import {test, expect} from '@playwright/test'

// async-await

test("Title",  async function({page}){
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.getByLabel("Username").fill("student")

  await page.getByRole("textbox", {name: 'Password'}).fill("Password123")

  await page.getByRole("button", {name:"Submit"}).click()
  await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

})

// JS-TS - Asynchronous - 

// Promise - pending, successful, Rejected
