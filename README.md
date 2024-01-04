# Product Validation

## Environment 

- React Version: 16.13.1
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/MPf0G1ka7KOzHYWPq_Q81A/product-validation.gif)

## Functionality Requirements

The component should perform the following validations for a product form:

- The Product name input field should pass the following validations. In case of error, the appropriate message should be shown in `<p data-testid="name-input-error"></p>`.
  - The field is required.
    - For this error show the message `Product name is required`.

- The Quantity input field should pass following validations. In case of error, the appropriate message should be shown in `<p data-testid="quantity-input-error"></p>`.
  - The field is required.
    - For this error show the message `Quantity is required`.

- When fields are invalid, the submit button should be disabled. Hence, initially, the button is disabled.
- When all fields are valid and touched, the submit button should be enabled.

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- The product name input: `name-input`
- The quantity input: `quantity-input`
- The submit button: `submit-button`
- The container having the error message for:
  - the product name input field: `name-input-error`
  - the quantity input field: `quantity-input-error`

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
