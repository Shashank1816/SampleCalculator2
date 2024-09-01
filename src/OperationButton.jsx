import { ACTIONS } from "./App";

export default function OperationButton({ dispatch, operation }) {
  const handleClick = () => {
    dispatchOperation();
  };

  const dispatchOperation = () => {
    try {
      dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
      console.log("Dispatch successful:", operation);
    } catch (error) {
      console.error("Error occurred during dispatch:", error);
    }
  };

  return (
// hello m kaam kar rha hu ...
    <button onClick={handleClick}>
      {operation}
    </button>
  );
}