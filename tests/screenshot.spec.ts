import {test, expect} from '@playwright/test'

// screenshot({path})

test("Screenshot of the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/page.jpeg"})
})

test("Screenshot of the an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByPlaceholder("Enter Name").screenshot({path:"screenshot/name.jpeg"})
})

test("Screenshot of the full page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path:"screenshot/fullPage.jpeg", fullPage: true})
})