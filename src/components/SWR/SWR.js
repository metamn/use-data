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
const fetcherLogin = (url, data) => {
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

/**
 * Displays the component
 */
const SWR = props => {
  const { options } = props;

  /**
   * Sets up the params for the hook
   */
  const params = {
    key: ["https://reqres.in/api/login", credentials],
    fetcher: fetcherLogin,
    options: options
  };

  /**
   * Sets up state to store the API call results (data, error)
   */
  const [result, setResult] = useState();

  /**
   * Preforms the API call
   */
  const { data, error } = useData(params);

  /**
   * Saves the API call results into the state
   */
  useEffect(() => {
    if (data) setResult(JSON.stringify(data));
    if (error) setResult(error.message);
  }, [error, data]);

  return (
    <div className="SWR">
      <h3>SWR</h3>
      <ul>
        <li key="data">Data: {result}</li>
      </ul>
    </div>
  );
};

SWR.propTypes = propTypes;
SWR.defaultProps = defaultProps;

export default SWR;
export { propTypes as SWRPropTypes, defaultProps as SWRDefaultProps };
