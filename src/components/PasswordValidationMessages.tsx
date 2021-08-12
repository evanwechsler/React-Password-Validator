import React, { ReactElement } from "react";
import CheckCircle from "../icons/CheckCircle";
import TimesCircle from "../icons/TimesCircle";
import { PasswordLevels, PasswordMessages } from "../passwordValidator";

interface Props {
  messages: PasswordMessages;
  validated: PasswordLevels;
  validIcon?: JSX.Element;
  invalidIcon?: JSX.Element;
}

export default function PasswordValidationMessages({
  messages,
  validated,
  validIcon,
  invalidIcon,
}: Props): ReactElement {
  return (
    <div className="password-messages">
      {Object.keys(messages).map((key) => {
        const messageKey = key as keyof typeof messages;
        const validatedKey = key as keyof typeof validated;
        const isValid = validated[validatedKey];
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
