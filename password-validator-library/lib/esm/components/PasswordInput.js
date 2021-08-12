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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";
import "../styles/password.scss";
export default function PasswordInput(_a) {
    var onChange = _a.onChange, eyeIcon = _a.eyeIcon, eyeSlashIcon = _a.eyeSlashIcon, rest = __rest(_a, ["onChange", "eyeIcon", "eyeSlashIcon"]);
    var _b = useState(true), hidden = _b[0], setHidden = _b[1];
    var inputType = hidden ? "password" : "text";
    return (React.createElement("div", { className: "password" },
        React.createElement("input", __assign({ type: inputType }, rest, { onChange: onChange })),
        React.createElement("div", { className: "eye", onClick: function () { return setHidden(!hidden); } }, hidden ? eyeIcon !== null && eyeIcon !== void 0 ? eyeIcon : React.createElement(Eye, null) : eyeSlashIcon !== null && eyeSlashIcon !== void 0 ? eyeSlashIcon : React.createElement(EyeSlash, null))));
}
