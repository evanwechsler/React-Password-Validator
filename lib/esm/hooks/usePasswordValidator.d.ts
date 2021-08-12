import { PasswordMessages, PasswordValidation } from "../validators/passwordValidator";
export default function usePasswordValidator(password: string, passwordStrength?: number): {
    passwordValidation: PasswordValidation;
    messages: PasswordMessages;
};
