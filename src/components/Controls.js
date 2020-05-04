import React from "react";
import PropTypes from "prop-types";

const Controls = ({ onStrike, onBall }) => {
  return (
    <div>
      <button onClick={onBall}>Ball</button>
      <button onClick={onStrike}>Strike</button>
    </div>
  );
};

Controls.propTypes = {
  onStrike: PropTypes.func,
  onBall: PropTypes.func,
};

export default Controls;
