import React from "react";
import { render } from "@testing-library/react";
import Finster from "./Finster";

it("has a Finster component", () => {
  const { getByText } = render(<Finster />);
  expect(getByText("Finster")).toBeInTheDocument();
});
