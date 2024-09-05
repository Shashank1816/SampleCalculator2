
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Function to render the app
const renderApp = () => {
  try {
    // Render the app inside a React.StrictMode component
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement
    );
  } catch (error) {
    // If an error occurs during rendering, handle it
    handleRenderError(error);
  }
};

// Function to handle rendering errors
const handleRenderError = (error) => {
  console.error("An error occurred while rendering the app:", error);
};

// Add an event listener for global errors
window.addEventListener("error", handleRenderError);

// Call the renderApp function to start rendering the app
renderApp();

