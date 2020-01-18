import React from "react";

import JsonPlaceholder from "./components/JsonPlaceholder";
import JsonPlaceholderSWR from "./components/JsonPlaceholderSWR";
import Finster from "./components/Finster";

const App = () => {
  return (
    <>
      <Finster />
      <JsonPlaceholder />
      <JsonPlaceholderSWR />
    </>
  );
};

export default App;
