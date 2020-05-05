import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Controls from "./Controls";

const BALL_CONTROL_TEXT = /ball/i;
const STRIKE_CONTROL_TEXT = /strike/i;
const IN_PLAY_CONTROL_TEXT = /in play/i;

it("has a control to increment balls", () => {
  const { getByText } = render(<Controls />);

  expect(getByText(BALL_CONTROL_TEXT)).toBeInTheDocument();
});

it("has a control to increment strikes", () => {
  const { getByText } = render(<Controls />);

  expect(getByText(STRIKE_CONTROL_TEXT)).toBeInTheDocument();
});

it("can increment balls", () => {
  const handleBall = jest.fn();
  render(<Controls onBall={handleBall} />);

  fireEvent.click(screen.getByText(BALL_CONTROL_TEXT));

  expect(handleBall).toBeCalledTimes(1);
});

it("can increment strikes", () => {
  const handleStrike = jest.fn();
  render(<Controls onStrike={handleStrike} />);

  fireEvent.click(screen.getByText(STRIKE_CONTROL_TEXT));

  expect(handleStrike).toBeCalledTimes(1);
});

it("handles a ball in play", () => {
  const handleInPlay = jest.fn();
  const { getByText } = render(<Controls onInPlay={handleInPlay} />);

  fireEvent.click(getByText(IN_PLAY_CONTROL_TEXT));

  expect(handleInPlay).toBeCalledTimes(1);
});
