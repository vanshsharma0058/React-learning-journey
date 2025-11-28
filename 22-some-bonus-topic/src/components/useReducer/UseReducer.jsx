import React from "react";
import "./useReducer.css";
import { useReducer } from "react";
const UseReducer = () => {
  const initialstate = {
    count: 0,
  };
  const reducer = (state, action) => {
    // if (action.type === "INCREMENT") {
    //   return state + 1;
    // } else if (action.type === "DECREMENT") {
    //   return state - 1;
    // } else {
    //   return 0;
    // }

    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      default:
        return { count: 0 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="counter">
      <h1>Counter project</h1>
      <div className="count">{state.count}</div>
      <div className="btn">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducer;
