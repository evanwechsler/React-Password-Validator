import { ReactElement } from "react";
import { PasswordMessages, PasswordValidation } from "../validators/passwordValidator";
interface Props {
    passwordValidationStatus: {
        passwordValidation: PasswordValidation;
        messages: PasswordMessages;
    };
    validIcon?: JSX.Element;
    invalidIcon?: JSX.Element;
}
export default function PasswordValidationMessages({ validIcon, invalidIcon, passwordValidationStatus, }: Props): ReactElement;
export {};
