import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Loads the data hook
 */
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
 * This example queries the Reqres.in API
 *
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
 *
 * Every API has to have its own fetcher.
 * More, every API call can have its own fetcher.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
const fetcherLogin = async ({ credentials }) => {
  const data = credentials;

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
  /**
   * Sets up the params for the hook
   */
  const options = {
    promiseFn: fetcherLogin,
    promiseFnParams: { credentials: credentials },
    initialValue: "Loading...."
  };

/**
 * Sets up state to store the API call results (data, error)
 */
  const [result, setResult] = useState();

  /**
   * Preforms the API call
   */
  const { data, error } = useData({ options: options });

/**
 * Saves the API call results into the state
 */
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
