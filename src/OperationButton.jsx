
import React from "react";
import { useDispatch } from "react-redux";
import { chooseOperation } from "./actions";

//ChangedCode
// Component responsible for rendering an operation button
const OperationButton = ({ operation }) => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle button click
  const handleClick = () => {
    // Call the dispatchOperation function with the current operation
    dispatchOperation(operation);
  };

  // Function to dispatch the operation with improved error handling and logging
  const dispatchOperation = (operation) => {
    try {
      // Dispatch the action to choose the operation
      dispatch(chooseOperation(operation));
      // Log success message if dispatch is successful
      logDispatchSuccess(operation);
    } catch (error) {
      // Log error message if an error occurs during dispatch
      logDispatchError(error, operation);
    }
  };

  // Function to log successful dispatch
  const logDispatchSuccess = (operation) => {
    console.log("Dispatch successful:", operation);
  };

  // Function to log errors during dispatch
  const logDispatchError = (error, operation) => {
    console.error("Error occurred during dispatch for operation:", operation, "Error:", error);
  };

  // Render the button with the operation as text
  return (
    <button onClick={handleClick}>
      {operation}
    </button>
  );
};

export default OperationButton;



