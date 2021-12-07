import React, { useState } from "react";

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button, ErrorMessage, Section } from "./Login.styles";

// Providers
import { useAuth } from "../../../providers/Auth/Auth.provider";

function Login() {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
  };
  return (
    <Section>
      {error && (
        <ErrorMessage className="error-msg">
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="1x"
            style={{ color: "red" }}
            title="error-message"
          />
          {error}
        </ErrorMessage>
      )}
      <div className="form-group">
        <label htmlFor="email">
          <strong>Email </strong>
          <input
            required
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          <strong>Password </strong>
          <input
            required
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <Button
        type="button"
        onClick={handleLogin}
        color="primary"
        disabled={loading}
      >
        {loading ? "Login in..." : "Login"}
      </Button>
    </Section>
  );
}

export default Login;
