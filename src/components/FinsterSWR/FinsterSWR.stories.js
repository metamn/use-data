import React from "react";
import FinsterSWR from "./FinsterSWR";
import ApiDoc from "./FinsterSWR.md";

export default {
  component: FinsterSWR,
  title: "FinsterSWR",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinsterSWR />;
