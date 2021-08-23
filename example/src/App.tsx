import React, { useState, useEffect } from "react";
import {
  PasswordInput,
  PasswordValidationMessages,
  usePasswordValidator,
} from "react-password-validator";

function App() {
  const [password, setPassword] = useState("");
  const [isFocused, toggleFocus] = useState(false);
  const passwordValidationStatus = usePasswordValidator(password);
  useEffect(() => {
    console.log(passwordValidationStatus.messages);
  }, [password]);
  return (
    <div className="App" style={{ display: "grid", placeItems: "center" }}>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <PasswordInput
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => toggleFocus(true)}
          onBlur={() => toggleFocus(false)}
        />
        {(password.length > 0 || isFocused) && (
          <PasswordValidationMessages
            passwordValidationStatus={passwordValidationStatus}
          />
        )}
        {passwordValidationStatus.passwordValidation.validated ? (
          <div className="is-valid valid">Valid</div>
        ) : (
          <div className="is-valid invalid">Invalid</div>
        )}
      </div>
    </div>
  );
}

export default App;
