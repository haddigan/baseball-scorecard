import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders default page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/scorecard/i);
  expect(linkElement).toBeInTheDocument();
});
