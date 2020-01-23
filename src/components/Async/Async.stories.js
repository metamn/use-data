import React from "react";
import Async from "./Async";
import ApiDoc from "./Async.md";

export default {
  component: Async,
  title: "Async",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Async />;
