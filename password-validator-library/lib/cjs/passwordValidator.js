"use strict";
// Type declarations
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValidator = void 0;
/**
 * Six levels of password strength are available:
 * 0 - No restrictions
 * 1 - Password must meet length requirements
 * 2 - Password must contain at least one lowercase letter
 * 3 - Password must contain at least one uppercase letter
 * 4 - Password must contain at least on digit
 * 5 - Password must contain at least on special character
 */
var PasswordValidator = /** @class */ (function () {
    /**
     * @param  {number=5} strengthLevel
     * @param  {number=8} minLength
     * @param  {number=64} maxLength
     *
     * Default minimum and maximum lengths are based off of OWASP recommendations
     * Default password strength is set to 5, the highest setting
     * https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls
     */
    function PasswordValidator(strengthLevel, minLength, maxLength) {
        if (strengthLevel === void 0) { strengthLevel = 5; }
        if (minLength === void 0) { minLength = 8; }
        if (maxLength === void 0) { maxLength = 64; }
        if (!Number.isInteger(strengthLevel) ||
            strengthLevel < 0 ||
            strengthLevel > 5) {
            throw new Error("The strength level must be an integer between 1 and 5");
        }
        else if (!Number.isInteger(minLength) || minLength < 1) {
            throw new Error("The minimum length must be an integer value greater than 1");
        }
        else if (!Number.isInteger(maxLength) || maxLength <= minLength) {
            throw new Error("The maximum length must be an integer value greater than the minimum length");
        }
        this.strengthLevel = strengthLevel;
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
    PasswordValidator.prototype.validatePassword = function (password) {
        var passwordValidation = {
            validated: true,
            passwordLevels: {},
        };
        // Validate password based on strength requirements
        if (password.length > this.maxLength) {
            throw new Error("The password entered was too long. Please keep it under " + this.maxLength + " characters.");
        }
        if (this.strengthLevel > 0 && password.length > this.minLength) {
            passwordValidation.passwordLevels.length = true;
        }
        var lowercaseLettersRegex = /(?=.*[a-z])/;
        if (this.strengthLevel > 1 && lowercaseLettersRegex.test(password)) {
            passwordValidation.passwordLevels.lowercaseLetters = true;
        }
        var uppercaseLettersRegex = /(?=.*[A-Z])/;
        if (this.strengthLevel > 2 && uppercaseLettersRegex.test(password)) {
            passwordValidation.passwordLevels.uppercaseLetters = true;
        }
        var digitsRegex = /(?=.*\d)/;
        if (this.strengthLevel > 3 && digitsRegex.test(password)) {
            passwordValidation.passwordLevels.digits = true;
        }
        var specialCharactersRegex = /(?=.*\W)/;
        if (this.strengthLevel > 4 && specialCharactersRegex.test(password)) {
            passwordValidation.passwordLevels.specialCharacters = true;
        }
        // Check if password meets strength requirements
        var restriction;
        for (restriction in passwordValidation.passwordLevels) {
            if (!passwordValidation.passwordLevels[restriction]) {
                passwordValidation.validated = false;
                break;
            }
        }
        return passwordValidation;
    };
    PasswordValidator.prototype.getMessages = function () {
        var messages = {};
        for (var level = 0; level <= this.strengthLevel; level++) {
            switch (level) {
                case 1:
                    messages.length = "Must be at least " + this.minLength + " characters long";
                    break;
                case 2:
                    messages.lowercaseLetters =
                        "Must contain at least 1 lowercase letter";
                    break;
                case 3:
                    messages.uppercaseLetters =
                        "Must contain at least 1 uppercase letter";
                    break;
                case 4:
                    messages.digits = "Must contain at least 1 digit";
                    break;
                case 5:
                    messages.specialCharacters = "Must contain at least 1 symbol";
                    break;
            }
        }
        return messages;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
