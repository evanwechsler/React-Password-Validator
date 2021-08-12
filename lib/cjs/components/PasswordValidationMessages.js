"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckCircle_1 = __importDefault(require("../icons/CheckCircle"));
var TimesCircle_1 = __importDefault(require("../icons/TimesCircle"));
function PasswordValidationMessages(_a) {
    var messages = _a.messages, validated = _a.validated, validIcon = _a.validIcon, invalidIcon = _a.invalidIcon;
    return (react_1.default.createElement("div", { className: "password-messages" }, Object.keys(messages).map(function (key) {
        var messageKey = key;
        var validatedKey = key;
        var isValid = validated[validatedKey];
        return (react_1.default.createElement("div", { key: messageKey, className: isValid ? "valid" : "invalid" },
            isValid
                ? validIcon !== null && validIcon !== void 0 ? validIcon : react_1.default.createElement(CheckCircle_1.default, null)
                : invalidIcon !== null && invalidIcon !== void 0 ? invalidIcon : react_1.default.createElement(TimesCircle_1.default, null),
            messages[messageKey]));
    })));
}
exports.default = PasswordValidationMessages;
