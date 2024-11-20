
import { ACTIONS } from "./App";
import { logError } from "./errorUtils";

//changedCode

export default function DigitButton({ dispatch, digit }) {
  const handleClick = () => {
    try {
      dispatchDigit(dispatch, digit);
    } catch (error) {
      logError(error, "Error occurred while handling digit button click");
    }
  };

  return (
    <button onClick={handleClick}>
      {digit}
    </button>
  );
}

const dispatchDigit = (dispatch, digit) => {
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
};

