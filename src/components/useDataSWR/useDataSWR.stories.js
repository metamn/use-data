import React from "react";
import useDataSWR from "./useDataSWR";
import ApiDoc from "./useDataSWR.md";

export default {
  component: useDataSWR,
  title: "useDataSWR",
  parameters: { notes: ApiDoc }
};

export const Default = () => <useDataSWR />;
