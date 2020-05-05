import React from "react";
import { render } from "@testing-library/react";
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

it.todo("increments strikes");

it.todo("increments balls");

it.todo("resets count when after ball 4");

it.todo("resets count after strike 3");
