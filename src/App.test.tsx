import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders heading element", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/The Spectator events list/);

  expect(headingElement).toBeInTheDocument();
});
