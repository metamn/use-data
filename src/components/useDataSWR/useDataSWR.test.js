import React from "react";
import { render } from "@testing-library/react";
import useDataSWR from "./useDataSWR";

it("has a useDataSWR component", () => {
  const { getByText } = render(<useDataSWR />);
  expect(getByText("useDataSWR")).toBeInTheDocument();
});
