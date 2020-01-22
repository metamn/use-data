import React from "react";
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

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  console.log("r:", response);

  if (!response.ok) throw new Error(response.status);
  return response.json();
};

/**
 * Displays the component
 */
const Async = props => {
  const options = {
    promiseFn: fetcherLogin,
    initialValue: "Loading...."
  };

  const { data, error } = useData({ options: options });

  return (
    <div className="Async">
      <ul>
        <li key="data">Data: xxx</li>
      </ul>
    </div>
  );
};

Async.propTypes = propTypes;
Async.defaultProps = defaultProps;

export default Async;
export { propTypes as AsyncPropTypes, defaultProps as AsyncDefaultProps };
