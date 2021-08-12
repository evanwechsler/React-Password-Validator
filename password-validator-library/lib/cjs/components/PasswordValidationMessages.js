"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckCircle_1 = __importDefault(require("../icons/CheckCircle"));
var TimesCircle_1 = __importDefault(require("../icons/TimesCircle"));
require("../styles/passwordMessages.scss");
function PasswordValidationMessages(_a) {
    var validIcon = _a.validIcon, invalidIcon = _a.invalidIcon, passwordValidationStatus = _a.passwordValidationStatus;
    var messages = passwordValidationStatus.messages, passwordLevels = passwordValidationStatus.passwordValidation.passwordLevels;
    return (react_1.default.createElement("div", { className: "password-messages" }, Object.keys(messages).map(function (key) {
        var messageKey = key;
        var validatedConditionKey = key;
        var isValid = passwordLevels[validatedConditionKey];
        return (react_1.default.createElement("div", { key: messageKey, className: isValid ? "valid" : "invalid" },
            isValid
                ? validIcon !== null && validIcon !== void 0 ? validIcon : react_1.default.createElement(CheckCircle_1.default, null)
                : invalidIcon !== null && invalidIcon !== void 0 ? invalidIcon : react_1.default.createElement(TimesCircle_1.default, null),
            messages[messageKey]));
    })));
}
exports.default = PasswordValidationMessages;