import { Locator, Page } from '@playwright/test';

export class PracticeTestLoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly submitButton: Locator;
  readonly usernameError: Locator;
  readonly passwordError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.usernameError = page.getByText('Your username is invalid!', { exact: true });
    this.passwordError = page.getByText('Your password is invalid!', { exact: true });
  }

  async open() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async fillCredentials(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
  }

  async submit() {
    await this.submitButton.click();
  }

  async submitWithEnter() {
    await this.password.press('Enter');
  }
}

export class PracticeTestLoggedInPage {
  readonly heading: Locator;
  readonly confirmation: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.heading = page.getByRole('heading', { name: 'Logged In Successfully' });
    this.confirmation = page.getByText('Congratulations student. You successfully logged in!');
    this.logoutLink = page.getByRole('link', { name: 'Log out' });
  }

  async logout() {
    await this.logoutLink.click();
  }
}
