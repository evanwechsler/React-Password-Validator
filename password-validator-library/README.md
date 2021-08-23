# react-pwd-validator

Simple password validator and React UI components with typescript support

# Installation

```console
$ npm i react-pwd-validator
```

or

```console
$ yarn add react-pwd-validator
```

# Features

- (PasswordValidator)[https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/validators/passwordValidator.ts] class with multiple configuration options
- (PasswordInput)[https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/components/PasswordInput.tsx] UI component
- (PasswordValidationMessages)[https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/components/PasswordValidationMessages.tsx] UI component

# Validator

The password validator (PasswordValidator)[https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/validators/passwordValidator.ts] class is used to initialize a validator with varying levels of strength.

Configurable Parameters:

- Password strength (default is level 5)
- Minimum password length (default is 8 based on (OWASP)[https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls] recommendations)
- Maximum password length (default is 64 based on (OWASP)[https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls] recommendations)

6 levels of password strength (each incremental level contains the restrictions of the previous levels):

- 0 - No restrictions
- 1 - Password must meet length requirements
- 2 - Password must contain at least one lowercase letter
- 3 - Password must contain at least one uppercase letter
- 4 - Password must contain at least on digit
- 5 (default if no level is provided) - Password must contain at least on special character

Method

## Usage

### PasswordValidator.validatePassword()

Validates password based on parameters

```typescript
import { PasswordValidator } from "react-pwd-validator";

const passwordValidator = new PasswordValidator(); // Defaults to maximum password strength
const password = "Password";
const passwordValidation = passwordValidator.validatePassword(password);
console.log(passwordValidation);
```

Outputs

```javascript
{
  passwordLevels: {
    digits: true,
    length: true,
    lowercaseLetters: true,
    specialCharacters: false,
    uppercaseLetters: true,
  },
  validated: false;
}
```

Example: User defined parameters

```typescript
import { PasswordValidator } from "react-pwd-validator";
/*
 * Strength level = 3
 * Minimum password length = 5
 * Maximum password length = 30
 */
const passwordValidator = new PasswordValidator(3, 5, 30);
const password = "Password";
const passwordValidation = passwordValidator.validatePassword(password);
console.log(passwordValidation);
```

Output

```javascript
// passwordValidation object
{
  passwordLevels: {
    length: true,
    lowercaseLetters: true,
    uppercaseLetters: true,
  },
  validated: true;
}
```

### PasswordValidator.getMessages()

Gets password info messages for UI based on validator strength

```typescript
const passwordValidator = new PasswordValidator();
console.log(passwordValidator.getMessages());
```

```javascript
{
  length: "Must be at least 8 characters long",
  lowercaseLetters: "Must contain at least 1 lowercase letter",
  uppercaseLetters: "Must contain at least 1 uppercase letter",
  digits: "Must contain at least 1 digit",
  specialCharacters: "Must contain at least 1 symbol"
}
```

```typescript
/*
 * Strength level = 3
 * Minimum password length = 5
 * Maximum password length = 30
 */
const passwordValidator = new PasswordValidator(3, 5, 30);
console.log(passwordValidator.getMessages());
```

```javascript
{
  length: "Must be at least 5 characters long",
  lowercaseLetters: "Must contain at least 1 lowercase letter",
  uppercaseLetters: "Must contain at least 1 uppercase letter",
}
```

# Password Input
