
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Function to render the React app
const renderApp = () => {
  try {
    ReactDOM.render(
      // Enable strict mode for enhanced error detection
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement
    );
  } catch (error) {
    handleRenderError(error);
  }
};

// Function to handle rendering errors
const handleRenderError = (error) => {
  console.error("An error occurred while rendering the app:", error);
};

// Add an event listener to handle global errors
window.addEventListener("error", handleRenderError);

// Call the renderApp function to render the app
renderApp();

