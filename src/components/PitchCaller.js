import React, { useReducer } from "react";
import PropTypes from "prop-types";

import Controls from "./Controls";

const INCREMENT_BALLS = "increment balls";
const INCREMENT_STRIKES = "increment strikes";
const RESET_COUNT = "reset count";

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
    case RESET_COUNT:
      return { balls: 0, strikes: 0 };
    default:
      return state;
  }
};

const PitchCaller = ({ initialBalls = 0, initialStrikes = 0 }) => {
  const initialCount = { balls: initialBalls, strikes: initialStrikes };
  const [state, dispatch] = useReducer(reducer, initialCount);
  const { balls, strikes } = state;

  const handleBall = () => {
    dispatch({ type: INCREMENT_BALLS });
  };

  const handleStrike = () => {
    dispatch({ type: INCREMENT_STRIKES });
  };

  const handleInPlay = () => {
    dispatch({ type: RESET_COUNT });
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
      <Controls
        onStrike={handleStrike}
        onBall={handleBall}
        onInPlay={handleInPlay}
      />
    </div>
  );
};

PitchCaller.propTypes = {
  initialBalls: PropTypes.number,
  initialStrikes: PropTypes.number,
};

export default PitchCaller;
