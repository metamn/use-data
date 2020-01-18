import React from "react";
import { render } from "@testing-library/react";
import Props from "./Props";

it("has a Props component", () => {
  const { getByText } = render(<Props />);
  expect(getByText("Props")).toBeInTheDocument();
});
