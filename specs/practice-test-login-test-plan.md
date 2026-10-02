# Practice Test Login Functional Test Plan

## Application Overview

Functional test plan for https://practicetestautomation.com/practice-test-login/. Scope is the login workflow, validation, authentication outcomes, error-state transitions, and logout behavior. Known valid credentials shown by the application are username student and password Password123. Every scenario starts in a fresh browser context at the login page unless its steps explicitly create a logged-in state. Do not use real user credentials. Capture URL, visible message, and final page state for each scenario. The page was observed to display 'Your username is invalid!' before any form submission; the initial-state tests below specifically detect this potential defect.

## Test Scenarios

### 1. Positive Functional Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. [P1] Login with documented valid credentials

**File:** `tests/practice-test-login/positive-functional.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context.
    - expect: The login form loads and both credential fields and Submit are available.
  2. Enter username student and password Password123, then submit.
    - expect: The browser navigates to a URL containing /logged-in-successfully/.
    - expect: The page displays the successful-login heading/message and a Log out link.
    - expect: No submitted credential appears in the URL.

#### 1.2. [P1] Login form accepts credentials and submits using the Submit control

**File:** `tests/practice-test-login/positive-functional.spec.ts`

**Steps:**
  1. Open the login page, enter the documented valid username and password, and activate Submit by mouse or touch.
    - expect: The form submits exactly once.
    - expect: The successful-login page appears with its expected confirmation and Log out link.

#### 1.3. [P1] Login form submits valid credentials with Enter

**File:** `tests/practice-test-login/positive-functional.spec.ts`

**Steps:**
  1. Open the login page, enter student in Username and Password123 in Password, and press Enter while focused in the form.
    - expect: The form submits without requiring a pointer action.
    - expect: The successful-login page appears and contains a Log out link.

#### 1.4. [P1] Logout returns to a reusable login form

**File:** `tests/practice-test-login/positive-functional.spec.ts`

**Steps:**
  1. Log in with student / Password123 and activate Log out.
    - expect: The browser returns to the practice-test-login page.
    - expect: The Username, Password, and Submit controls are available for another attempt.
    - expect: The page is not left showing the successful-login state as the current view.

#### 1.5. [P2] Correct credentials work after a prior failed attempt

**File:** `tests/practice-test-login/positive-functional.spec.ts`

**Steps:**
  1. Submit an incorrect username with a non-empty password and observe the error.
    - expect: Authentication is denied and a username error is displayed.
  2. Replace both field values with student and Password123 and submit again.
    - expect: The prior error clears or is replaced by the successful-login state.
    - expect: The user reaches the successful-login page.

### 2. Negative Functional Scenarios

**Seed:** `tests/seed.spec.ts`

#### 2.1. [P1] Incorrect username with correct password is rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page, enter incorrectUser and Password123, and submit.
    - expect: Authentication is denied and the browser remains on the login page.
    - expect: The visible error reads 'Your username is invalid!'.

#### 2.2. [P1] Correct username with incorrect password is rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page, enter student and incorrectPassword, and submit.
    - expect: Authentication is denied and the browser remains on the login page.
    - expect: The visible error reads 'Your password is invalid!'.

#### 2.3. [P1] Both credentials incorrect are rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page, enter an incorrect username and an incorrect password, and submit.
    - expect: Authentication is denied and the success page is not shown.
    - expect: The user receives a clear and consistent authentication error.

#### 2.4. [P1] Missing username is rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page, leave Username empty, enter Password123, and submit.
    - expect: Authentication is denied and the success page is not shown.
    - expect: The form identifies the missing or invalid username without exposing the password.

#### 2.5. [P1] Missing password is rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page, enter student, leave Password empty, and submit.
    - expect: Authentication is denied and the success page is not shown.
    - expect: The form identifies the missing or invalid password.

#### 2.6. [P1] Both credentials missing are rejected

**File:** `tests/practice-test-login/negative-functional.spec.ts`

**Steps:**
  1. Open the login page and submit with both fields empty.
    - expect: Authentication is denied and the browser remains on the login page.
    - expect: The page presents actionable missing-credential feedback and does not show a misleading prior-attempt error.

### 3. Functional Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 3.1. [P1] Login page starts without a stale authentication error

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and inspect the feedback area without entering or submitting anything.
    - expect: No username/password failure message is displayed before an attempted login.
    - expect: If 'Your username is invalid!' is present on initial load, mark the scenario failed and capture the initial page state.

#### 3.2. [P1] Whitespace-only values do not authenticate

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Open the login page, enter spaces or tabs only in both fields, and submit.
    - expect: Authentication is denied and the success page is not shown.
    - expect: The user receives understandable validation feedback and the page remains usable.

#### 3.3. [P2] Leading and trailing whitespace has deterministic credential handling

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Run separate fresh-context attempts with surrounding whitespace added to the username and then to the password, keeping the other credential valid.
    - expect: Neither attempt authenticates unless whitespace normalization is explicitly part of the product contract.
    - expect: The observed behavior is consistent across attempts and does not silently alter the password in an undocumented way.

#### 3.4. [P2] Credential matching is case-sensitive where required

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. In separate fresh contexts, change the case of one character in the documented username and then in the documented password; submit each attempt.
    - expect: Case-modified credentials are rejected if exact matching is the contract.
    - expect: Neither attempt reaches the successful-login route, and each produces the defined error state.

#### 3.5. [P2] Long and special-character inputs are handled safely

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Submit invalid credentials containing punctuation, markup-like text, and a long value within browser input limits.
    - expect: Authentication is denied without a crash, hang, or unexpected navigation.
    - expect: Input is treated as text; markup or script-like characters are not executed or rendered as active content.
    - expect: The layout remains usable and the password is not echoed in feedback.

#### 3.6. [P2] Repeated submission does not duplicate or corrupt the result

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Submit invalid credentials repeatedly, then submit the documented valid credentials once in the same page session.
    - expect: Repeated attempts do not create duplicate error regions, duplicate navigation, or an unresponsive form.
    - expect: The final valid attempt reaches the successful-login page and stale errors are cleared.

#### 3.7. [P2] Reload behavior is stable on login and success routes

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Reload the login page before authentication, then log in successfully and reload the successful-login route.
    - expect: The login route reloads with a usable form and no stale error on a fresh page state.
    - expect: The success route reloads without a server error and displays a state consistent with the application's authentication policy.

#### 3.8. [P2] Logout followed by browser Back does not imply an active session

**File:** `tests/practice-test-login/functional-edge-cases.spec.ts`

**Steps:**
  1. Log in successfully, log out, then use browser Back and inspect the displayed page and available controls.
    - expect: The user is not silently treated as authenticated after logout.
    - expect: Any cached success page behavior is documented and does not permit protected actions after logout.
