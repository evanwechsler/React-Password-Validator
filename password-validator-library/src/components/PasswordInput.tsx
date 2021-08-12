import React, { useState } from "react";
import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";
import "../styles/password.scss";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  eyeIcon?: JSX.Element;
  eyeSlashIcon?: JSX.Element;
}

export default function PasswordInput({
  onChange,
  eyeIcon,
  eyeSlashIcon,
  onFocus,
  onBlur,
  ...rest
}: Props) {
  const [hidden, setHidden] = useState(true);
  const inputType = hidden ? "password" : "text";
  return (
    <div className="password" onFocus={onFocus} onBlur={onBlur}>
      <input type={inputType} {...rest} onChange={onChange} />
      <div className="eye" onClick={() => setHidden(!hidden)}>
        {hidden ? eyeIcon ?? <Eye /> : eyeSlashIcon ?? <EyeSlash />}
      </div>
    </div>
  );
}
