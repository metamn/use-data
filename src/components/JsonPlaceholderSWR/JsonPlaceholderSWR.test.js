import React from "react";
import { render } from "@testing-library/react";
import JsonPlaceholderSWR from "./JsonPlaceholderSWR";

it("has a JsonPlaceholderSWR component", () => {
  const { getByText } = render(<JsonPlaceholderSWR />);
  expect(getByText("JsonPlaceholderSWR")).toBeInTheDocument();
});
