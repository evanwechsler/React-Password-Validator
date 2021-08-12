"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var __1 = require("..");
function usePasswordValidator(password, passwordStrength) {
    if (passwordStrength === void 0) { passwordStrength = 5; }
    var passwordValidator = new __1.PasswordValidator(passwordStrength);
    var messages = passwordValidator.getMessages();
    var _a = react_1.useState({
        passwordValidation: { validated: false, passwordLevels: {} },
        messages: messages,
    }), passwordValidationStatus = _a[0], setPasswordValidationStatus = _a[1];
    react_1.useEffect(function () {
        var passwordValidation = passwordValidator.validatePassword(password);
        setPasswordValidationStatus(__assign(__assign({}, passwordValidationStatus), { passwordValidation: passwordValidation }));
        console.log(passwordValidation);
    }, [password]);
    return passwordValidationStatus;
}
exports.default = usePasswordValidator;
