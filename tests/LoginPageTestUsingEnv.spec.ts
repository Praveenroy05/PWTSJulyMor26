import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'


test("Login Into Application", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(process.env.BASE_URL!)
    await lp.loginIntoApplication(process.env.EMAIL!, process.env.PASSWORD!)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login Into Application with invalid creds", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(process.env.BASE_URL!)
    await lp.loginIntoApplication(process.env.EMAIL!, process.env.incorrectPassword!)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})


// test("browser", async ({browser})=>{})

// test("page", async ({page})=>{})


