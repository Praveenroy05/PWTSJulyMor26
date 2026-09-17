// Drop Down

// 2 Types of Drop down

// 1. Static drop down - The value will never change
    // a. Single select DD
    // b. Multi select DD


// 2. Dynamic drop down - THe value will be changable
    // a. Single select DD
    // b. Multi select DD

// Development of DD

// 1. Using <select> tag
// 2. Non select tag - div span, li, ul,...


// 1. DD developed using <select> tag
// -------------------------------------------

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - selectOption("value", {label or value or index})

// Example: selectOption("AD", {value:"DZ"} or {label: "Albania"} or {index: 16})

// 4. If the drop down is multi-select  - selectOption(["AS", "BS", "CS"])

//************************************************** */

// 2. DD developed using NON <select> tag
// -------------------------------------------

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in #2
// 4. Identify and click on the element that you want to select from the drop down


import {test, expect} from '@playwright/test'

test("Handling drop down element using SELECT tag", async ({page})=>{
    // 1. Launch the url
    await page.goto("https://practice.expandtesting.com/dropdown")

    // 2. Locate the drop down element by writing the locator

    const countryDD = await page.locator("#country")

    // 3. Get the value from the drop down using - 
    // selectOption("value", {label or value or index})

    await countryDD.selectOption("AU")

    // toHaveValue("AU")
    await expect(countryDD).toHaveValue("AU")

    // 2nd way we can alos use value as an optional parameter

    await countryDD.selectOption({value:'BM'})

    // 3rd way - by using label as an optional parameter

    await countryDD.selectOption({label:'Colombia'})

    // 4th way  - by using index as an otional parameter
    // index starts with 0
    await countryDD.selectOption({index:102})

    await page.goto("https://demoqa.com/select-menu")
    const carDD = page.locator("#cars")

    await carDD.selectOption(["volvo", "opel"])
    await expect(carDD).toHaveValues(["volvo", "opel"])

    await carDD.selectOption([{label: 'Saab'}, {index: 3}, {value: 'volvo'}])


})


// Assignment to complete
// Select the value from the drop down which have been developed using NON SELECT tag

// https://demoqa.com/select-menu

