import { useEffect, useState } from "react";
import { PasswordValidator } from "..";
import {
  PasswordMessages,
  PasswordValidation,
} from "../validators/passwordValidator";

export default function usePasswordValidator(
  password: string,
  passwordStrength?: number
) {
  const passwordValidator = new PasswordValidator(passwordStrength);
  const messages = passwordValidator.getMessages();
  const [passwordValidationStatus, setPasswordValidationStatus] = useState<{
    passwordValidation: PasswordValidation;
    messages: PasswordMessages;
  }>({
    passwordValidation: { validated: false, passwordLevels: {} },
    messages,
  });

  useEffect(() => {
    const passwordValidation = passwordValidator.validatePassword(password);
    setPasswordValidationStatus({
      ...passwordValidationStatus,
      passwordValidation,
    });
  }, [password]);

  return passwordValidationStatus;
}
