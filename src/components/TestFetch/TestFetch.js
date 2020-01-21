import React, { useState, useEffect } from "react";

import useData from "../../hooks";

/**
 * Defines the props for API 1
 */
const api1 = {
  resource: "https://jsonplaceholder.typicode.com/todos/1",
  initialData: {
    userId: 0,
    id: 0,
    title: "default",
    completed: false
  }
};

/**
 * Defines the props for API 2
 */
const api2 = {
  resource: "http://api.finsterdata.com/v1/login",
  initialData: {
    userId: 0,
    id: 0,
    title: "default",
    completed: false
  }
};

/**
 * Displays the component
 */
const TestFetch = props => {
  const [result, setResult] = useState();
  const [api, setApi] = useState(api2);

  const { data } = useData(api);

  useEffect(() => {
    console.log("d:", data);
    if (data) setResult(JSON.stringify(data));
  }, [data]);

  return (
    <div className="TestFetch">
      <br />
      <hr />
      <br />
      <h3>Testing the fetcher hook</h3>
      <ul>
        <li key="data">Data: {result}</li>
        <li key="data1">
          <button onClick={() => setApi(api1)}>Api 1</button>
        </li>
        <li key="data2">
          <button onClick={() => setApi(api2)}>Api 2</button>
        </li>
      </ul>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default TestFetch;
