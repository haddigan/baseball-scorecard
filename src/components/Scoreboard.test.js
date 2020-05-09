import React from "react";
import Scoreboard from "./Scoreboard";
import { render } from "@testing-library/react";

it("renders", () => {
  render(<Scoreboard />);
});

it("Shows the current count", () => {
  const count = { balls: 3, strikes: 2 };
  const { getByRole } = render(<Scoreboard game={{ count }} />);
  const strikes = getByRole("heading", { name: /^strikes/i }).nextSibling;
  const balls = getByRole("heading", { name: /^balls/i }).nextSibling;

  expect(strikes.textContent.trim()).toMatch(/XX/);
  expect(balls.textContent.trim()).toMatch(/XXX/);
});
