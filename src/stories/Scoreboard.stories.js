import React from "react";
import Scoreboard from "../components/Scoreboard";

export default {
  title: "Scoreboard",
  component: Scoreboard,
};

export const ScoreboardComponent = () => {
  const game = { count: { balls: 3, strikes: 2 } };

  return <Scoreboard game={game} />;
};
