import { Locator, Page } from '@playwright/test';

export class SauceDemoLoginPage {
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.getByPlaceholder('Username');
        this.password = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async launchURL() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async loginIntoApplication(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}