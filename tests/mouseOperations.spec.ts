// click - click()
// double click - dblclick()
// right click - click({button:'right'})
// Mouse Hover - hover()
// Scrolling - scrollIntoViewIfNeeded()
// Drag and Drop - Locator.dragTo(targetElementLocator)

import {test, expect} from '@playwright/test'

test("Handling double click and right click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    await page.getByText("right click me").click({button:'right'})
    await page.getByText("Paste", {exact:true}).click()

    // Note: Playwright auto handles the alert/popup/dialog event
})

test("Handling mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    await page.getByText("Travel Policies", {exact: true}).hover()
    await page.waitForTimeout(2000)
    await expect(page.getByTestId("test-id-Baggage Information")).toHaveText("Baggage Information")
})

test("Handling scrolling on the page",  async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact:true}).click()
    await page.locator("#input2").fill("Testing")
    await page.locator("textarea#inputText").fill("Scroll Up")
    await expect(page.locator("textarea#inputText")).toHaveValue("Scroll Up")
    
    // Note: Playwright by default perform scrolling on the page
})

test("Handling Drag and Drop",  async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    const sourceElement = page.locator("div#draggable")
    const targetElement = page.locator("div#droppable")

    // Locator.dragTo(locator)
   // await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("div#droppable p")).toHaveText("Dropped!")
    
})