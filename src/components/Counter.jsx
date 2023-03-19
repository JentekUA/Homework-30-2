import Button from "./Button";
import { useReducer } from "react";

export default function Counter() {
  const initialState = {
    count: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increase":
        return { count: state.count + 1 };
      case "decrease":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function increaseHandle() {
    dispatch({ type: "increase" });
  }

  function decreaseHandle() {
    dispatch({ type: "decrease" });
  }

  return (
    <div>
      <p>{state.count}</p>

      <Button onClick={increaseHandle}>Increase</Button>
      <Button onClick={decreaseHandle}>Decrease</Button>
    </div>
  );
}
