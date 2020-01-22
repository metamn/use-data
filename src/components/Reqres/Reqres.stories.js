import React from "react";
import Reqres from "./Reqres";
import ApiDoc from "./Reqres.md";

export default {
  component: Reqres,
  title: "Reqres",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Reqres />;
