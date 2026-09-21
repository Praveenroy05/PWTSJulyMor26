import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../testdata/testdata.json'

// console.log(data)

// const data1 = 
// {
//   url: 'https://rahulshettyacademy.com/client',
//   username: 'testnHNk@gmail.com',
//   password: 'Testing@1234',
//   incorrectPassword: 'Test'
// }

// console.log(data1.url);
let lp:LoginPage

test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(data.url)
})

test("Login Into Application", async ()=>{
    await lp.loginIntoApplication(data.username, data.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Login Into Application with invalid creds", async ()=>{
    await lp.loginIntoApplication(data.username, data.incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})


// test("browser", async ({browser})=>{})

// test("page", async ({page})=>{})


