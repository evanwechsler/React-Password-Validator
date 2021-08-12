import { ReactElement } from "react";
import { PasswordLevels, PasswordMessages } from "../passwordValidator";
interface Props {
    messages: PasswordMessages;
    validated: PasswordLevels;
    validIcon?: JSX.Element;
    invalidIcon?: JSX.Element;
}
export default function PasswordValidationMessages({ messages, validated, validIcon, invalidIcon, }: Props): ReactElement;
export {};
