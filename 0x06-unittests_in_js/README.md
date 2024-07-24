# 0x06. Unittests in JS

## Overview
This project focuses on writing and executing unit tests in JavaScript, specifically for back-end applications. It covers various testing tools and techniques, including Mocha, Chai, and Sinon, along with their applications in unit and integration testing.

## Project Timeline
- **Project Start:** Jul 24, 2024, 6:00 AM
- **Project End:** Jul 26, 2024, 6:00 AM
- **Checker Release:** Jul 24, 2024, 6:00 PM

An auto review will be launched at the deadline.

## Resources
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-node-js-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives
By the end of this project, you should be able to explain:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies and stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements
- All code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file at the root of the project is mandatory
- Code should use the `.js` extension
- All tests should pass without warnings or errors when running `npm test *.test.js`

## Tasks

### 0. Basic test with Mocha and Node assertion library
- **File:** `0-calcul.js`
- **Description:** Create a function `calculateNumber` that rounds two numbers and returns their sum.
- **Tests:** Located in `0-calcul.test.js` using `assert`.

### 1. Combining descriptions
- **File:** `1-calcul.js`
- **Description:** Enhance `calculateNumber` to handle SUM, SUBTRACT, and DIVIDE operations.
- **Tests:** Located in `1-calcul.test.js`.

### 2. Basic test using Chai assertion library
- **File:** `2-calcul_chai.js`
- **Description:** Copy of `1-calcul.js` but tests rewritten using Chai's `expect`.
- **Tests:** Located in `2-calcul_chai.test.js`.

### 3. Spies
- **Files:** `utils.js`, `3-payment.js`
- **Description:** Use Sinon to create spies and test function calls.
- **Tests:** Located in `3-payment.test.js`.

### 4. Stubs
- **Files:** `4-payment.js`
- **Description:** Use stubs to mock function behavior.
- **Tests:** Located in `4-payment.test.js`.

### 5. Hooks
- **Files:** `5-payment.js`
- **Description:** Implement before and after hooks for test setup and teardown.
- **Tests:** Located in `5-payment.test.js`.

### 6. Async tests with done
- **Files:** `6-payment_token.js`
- **Description:** Test async functions using the `done` callback.
- **Tests:** Located in `6-payment_token.test.js`.

### 7. Skip
- **Files:** `7-skip.test.js`
- **Description:** Use `skip` to bypass failing tests.
- **Tests:** Located in `7-skip.test.js`.

### 8. Basic Integration testing
- **Files:** `8-api/api.js`, `8-api/api.test.js`
- **Description:** Create an Express server and test it.
- **Tests:** Located in `8-api/api.test.js`.

### 9. Regex integration testing
- **Files:** `9-api/api.js`, `9-api/api.test.js`
- **Description:** Add validation using regex for URL parameters.
- **Tests:** Located in `9-api/api.test.js`.

### 10. Deep equality & Post integration testing
- **Files:** `10-api/api.js`, `10-api/api.test.js`
- **Description:** Add and test endpoints for payment methods and user login.
- **Tests:** Located in `10-api/api.test.js`.

## Repository
- **GitHub Repository:** [alx-backend-javascript](https://github.com/alx-backend-javascript)
- **Directory:** `0x06-unittests_in_js`

Ensure to follow the instructions and maintain the coding standards throughout the project. Good luck!

