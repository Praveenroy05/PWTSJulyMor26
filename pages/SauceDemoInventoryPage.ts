import { Locator, Page } from '@playwright/test';

export class SauceDemoInventoryPage {
    private page: Page;
    private cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = this.page.locator('.shopping_cart_link');
    }

    async addProductToCart(productName: string) {
        const product = this.page.locator('.inventory_item').filter({ hasText: productName });
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}