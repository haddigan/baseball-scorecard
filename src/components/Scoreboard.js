import React from "react";
import PropTypes from "prop-types";

const Scoreboard = ({ game = {} }) => {
  const { count = {} } = game;
  const { balls: numBalls = 0, strikes: numStrikes = 0 } = count;

  const strikes = Array(numStrikes).fill("X");
  const balls = Array(numBalls).fill("X");

  return (
    <div>
      <div className="Balls">
        <h3 className="label">Balls:</h3>
        <div className="value">{balls.concat(" ")}</div>
      </div>
      <div className="Strikes">
        <h3 className="label">Strikes:</h3>
        <div className="value">{strikes.concat(" ")}</div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  game: PropTypes.object,
};

export default Scoreboard;
