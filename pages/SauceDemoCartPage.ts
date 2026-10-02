import { Locator, Page } from '@playwright/test';

export class SauceDemoCartPage {
    private checkoutButton: Locator;

    constructor(page: Page) {
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}