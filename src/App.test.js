import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders default page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/scorecard/i);
  expect(linkElement).toBeInTheDocument();
});

test("Controls component updates scoreboard", () => {
  const { getByRole, getAllByRole } = render(<App />);
  const strikesButton = getByRole("button", { name: /^strike/i });
  const [strikesHeading] = getAllByRole("heading", { name: /^strikes/i });
  const strikesDisplay = strikesHeading.nextSibling;

  fireEvent.click(strikesButton);

  expect(strikesDisplay).toHaveTextContent("X");
});
