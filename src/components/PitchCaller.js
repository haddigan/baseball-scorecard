import React, { useState } from "react";
import Controls from "./Controls";

const PitchCaller = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const handleBall = () => {
    setBalls((prevBalls) => {
      if (prevBalls < 3) {
        return prevBalls + 1;
      }
      return 0;
    });
  };

  const handleStrike = () => {
    setStrikes((prevStrikes) => {
      if (prevStrikes < 2) {
        return prevStrikes + 1;
      }
      return 0;
    });
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
