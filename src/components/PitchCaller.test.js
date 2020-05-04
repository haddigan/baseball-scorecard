import React from "react";
import { render } from "@testing-library/react";
import PitchCaller from "./PitchCaller";

it("renders", () => {
  render(<PitchCaller />);
});

it.todo("shows the current number of balls");

it.todo("shows the current number of strikes");

it.todo("increments strikes");

it.todo("increments balls");

it.todo("resets count when after ball 4");

it.todo("resets count after strike 3");
