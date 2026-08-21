import {test, expect} from '@playwright/test'

// 1. How do we enter an input inside the textbox
// 2. Validate if the input field have a value "input"
// 3. click on an element

test("Login into application using valid credentails", async function({page}){

    // Goto the URL
    // Fill the username
    // Fill the password
    // Click on submit button
    // Validate if the dashboard page is visible or not

    // goto(url:string) - It help us in launching the url on the given browser
    // url should consists of http/https

    // fill("string") - Set the value inside the input field
    // expect(locator) - 
    // expect(25).toBe(25)

    // click() - Click on an element

    await page.goto("https://practicetestautomation.com/practice-test-login/")

    // await page.getByRole("textbox", {name:'Username'}).fill("student")
    // await page.locator("#username").fill("student")
    await page.getByLabel("Username").fill("student")

    // toHaveValue("value") - Checks if an INPUT field is having the value as "value"
    await expect(page.getByRole("textbox", {name:'Username'})).toHaveValue("student")

    // pressSequentially("string") - Set the value inside the INPUT field but character by character

    await page.locator("#password").pressSequentially("Password123")

    await page.getByRole("button", {name:'Submit'}).click()

    // 1. There should be an element on the page which should have a text value as "Logged In Successfully"
    // 2. Log out link should be visible on the page
    // 3. There should be an element on the page which should contains a text value as "Logged In"

    // toHaveText("string") - It validates if the element has "string" as a text value
    await expect(page.locator("h1.post-title")).toHaveText("Logged In Successfully")

    // toContainText("partial string") - It validates if the element contains "partial string" as a text value
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // toBeVisible() - If the element is visible on the page or not
    await expect(page.getByRole("link", {name:"Log out"})).toBeVisible()


})