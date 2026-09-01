import {test, expect} from '@playwright/test'



/*

1. Launch the url
2. Identify the element which expect to upload the file
3. Use setInputFiles() to uplad the file on an element



*/

test("Handling file upload", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("path of the file")
    await page.locator("#filesToUpload")
    .setInputFiles(["testdata/AILLM.jpg","testdata/AILLM1.jpg"])

    await expect(page.locator("#fileList li").first()).toHaveText("AILLM.jpg")
    await expect(page.locator("#fileList li").last()).toHaveText("AILLM1.jpg")

})