import React from "react";
import PropTypes from "prop-types";
import styles from "./Scoreboard.module.css";

const Scoreboard = ({ game = {} }) => {
  const { count = {} } = game;
  const { balls: numBalls = 0, strikes: numStrikes = 0 } = count;

  const strikes = Array(numStrikes).fill("X");
  const balls = Array(numBalls).fill("X");

  return (
    <div className={styles.count}>
      <div className={styles.totals}>
        <h3 className={styles.label}>Balls:</h3>
        <div className={styles.value}>{balls.concat(" ")}</div>
      </div>
      <div className={styles.totals}>
        <h3 className={styles.label}>Strikes:</h3>
        <div className={styles.value}>{strikes.concat(" ")}</div>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  game: PropTypes.object,
};

export default Scoreboard;
