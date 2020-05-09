import React, { useReducer } from "react";
import Controls from "./components/Controls";
import Scoreboard from "./components/Scoreboard";

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
      const newBalls = increment("balls", state.balls);
      if (newBalls === 0) {
        return { ...state, balls: 0, strikes: 0 };
      }
      return { ...state, balls: increment("balls", state.balls) };
    }
    case INCREMENT_STRIKES:
      const newStrikes = increment("strikes", state.strikes);
      if (newStrikes === 0) {
        return { ...state, balls: 0, strikes: 0 };
      }
      return { ...state, strikes: increment("strikes", state.strikes) };
    case RESET_COUNT:
      return { balls: 0, strikes: 0 };
    default:
      return state;
  }
};

function App() {
  const initialCount = { balls: 0, strikes: 0 };
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
    <div className="App">
      <header className="App-header">
        <h1>Scorecard</h1>
      </header>
      <Scoreboard game={{ count: { balls, strikes } }} />
      <Controls
        onStrike={handleStrike}
        onBall={handleBall}
        onInPlay={handleInPlay}
      />
    </div>
  );
}

export default App;
