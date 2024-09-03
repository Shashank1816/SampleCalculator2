import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Function to render the app
const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

// Function to handle rendering errors
const handleRenderError = (error) => {
  console.error("An error occurred while rendering the app:", error);
};

// Add an event listener for errors during rendering
window.addEventListener("error", handleRenderError);

// Render the app
renderApp();