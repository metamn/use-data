import React from "react";

import JsonPlaceholder from "./components/JsonPlaceholder";
import JsonPlaceholderSWR from "./components/JsonPlaceholderSWR";
import Finster from "./components/Finster";
import FinsterSWR from "./components/FinsterSWR";

const App = () => {
  return (
    <>
      <Finster />
      <FinsterSWR />
      <JsonPlaceholder />
      <JsonPlaceholderSWR />
    </>
  );
};

export default App;
