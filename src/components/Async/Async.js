import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useData, { useDataPropTypes, useDataDefaultProps } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = PropTypes.shape(useDataPropTypes);

/**
 * Defines the default props
 */
const defaultProps = useDataDefaultProps;

/**
 * Reqres.in specific credentials
 *
 * @see https://reqres.in/
 */
const credentials = {
  email: "eve.holt@reqres.in",
  password: "cityslicka"
};

/**
 * Reqres.in specific fetcher
 */
const fetcherLogin = async ({ credentials }) => {
  const data = credentials;
  console.log("c:", data);

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  return response.json();
};

/**
 * Displays the component
 */
const Async = props => {
  const options = {
    promiseFn: fetcherLogin,
    promiseFnParams: { credentials: credentials },
    initialValue: "Loading...."
  };

  const [result, setResult] = useState();
  const { data, error } = useData({ options: options });

  useEffect(() => {
    if (data) setResult(JSON.stringify(data));
    if (error) setResult(error.message);
  }, [error, data]);

  return (
    <div className="Async">
      <ul>
        <li key="data">Data: {result}</li>
      </ul>
    </div>
  );
};

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

export default Async;
export { propTypes as AsyncPropTypes, defaultProps as AsyncDefaultProps };
