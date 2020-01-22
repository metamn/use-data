import React from "react";
import { render } from "@testing-library/react";
import Async from "./Async";

it("has a Async component", () => {
  const { getByText } = render(<Async />);
  expect(getByText("Async")).toBeInTheDocument();
});
