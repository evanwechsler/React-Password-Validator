import React, { useState } from "react";
import {
  PasswordInput,
  PasswordValidationMessages,
  usePasswordValidator,
} from "react-password-validator";

function App() {
  const [password, setPassword] = useState("");
  const [isFocused, toggleFocus] = useState(false);
  const passwordValidationStatus = usePasswordValidator(password);
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
        {isFocused && (
          <PasswordValidationMessages
            passwordValidationStatus={passwordValidationStatus}
          />
        )}
        {passwordValidationStatus.passwordValidation.validated ? (
          <h3 style={{ color: "#00e582" }}>Valid</h3>
        ) : (
          <h3 style={{ color: "#ff0a80" }}>Invalid</h3>
        )}
      </div>
    </div>
  );
}

export default App;
