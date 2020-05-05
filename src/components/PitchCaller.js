import React, { useReducer } from "react";
import Controls from "./Controls";

const INCREMENT_BALLS = "increment balls";
const INCREMENT_STRIKES = "increment strikes";

const increment = (type, previousAmount) => {
  const max = type === "strikes" ? 3 : 4;
  const newAmount = previousAmount + 1;

  if (newAmount === max) {
    return 0;
  }

  return newAmount;
};

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_BALLS: {
      return { ...state, balls: increment("balls", state.balls) };
    }
    case INCREMENT_STRIKES:
      return { ...state, strikes: increment("strikes", state.strikes) };
    default:
      return state;
  }
};

const PitchCaller = () => {
  const [state, dispatch] = useReducer(reducer, { balls: 0, strikes: 0 });
  const { balls, strikes } = state;

  const handleBall = () => {
    dispatch({ type: INCREMENT_BALLS });
  };

  const handleStrike = () => {
    dispatch({ type: INCREMENT_STRIKES });
  };

  return (
    <div>
      <div>
        <h2>Balls:</h2>
        <span>{balls}</span>
      </div>
      <div>
        <h2>Strikes:</h2>
        <span>{strikes}</span>
      </div>
      <Controls onStrike={handleStrike} onBall={handleBall} />
    </div>
  );
};

export default PitchCaller;
