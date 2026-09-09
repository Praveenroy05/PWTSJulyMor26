// Frames

/*

Helping us in integrating one html page to another html page.
By using tag <iframe>


<html> - page.goto("")
....
        page.locator()
....
    <iframe> - frame - const framePage = page.frameLocator()
        <html>
        ..... frame.locator()
        .....
        <iframe> - Nested frame - const nestedFrame  = framePage.frameLocator()
            
            <html> 
            ..... nestedFrame.locator()
            .....
            </html> 

        </iframe>

        </html>
    </iframe>
    
</html>


*/

import {test, expect} from '@playwright/test'

test("Handling frames", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    // frameLocator() - Which helps us in entering inside the iframe to select the elements

    const framePage = await page.frameLocator("#singleframe")

    await framePage.locator("[type='text']").first().fill("Testing")
    await expect(framePage.locator("[type='text']").first()).toHaveValue("Testing")


    await page.getByText("Iframe with in an Iframe", {exact: true}).click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator(".iframe-container iframe")

    await innerFrame.locator("[type='text']").first().fill("Testing")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Testing")


    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})