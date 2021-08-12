export interface PasswordLevels {
    length?: boolean;
    lowercaseLetters?: boolean;
    uppercaseLetters?: boolean;
    digits?: boolean;
    specialCharacters?: boolean;
}
export interface PasswordValidation {
    validated: boolean;
    passwordLevels: PasswordLevels;
}
export interface PasswordMessages {
    length?: string;
    lowercaseLetters?: string;
    uppercaseLetters?: string;
    digits?: string;
    specialCharacters?: string;
}
export declare type PasswordLevelKeys = keyof PasswordLevels;
/**
 * Six levels of password strength are available:
 * 0 - No restrictions
 * 1 - Password must meet length requirements
 * 2 - Password must contain at least one lowercase letter
 * 3 - Password must contain at least one uppercase letter
 * 4 - Password must contain at least on digit
 * 5 - Password must contain at least on special character
 */
export declare class PasswordValidator {
    strengthLevel: number;
    minLength: number;
    maxLength: number;
    /**
     * @param  {number=5} strengthLevel
     * @param  {number=8} minLength
     * @param  {number=64} maxLength
     *
     * Default minimum and maximum lengths are based off of OWASP recommendations
     * Default password strength is set to 5, the highest setting
     * https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls
     */
    constructor(strengthLevel?: number, minLength?: number, maxLength?: number);
    validatePassword(password: string): PasswordValidation;
    getMessages(): PasswordMessages;
}
