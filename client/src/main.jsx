import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-tjelntudww1u0120.us.auth0.com"
     clientId="gPfqiDCnVeZmtFB9OyX90f2OSx4BTbyx"
     authorizationParams={{
      redirect_uri: "https://real-estate1-jmxy-hcwc2jzwl-prabhats-projects-c51b480a.vercel.app/"
     }}
     audience="https://full-stack-real-estate-youtube.vercel.app/api"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
