// Annotations :

/*


1. test.skip() - Marks the test as irrelevant. Playwright does not run such test.

2. test.fail() - Marks the test as failing test case

3. test.fixme() - Marks the test as failing test and PW will not run such test case.

4. test.only() - PW will run only those test case which have been marked as test.only()

5. test.slow() - marks the test as slow and triples the test timeout.

6. test.step() - Provide the test title for the test step

7. test.describe() - Group the test case and isplay the tile of the describe inside the report

8. test.describe().configure()

*/

import {test, expect} from '@playwright/test'

test.skip("Test1", async ()=>{
    console.log("Test1");
})

test.fixme("Test2", async ()=>{
    console.log("Test2");
})

test.fail("Test3", async ()=>{
    expect(25).toBe(29)
})

test("Test4", async ({page})=>{
  //  test.slow()
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#username").fill("student")
    await expect(page.getByRole("textbox", {name:'Username'})).toHaveValue("student")
    await page.locator("#password").pressSequentially("Password123")
    await page.getByRole("button", {name:'Submit'}).click()
})