import React from "react";
import { render } from "@testing-library/react";
import Reqres from "./Reqres";

it("has a Reqres component", () => {
  const { getByText } = render(<Reqres />);
  expect(getByText("Reqres")).toBeInTheDocument();
});
