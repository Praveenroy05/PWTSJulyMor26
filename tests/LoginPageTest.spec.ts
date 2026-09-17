import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"

test("Login Into Application", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(username, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login Into Application with invalid creds", async ({page})=>{
    
})

