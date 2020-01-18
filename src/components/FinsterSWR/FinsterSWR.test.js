import React from "react";
import { render } from "@testing-library/react";
import FinsterSWR from "./FinsterSWR";

it("has a FinsterSWR component", () => {
  const { getByText } = render(<FinsterSWR />);
  expect(getByText("FinsterSWR")).toBeInTheDocument();
});
