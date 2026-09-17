// Locators and methods related to Login Page Only

import { Locator, Page } from '@playwright/test';

export class LoginPage{

    // Locators - properties

    page: Page 
    // constructor(page:Page){
    //     this.page = page 
    // }


    private email :Locator
    private password :Locator
    private loginBtn : Locator
    errorMessage :Locator
    homePageIdentifier :Locator


    constructor(page:Page){
        this.page = page
        this.email = this.page.getByPlaceholder("email@example.com")
        this.password = this.page.getByPlaceholder("enter your passsword")
        this.loginBtn = this.page.locator("#login")
        this.errorMessage = this.page.locator("#toast-container")
        this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
    }


    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(username:string, password: string){
        await this.email.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }


}

