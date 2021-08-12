import React from "react";
import CheckCircle from "../icons/CheckCircle";
import TimesCircle from "../icons/TimesCircle";
export default function PasswordValidationMessages(_a) {
    var messages = _a.messages, validated = _a.validated, validIcon = _a.validIcon, invalidIcon = _a.invalidIcon;
    return (React.createElement("div", { className: "password-messages" }, Object.keys(messages).map(function (key) {
        var messageKey = key;
        var validatedKey = key;
        var isValid = validated[validatedKey];
        return (React.createElement("div", { key: messageKey, className: isValid ? "valid" : "invalid" },
            isValid
                ? validIcon !== null && validIcon !== void 0 ? validIcon : React.createElement(CheckCircle, null)
                : invalidIcon !== null && invalidIcon !== void 0 ? invalidIcon : React.createElement(TimesCircle, null),
            messages[messageKey]));
    })));
}
