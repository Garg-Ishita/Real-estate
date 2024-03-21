import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8kbnuzrpauiob85g.us.auth0.com"
      clientId="SZu6GJRg842MNAUP3f4dTAL1r4VNMpNe"
      authorizationParams={{
        redirect_uri: "http://127.0.0.1:5173/",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);