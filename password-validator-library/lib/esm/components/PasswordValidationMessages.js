import React from "react";
import CheckCircle from "../icons/CheckCircle";
import TimesCircle from "../icons/TimesCircle";
import "../styles/passwordMessages.scss";
export default function PasswordValidationMessages(_a) {
    var validIcon = _a.validIcon, invalidIcon = _a.invalidIcon, passwordValidationStatus = _a.passwordValidationStatus;
    var messages = passwordValidationStatus.messages, passwordLevels = passwordValidationStatus.passwordValidation.passwordLevels;
    return (React.createElement("div", { className: "password-messages" }, Object.keys(messages).map(function (key) {
        var messageKey = key;
        var validatedConditionKey = key;
        var isValid = passwordLevels[validatedConditionKey];
        return (React.createElement("div", { key: messageKey, className: isValid ? "valid" : "invalid" },
            isValid
                ? validIcon !== null && validIcon !== void 0 ? validIcon : React.createElement(CheckCircle, null)
                : invalidIcon !== null && invalidIcon !== void 0 ? invalidIcon : React.createElement(TimesCircle, null),
            messages[messageKey]));
    })));
}
