import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

const handleRenderError = (error) => {
  console.error("An error occurred while rendering the app:", error);
};

window.addEventListener("error", handleRenderError);

renderApp();