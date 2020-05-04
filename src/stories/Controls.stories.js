import React from "react";
import { action } from "@storybook/addon-actions";
import Controls from "../components/Controls";

export default {
  title: "Controls",
  component: Controls,
};

export const DefaultControls = () => (
  <Controls
    onStrike={action("incremented strikes")}
    onBall={action("incremeted balls")}
  />
);
