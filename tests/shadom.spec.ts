import {test, expect} from '@playwright/test'


test("Handling shadow dom element", async ({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/")

    await page.getByPlaceholder("Enter pizza name").fill("Shadow Dom")
    await expect(page.getByPlaceholder("Enter pizza name")).toHaveValue("Shadow Dom")
})

// screenshot - screenshot()
// Calendar selection
