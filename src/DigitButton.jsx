import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
  const handleClick = () => {
    dispatchAction();
  };

  const dispatchAction = () => {
    try {
      dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
    } catch (error) {
      console.error("Error occurred while dispatching action:", error);
    }
  };

  return (
    <button onClick={handleClick}>
      {digit}
    </button>
  );
}