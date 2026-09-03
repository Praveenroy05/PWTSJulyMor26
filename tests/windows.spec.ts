// Multiple tabs or windows - "popup" event apeears on the 


// Step by step process to handle multiple tabs/windows using PW:


// 1. Launch the url
// 2. wait for "popup" event to appear on the page without using "await"
// const page1 = page.waitForEvent("popup")
// 3. Identify and click on the element which is responsible for generation of "popup" event on the page
// 4. We can store the final result of "popup" event in a variable
// const newPage = await page1
// 5. Perform any action on the new tab/windows, we must use "newPage" object
// 6. Come back to the main/original page and perform any action - we can move to the "page" fixture.




// Promise - Pending, Succussful, Rejected

import {test, expect} from '@playwright/test'

test("Handling multiple windows", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")


    const page1 = page.waitForEvent("popup")
    
    // Identify and click on the element which is responsible for generation of "popup" event on the page

    await page.locator("#Tabbed button").click()
    const newPage = await page1

    await newPage.getByText("Downloads", {exact:true}).click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")
    
    await page.bringToFront()

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    await page.goBack()

    // Assignment to handle the new window

})