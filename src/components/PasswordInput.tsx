import React, { useState } from "react";
import Eye from "../icons/Eye";
import EyeSlash from "../icons/EyeSlash";

interface Props extends React.HTMLProps<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  eyeIcon?: JSX.Element;
  eyeSlashIcon?: JSX.Element;
}

export default function PasswordInput({
  onChange,
  eyeIcon,
  eyeSlashIcon,
  ...rest
}: Props) {
  const [hidden, setHidden] = useState(true);
  const inputType = hidden ? "password" : "text";

  return (
    <div className="password">
      <input type={inputType} {...rest} onChange={onChange} />
      <div className="eye" onClick={() => setHidden(!hidden)}>
        {hidden ? eyeIcon ?? <Eye /> : eyeSlashIcon ?? <EyeSlash />}
      </div>
    </div>
  );
}
