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

/**
 * Displays the component
 */
const Reqres = props => {
  const { api: defaultApi } = props;

  const [result, setResult] = useState();
  const [api, setApi] = useState(defaultApi);

  const { data, error } = useData(api);

  useEffect(() => {
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
      </ul>
      <br />
      <hr />
      <br />
    </div>
  );
};

Reqres.defaultProps = defaultProps;

export default Reqres;
