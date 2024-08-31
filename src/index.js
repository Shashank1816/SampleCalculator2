import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Render the App component inside the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// The code above follows best practices for rendering a React app.
// It imports the necessary dependencies, sets up the root element,
// and renders the App component inside a React.StrictMode wrapper.
// The StrictMode helps catch potential problems and enforces best practices
// during development.