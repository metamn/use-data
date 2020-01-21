import React from "react";
import { render } from "@testing-library/react";
import TestFetch from "./TestFetch";

it("has a TestFetch component", () => {
  const { getByText } = render(<TestFetch />);
  expect(getByText("TestFetch")).toBeInTheDocument();
});
