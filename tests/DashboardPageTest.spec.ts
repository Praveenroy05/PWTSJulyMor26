import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'

const url = "https://rahulshettyacademy.com/client"
const username = "testnHNk@gmail.com"
const password = "Testing@1234"
const productName = "ADIDAS ORIGINAL"


test("Search and add the product to cart", async ({page})=>{
    const lp = new LoginPage(page)
    const dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(username, password)
    await dp.searchProduct(productName, 1)
    await expect(dp.addToCartMessage).toHaveText("Product Added To Cart")

})

test("Search and view the product details", async ({page})=>{
    const lp = new LoginPage(page)
    const dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(username, password)
    await dp.searchProduct(productName, 0)
    await expect(dp.viewPageProductName).toHaveText(productName)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice!)

})

