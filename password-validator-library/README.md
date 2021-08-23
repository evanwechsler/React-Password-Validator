# react-pwd-validator

Simple password validator and React UI components with typescript support

# Installation

```console
npm i react-pwd-validator
```

or

```console
yarn add react-pwd-validator
```

# Features

- [PasswordValidator][PasswordValidator] class with multiple configuration options
- [PasswordInput][PasswordInput] UI component
- [PasswordValidationMessages][PasswordValidationMessages] UI component

# Validator

The password validator [PasswordValidator][PasswordValidator] class is used to initialize a validator with varying levels of strength.

Configurable Parameters:

- Password strength (default is level 5)
- Minimum password length (default is 8 based on [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls) recommendations)
- Maximum password length (default is 64 based on [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls) recommendations)

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
![Password input with password text hidden](https://github.com/evanwechsler/React-Password-Validator/blob/master/documentation/images/password-hidden.png "Password input (hidden)")
![Password input with password text visible](https://github.com/evanwechsler/React-Password-Validator/blob/master/documentation/images/password-visible.png "Password input (visible)")

## Usage
This UI component make is so that you can change the visibility of the input text. The most basic usage is as follows:
```typescript
import { PasswordInput } from "react-pwd-validator"

const MyForm = () => {
  return (
    <PasswordInput placeholder="Password" />
  )
}
```
You able to change the eye icons by passing them into the component as props
```typescript
// Icons.tsx
import React from "react";

export const Eye = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}>
      <path />
    </svg>
  );
};

export const EyeSlash = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props}>
      <path />
    </svg>
  );
};
```

```typescript
import { PasswordInput } from "react-pwd-validator"
import { Eye, EyeSlash } from "./Icons"


const MyForm = () => {
  return (
    <PasswordInput placeholder="Password" eyeIcon={Eye} eyeSlashIcon={EyeSlash}/>
  )
}
```

# usePasswordValidator Hook
This hooks is useful to manage the validatation state of a password. It is best used in combination with the [PasswordValidationMessages](#PasswordValidationMessages) UI component. The hook returns an object contaning a PasswordValidation object and a PasswordMessages object. You can pass in the same options as the PassordValidator class.

```typescript
function usePasswordValidator(password: string, passwordStrength?: number | undefined, minLength?: number | undefined, maxLength?: number | undefined): {
    passwordValidation: PasswordValidation;
    messages: PasswordMessages;
}
```

## Usage
```tsx
import { useState } from "react";
import {
  PasswordInput,
  usePasswordValidator,
} from "react-pwd-validator";

function App() {
  const [password, setPassword] = useState("");
  const passwordValidationStatus = usePasswordValidator(password);
  
  return (
    <div>
      <PasswordInput
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordValidationStatus.passwordValidation.validated ?
        // Something if password is validated
        :
        // Something if password is invalid
      }
    </div>
  )
}
```

# PasswordValidationMessages
This UI components renders all of the password messages along with their current state.

Example:
```tsx
import {
  PasswordValidationMessages
  usePasswordValidator,
} from "react-pwd-validator";

function App() {
  const password = "Test"
  const passwordValidationStatus = usePasswordValidator(password);
  
  return (
    <div>
      <PasswordValidationMessages
        passwordValidationStatus={passwordValidationStatus}
      />
    </div>
  )
}
```
![Example of password validation messages UI component](https://github.com/evanwechsler/React-Password-Validator/blob/master/documentation/images/messages.png "PasswordValidationMessages")

# Example of using everything together
```tsx
import React, { useState, useEffect } from "react";
import {
  PasswordInput,
  PasswordValidationMessages,
  usePasswordValidator,
} from "react-password-validator";

function App() {
  const [password, setPassword] = useState("");
  const [isFocused, toggleFocus] = useState(false);
  const passwordValidationStatus = usePasswordValidator(password);
  useEffect(() => {
    console.log(passwordValidationStatus.messages);
  }, [password]);
  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <PasswordInput
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => toggleFocus(true)}
          onBlur={() => toggleFocus(false)}
        />
        {(password.length > 0 || isFocused) && (
          <PasswordValidationMessages
            passwordValidationStatus={passwordValidationStatus}
          />
        )}
        {passwordValidationStatus.passwordValidation.validated ? (
          <div className="is-valid valid">Valid</div>
        ) : (
          <div className="is-valid invalid">Invalid</div>
        )}
      </div>
    </div>
  );
}
```
![Example usage of all functions of package used together](https://github.com/evanwechsler/React-Password-Validator/blob/master/documentation/images/example.gif "Example usage")

[PasswordValidator]: https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/validators/passwordValidator.ts
[PasswordInput]: https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/components/PasswordInput.tsx
[PasswordValidationMessages]: https://github.com/evanwechsler/React-Password-Validator/blob/master/password-validator-library/src/components/PasswordValidationMessages.tsx

