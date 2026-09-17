import {test, expect} from '@playwright/test'

// page 
// browser
// context
// request

// Fixture is a global object available inside plyawright which helps us in terms
// of performing certain setup and teardown process by default. The fixures are
// bydefault available to the test().



// page - It is an object of a Page class. 
// Playwright autoatically:
// 1. Create the Page on the browser
// 2. Gives it to your test
// 3. Runs the test on the same page on the browser
// 4. Cleans it up after the test completed

// Note: 

// 1. page fixture will identify ONLY a single page on the browser whereas 
// the browser fixture will understand the complete browser - it may have more 
// than one page as well

// 2. page fixture will automatically launch the browser and create a new page
// on the browser whereas browser fixture will not automatically launch the browser


test("Page Fixture", async function({page}){

    await page.goto("https://www.google.com")
    await page.goto("https://www.facebook.com")
})

test("Browser Fixture", async function({browser}){
    // Create a context of a browser
    const context = await browser.newContext()
    // create a new page on the browser
    const page = await context.newPage()

    const page1 = await context.newPage()

    await page.goto("https://www.google.com")
    await page1.goto("https://www.facebook.com")

    // const context1 = await browser.newContext()
    // // create a new page on the browser
    // const page2 = await context1.newPage()
    // const page3 = await context1.newPage()


    // Dashboard - 4 TCs


})