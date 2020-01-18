import React from "react";
import Finster from "./Finster";
import ApiDoc from "./Finster.md";

export default {
  component: Finster,
  title: "Finster",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Finster />;
