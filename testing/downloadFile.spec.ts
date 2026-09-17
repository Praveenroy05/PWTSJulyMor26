// File Download
// path

// Step by step process to handle File download scenario:

// 1. Launch the url - page.goto(url)
// 2. wait for "download" event to appear on the page without using await

// const downloadResult = page.waitForEvent("download")

// 3. Identify and click on the element which is responsible for generation of 
// "download" event of the page

// 4. Wait for the completion of downaloading.
// const download = await downloadResult

// 5. By using the path module we can generate the path to store the downloaded file
// 6. Donwload - suggestedFileName() - Will return the filename of the downloaded file
// 7. saveAs(path) - Save the downloaded file to path that you have given
// 8. fs - Validate if the fileName is available inside the download folder or not


import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling file download scenario", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")

    const downloadResult = page.waitForEvent("download")
    
    await page.locator("#downloadButton").click()
    const download = await downloadResult

    const downloadDir  = await path.join("__dirname", "../downloads")
    console.log(downloadDir);

    // suggestedFilename() - Return the downloaded file name

    const fileName = await download.suggestedFilename()
    console.log(fileName)

    const filePath = await path.join(downloadDir, fileName)
    console.log(filePath);
    
    // saveAs(FilePath) - Copy the downloaded file to the specified path
    // C:\Users\pkroy\OneDrive\Pictures\PWTSJulyMor26\downloads\sampleFile.jpeg
    
    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)










    



})


