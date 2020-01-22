import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useData from "../../hooks";

/**
 * Defines the default props
 */
const defaultProps = {
  api: {
    key: "https://reqres.in/api/login",
    fetcher: (url, user) =>
      fetch(url, { type: "POST", data: user }).then(response =>
        response.json()
      ),
    options: {
      initialData: {}
    }
  }
};

const fetcher = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    const j = response.json();
    console.log("r:", j);
    return j;
  });
};

const api1 = {
  key: [
    "https://reqres.in/api/login",
    {
      email: "eve.holt@reqres.in",
      password: "cityslick"
    }
  ],
  fetcher: fetcher,
  options: {
    initialData: {}
  }
};

const api2 = {
  key: [
    "https://reqres.in/api/login",
    {
      email: "eve.holt@reqres.in",
      password: "cityslick-----------"
    }
  ],
  fetcher: fetcher,
  options: {
    initialData: {}
  }
};

/**
 * Displays the component
 */
const Reqres = props => {
  const [result, setResult] = useState();
  const [api, setApi] = useState(api1);

  const { data, error } = useData(api);

  useEffect(() => {
    console.log("d:", data);
    if (error) setResult(JSON.stringify(error));
    if (data) setResult(JSON.stringify(data));
  }, [data, error]);

  return (
    <div className="Test">
      <br />
      <hr />
      <br />
      <h3>Testing the hook with Reqres</h3>
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

Reqres.defaultProps = defaultProps;

export default Reqres;
