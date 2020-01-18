import React from "react";
import { render } from "@testing-library/react";
import JsonPl2 from "./JsonPl2";

it("has a JsonPl2 component", () => {
  const { getByText } = render(<JsonPl2 />);
  expect(getByText("JsonPl2")).toBeInTheDocument();
});
