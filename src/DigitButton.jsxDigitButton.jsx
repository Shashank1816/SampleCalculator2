import React from "react";
import { useDispatch } from "react-redux";
import { chooseOperation } from "./actions";

export default function OperationButton({ operation }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatchOperation();
  };

  const dispatchOperation = () => {
    try {
      dispatch(chooseOperation(operation));
      console.log("Dispatch successful:", operation);
    } catch (error) {
      console.error("Error occurred during dispatch:", error);
    }
  };

  return (
// new feature testing
    <button onClick={handleClick}>
      {operation}
    </button>
  );
}