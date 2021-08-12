import React, { ReactElement } from "react";
import CheckCircle from "../icons/CheckCircle";
import TimesCircle from "../icons/TimesCircle";
import {
  PasswordMessages,
  PasswordValidation,
} from "../validators/passwordValidator";
import "../styles/passwordMessages.scss";

interface Props {
  passwordValidationStatus: {
    passwordValidation: PasswordValidation;
    messages: PasswordMessages;
  };
  validIcon?: JSX.Element;
  invalidIcon?: JSX.Element;
}

export default function PasswordValidationMessages({
  validIcon,
  invalidIcon,
  passwordValidationStatus,
}: Props): ReactElement {
  const {
    messages,
    passwordValidation: { passwordLevels },
  } = passwordValidationStatus;

  return (
    <div className="password-messages">
      {Object.keys(messages).map((key) => {
        const messageKey = key as keyof typeof messages;
        const validatedConditionKey = key as keyof typeof passwordLevels;
        const isValid = passwordLevels[validatedConditionKey];
        return (
          <div key={messageKey} className={isValid ? "valid" : "invalid"}>
            {isValid
              ? validIcon ?? <CheckCircle />
              : invalidIcon ?? <TimesCircle />}
            {messages[messageKey]}
          </div>
        );
      })}
    </div>
  );
}
