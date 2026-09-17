// Alert - "dialog" event appeared on the page

// 1. Simple Alert - Only one button
// 2. Confirm Alert - Yes/No, Submit/Cancel
// 3. Prompt Alert - Along with Yes/No - textbox as well

// "dialog" event 
// "popup" event - Child window/tab/page


// Step by Step process to handle alert

// 1. Launch the url
// 2. Wait for "dialog" event without using await
// 3. Click on the button which is responsible for generation of an alert

// In Playwright there is a class known as Dialog

// 1. dialog.accept(argument?) - To click on Yes/Ok/Submit
// 2. dialog.dismiss() - To click on the Cancel/No
// 3. dialog.message() - To get the text displayed on the alert


import {test, expect} from '@playwright/test'


test("Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // page.on()
    // page.waitForEvent()

    const prompt = "Prompt"
    page.on("dialog", async (dialog)=>{
        await console.log(dialog.message())
        await dialog.accept(prompt)
    })

    await page.locator("#alertButton").click()
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText(`You entered ${prompt}`)


})