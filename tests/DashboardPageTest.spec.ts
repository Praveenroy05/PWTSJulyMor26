import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import data from '../testdata/testdata.json'


const productName = "ADIDAS ORIGINAL"


let lp : LoginPage
let dp: DashboardPage

test.beforeEach("Common steps", async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchURL(data.url)
    await lp.loginIntoApplication(data.username, data.password)
})

test("Search and add the product to cart", async ()=>{
    await dp.searchProduct(productName, 1)
    await expect(dp.addToCartMessage).toHaveText("Product Added To Cart")

})

test("Search and view the product details", async ()=>{
    await dp.searchProduct(productName, 0)
    await expect(dp.viewPageProductName).toHaveText(productName)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice!)

})

