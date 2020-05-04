import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

it("has a control to increment balls", () => {
  const BALL_CONTROL_TEXT = /ball/i;
  const { getByText } = render(<Controls />);

  expect(getByText(BALL_CONTROL_TEXT)).toBeInTheDocument();
});

it("has a control to increment strikes", () => {
  const STRIKE_CONTROL_TEXT = /strike/i;
  const { getByText } = render(<Controls />);
  expect(getByText(STRIKE_CONTROL_TEXT)).toBeInTheDocument();
});
