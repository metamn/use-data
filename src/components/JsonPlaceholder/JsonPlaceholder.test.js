import React from "react";
import { render } from "@testing-library/react";
import JsonPlaceholder from "./JsonPlaceholder";

it("has a JsonPlaceholder component", () => {
  const { getByText } = render(<JsonPlaceholder />);
  expect(getByText("JsonPlaceholder")).toBeInTheDocument();
});
