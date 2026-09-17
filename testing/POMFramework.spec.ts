// Framework - It is a design pattern. Set of guidlines

// POM - Page Object Model - It is a desing pattern

// It is a class which represents the page of the application. It contains the locators
// and methods of the specific page.

// Page object model is a design pattern used in software testing to represent a web page 
// as an object. It is a way to organise and manage the interaction with the web page by
// creating the properties (variables - locators) and methods (Actions) of a particular page.

// This approach helps us in reducing the code duplication, improve test readability and 
// maintanibility by encapsulating the page specific properties and methods inside a 
// particular class.

// LoginPage.ts - Locators and methods ONLY related to login page.

// POM framework from scratch:


// There are different layers that we have to create:

// 1. PAGE LAYER - This will consists of Locators and Methods related to a specific page,
//  Will create a package or folder (pages). Different class you will create inside pages folder.
// LoginPage.ts, DashboardPage.ts
// email, password, loginBtn, loginIntoApplication(), invalidLogin() - LoginPage.ts


// 2. TEST LAYER - Pure test case and assertions. Will create a package or folder (tests).
// We will call the locators and methods fron the specific page classes to test file.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ......


// 3. TEST DATA LAYER - JSON/Excel/.env  - TestData.json, TestData.xlsx, qa.env, prod.env

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration file

// 5. UTILS LAYER - We will create a utils folder. Custom function - log(), report(), screenshot()
// scrollDown(), alert(), getDataFromExcel(),....

// 6. REPORT LAYER - HTML/Allure -  We do not have to create it separately.

