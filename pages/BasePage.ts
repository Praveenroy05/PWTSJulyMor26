import { Locator, Page } from '@playwright/test';


export class BasePage{

    // Locators - properties

    page: Page 
    // constructor(page:Page){
    //     this.page = page 

    constructor(page:Page){this.page = page}

    async launchURL(){
        
    }

}