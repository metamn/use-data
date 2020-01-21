import React from "react";
import TestFetch from "./TestFetch";
import ApiDoc from "./TestFetch.md";

export default {
  component: TestFetch,
  title: "TestFetch",
  parameters: { notes: ApiDoc }
};

export const Default = () => <TestFetch />;
