import React from "react";
import JsonPlaceholderSWR from "./JsonPlaceholderSWR";
import ApiDoc from "./JsonPlaceholderSWR.md";

export default {
  component: JsonPlaceholderSWR,
  title: "JsonPlaceholderSWR",
  parameters: { notes: ApiDoc }
};

export const Default = () => <JsonPlaceholderSWR />;
