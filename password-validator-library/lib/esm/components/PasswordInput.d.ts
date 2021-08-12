import React from "react";
import "../styles/password.scss";
interface Props extends React.HTMLProps<HTMLInputElement> {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    eyeIcon?: JSX.Element;
    eyeSlashIcon?: JSX.Element;
}
export default function PasswordInput({ onChange, eyeIcon, eyeSlashIcon, ...rest }: Props): JSX.Element;
export {};
