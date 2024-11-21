
import React from "react";
import { useDispatch } from "react-redux";
import { chooseOperation } from "./actions";

const OperationButton = ({ operation }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatchOperation(operation);
  };

  const dispatchOperation = (operation) => {
    try {
      dispatch(chooseOperation(operation));
      logDispatch("success", operation);
    } catch (error) {
      logDispatch("error", operation, error);
    }
  };

  const logDispatch = (status, operation, error = null) => {
    if (status === "success") {
      console.log("Dispatch successful:", operation);
    } else {
      console.error("Error occurred during dispatch for operation:", operation, "Error:", error);
    }
  };

  return (
    <button onClick={handleClick}>
      {operation}
    </button>
  );
};

export default OperationButton;
.