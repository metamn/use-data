import React from "react";
import SWR from "./SWR";
import ApiDoc from "./SWR.md";

export default {
  component: SWR,
  title: "SWR",
  parameters: { notes: ApiDoc }
};

export const Default = () => <SWR />;
