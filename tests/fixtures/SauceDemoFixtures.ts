import { expect, Page, test as base } from '@playwright/test';
import { SauceDemoLoginPage } from '../../pages/SauceDemoLoginPage';

type SauceDemoFixtures = {
    loggedInPage: Page;
   
};

export const test = base.extend<SauceDemoFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new SauceDemoLoginPage(page);
        await loginPage.launchURL();
        await loginPage.loginIntoApplication('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory\.html/);

        await use(page);
    },
});

export { expect };