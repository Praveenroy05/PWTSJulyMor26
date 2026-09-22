import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { ExcelUtils } from '../utils/ExcelUtils'
import path from 'path'

const filePath = path.join(__dirname, "../testdata/excel.xlsx")

const sheetName = "Login"

let data
try{
   data = ExcelUtils.getDataFromExcel(filePath, sheetName)
}
catch(e){
  console.log(e);
  
}

// console.log(data);



let lp : LoginPage
let dp: DashboardPage

test.beforeEach("Common steps", async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let product of data){
    test(`Search and add the product to cart for ${product.productName}`, async ()=>{
        await lp.launchURL(product.url)
        await lp.loginIntoApplication(product.username, product.password)
        await dp.searchProduct(product.productName, 1)
        await expect(dp.addToCartMessage).toHaveText("Product Added To Cart")

    })
}

/*

const datas = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    username: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro'
  }
]

for(let product of datas){
    console.log(product.productName);
    
}

// console.log(datas[0].productName);

*/