import React from "react";
import { render } from "@testing-library/react";
import SWR from "./SWR";

it("has a SWR component", () => {
  const { getByText } = render(<SWR />);
  expect(getByText("SWR")).toBeInTheDocument();
});
