import React from "react";
import ReactDOM from "react-dom";

// Provider
import AuthProvider from "./providers/Auth/Auth.provider";
import UserProvider from "./providers/DataUser/DataUser.provider";

import App from "./components/App";
import "./global.css";

ReactDOM.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById("root")
);
