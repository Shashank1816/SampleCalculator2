import React from "react";
import { useDispatch } from "react-redux";
import { chooseOperation } from "./actions";

const OperationButton = ({ operation }) => {
  const dispatch = useDispatch();

  // Function to handle button click
  const handleClick = () => {
    dispatchOperation();
  };

  // Function to dispatch the operation
  const dispatchOperation = () => {
    try {
      dispatch(chooseOperation(operation));
      console.log("Dispatch successful:", operation);
    } catch (error) {
      console.error("Error occurred during dispatch:", error);
    }
  };

  // Render the button with the operation as text
  return (
    <button onClick={handleClick}>
      {operation}
    </button>
  );
};

export default OperationButton;