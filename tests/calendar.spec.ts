import {test, expect} from '@playwright/test'

test("Handling calendar" , async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    let targetDay = "11"
    let targetMonth = "September"
    let targetYear = "2026"


    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){

        if((await monthPicker.textContent() == targetMonth) &&
            (await yearPicker.textContent() == targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break
        }
        else{
            await page.getByText("Next", {exact:true}).click()
        }

    }

    await page.waitForTimeout(3000)




})