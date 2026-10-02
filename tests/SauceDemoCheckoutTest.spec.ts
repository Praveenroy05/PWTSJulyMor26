import { expect, test } from './fixtures/SauceDemoFixtures';
import { SauceDemoCartPage } from '../pages/SauceDemoCartPage';
import { SauceDemoCheckoutPage } from '../pages/SauceDemoCheckoutPage';
import { SauceDemoInventoryPage } from '../pages/SauceDemoInventoryPage';

function randomItem(values: string[]) {
    return values[Math.floor(Math.random() * values.length)];
}

function randomPostalCode() {
    return String(Math.floor(10000 + Math.random() * 90000));
}

test('Complete a Sauce Demo purchase', { tag: '@smoke' }, async ({ loggedInPage: page }) => {
    const inventoryPage = new SauceDemoInventoryPage(page);
    const cartPage = new SauceDemoCartPage(page);
    const checkoutPage = new SauceDemoCheckoutPage(page);

    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation(
        randomItem(['Alex', 'Jordan', 'Taylor', 'Morgan']),
        randomItem(['Parker', 'Reed', 'Hayes', 'Brooks']),
        randomPostalCode(),
    );
    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();

    await expect(checkoutPage.orderConfirmation).toBeVisible();
});