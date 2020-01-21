import React, { useState, useEffect } from "react";

import useDataSWR from "../../hooks";

/**
 * Defines the props for API 1
 */
const api1 = {
  key: "https://jsonplaceholder.typicode.com/todos/1",
  fetcher: url => fetch(url).then(response => response.json()),
  options: {
    initialData: {
      userId: 0,
      id: 0,
      title: "default",
      completed: false
    }
  }
};

/**
 * Defines the props for API 2
 */
const api2 = {
  key: "http://api.finsterdata.com/v1/login",
  fetcher: url => fetch(url).then(response => response.json()),
  options: {
    initialData: {
      userId: 0,
      id: 0,
      title: "default",
      completed: false
    }
  }
};

/**
 * Displays the component
 */
const Test = props => {
  const [result, setResult] = useState();
  const [api, setApi] = useState(api2);

  const { data, error } = useDataSWR(api);

  useEffect(() => {
    if (error) setResult(JSON.stringify(error));
    if (data) setResult(JSON.stringify(data));
  }, [data, error]);

  return (
    <div className="Test">
      <br />
      <hr />
      <br />
      <h3>Testing the hook</h3>
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

export default Test;
