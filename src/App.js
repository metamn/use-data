import React from "react";

import JsonPlaceholder from "./components/JsonPlaceholder";
import JsonPlaceholderSWR from "./components/JsonPlaceholderSWR";
import Finster from "./components/Finster";
import FinsterSWR from "./components/FinsterSWR";
import JsonPl2 from "./components/JsonPl2";
import Props from "./components/Props";

const App = () => {
  return (
    <>
      <Props />
      <JsonPl2 />
      <Finster />
      <FinsterSWR />
      <JsonPlaceholder />
      <JsonPlaceholderSWR />
    </>
  );
};

export default App;
