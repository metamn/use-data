import React from "react";

import JsonPlaceholder from "./components/JsonPlaceholder";
import JsonPlaceholderSWR from "./components/JsonPlaceholderSWR";
import Finster from "./components/Finster";
import FinsterSWR from "./components/FinsterSWR";
import JsonPl2 from "./components/JsonPl2";

const App = () => {
  return (
    <>
      <JsonPl2 />
      <Finster />
      <FinsterSWR />
      <JsonPlaceholder />
      <JsonPlaceholderSWR />
    </>
  );
};

export default App;
