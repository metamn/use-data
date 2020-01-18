import React from "react";
import JsonPlaceholder from "./JsonPlaceholder";
import ApiDoc from "./JsonPlaceholder.md";

export default {
  component: JsonPlaceholder,
  title: "JsonPlaceholder",
  parameters: { notes: ApiDoc }
};

export const Default = () => <JsonPlaceholder />;
