import React from "react";
import JsonPl2 from "./JsonPl2";
import ApiDoc from "./JsonPl2.md";

export default {
  component: JsonPl2,
  title: "JsonPl2",
  parameters: { notes: ApiDoc }
};

export const Default = () => <JsonPl2 />;
