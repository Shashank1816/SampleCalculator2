
import { ACTIONS } from "./App";
import { dispatchAction } from "./actionUtils";

export default function DigitButton({ dispatch, digit }) {
  const handleClick = () => {
    dispatchAction(dispatch, digit);
  };

  return (
    <button onClick={handleClick}>
      {digit}
    </button>
  );
}


export const dispatchAction = (dispatch, digit) => {
  try {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  } catch (error) {
    console.error("Error occurred while dispatching action:", error);
  }
};

