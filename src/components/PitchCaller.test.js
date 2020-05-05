import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PitchCaller from "./PitchCaller";

it("renders", () => {
  render(<PitchCaller />);
});

it("shows the current number of balls", () => {
  const { getByRole } = render(<PitchCaller />);

  const heading = getByRole("heading", { name: /^balls/i });
  const total = heading.nextSibling;

  expect(heading).toBeInTheDocument();
  expect(total).toHaveTextContent("0");
});

it("shows the current number of strikes", () => {
  const { getByRole } = render(<PitchCaller />);

  const heading = getByRole("heading", { name: /^strikes/i });
  const total = heading.nextSibling;

  expect(heading).toBeInTheDocument();
  expect(total).toHaveTextContent("0");
});

it("increments strikes", () => {
  const { getByRole } = render(<PitchCaller />);
  const button = getByRole("button", { name: /strike/i });
  const total = getByRole("heading", { name: /^strikes/i }).nextSibling;

  fireEvent.click(button);

  expect(total).toHaveTextContent("1");
});

it("increments balls", () => {
  const { getByRole } = render(<PitchCaller />);
  const button = getByRole("button", { name: /ball/i });
  const total = getByRole("heading", { name: /^balls/i }).nextSibling;

  fireEvent.click(button);

  expect(total).toHaveTextContent("1");
});

it("resets count when after ball 4", () => {
  const { getByRole } = render(<PitchCaller initialBalls={3} />);
  const button = getByRole("button", { name: /ball/i });
  const total = getByRole("heading", { name: /^balls/i }).nextSibling;

  // ball four
  fireEvent.click(button);

  // should reset counter
  expect(total).toHaveTextContent("0");
});

it("resets count after strike 3", () => {
  const { getByRole } = render(<PitchCaller initialStrikes={2} />);
  const button = getByRole("button", { name: /strike/i });
  const total = getByRole("heading", { name: /^strikes/i }).nextSibling;

  //strike three
  fireEvent.click(button);

  // should reset counter
  expect(total).toHaveTextContent("0");
});

it("resets count when a ball is in play", () => {
  const { getByRole } = render(
    <PitchCaller initialBalls={3} initialStrikes={2} />
  );

  const inPlayButton = getByRole("button", { name: /in play/i });
  const strikeTotal = getByRole("heading", { name: /^strikes/i }).nextSibling;
  const ballTotal = getByRole("heading", { name: /^balls/i }).nextSibling;

  // ball in play
  fireEvent.click(inPlayButton);

  // should reset counter
  expect(ballTotal).toHaveTextContent("0");
  expect(strikeTotal).toHaveTextContent("0");
});
