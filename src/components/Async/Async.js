import React from "react";
import PropTypes from "prop-types";

import useData, { useDataPropTypes } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = PropTypes.shape(useDataPropTypes);

/**
 * Defines the default props
 */
const defaultProps = {
  resource: "https://reqres.in/api",
  init: {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({})
  },
  options: {
    initialValue: "Loading ...."
  },
  fetcher: () => console.log("Fetcher function for Async")
};

/**
 * Displays the component
 */
const Async = props => {
  const { resource, init, options, fetcher } = props;

  const credentials = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  const fetcherLogin = async ({ credentials }) => {
    const response = await fetch(`$resource/login`, {
      ...init,
      body: JSON.stringify(credentials)
    });

    console.log("r:", response);

    if (!response.ok) throw new Error(response.status);
    return response.json();
  };

  const { data, error } = useData({
    resource: resource,
    init: init,
    options: options,
    fetcher: fetcherLogin
  });

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
