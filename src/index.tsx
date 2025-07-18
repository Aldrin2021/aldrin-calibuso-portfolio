import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Auth0Provider
    domain={"dev-yye2wtotte6lccsk.us.auth0.com"}
    clientId={"itDifK18gEWrs8r5frwsx4XXakm81gNi"}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
