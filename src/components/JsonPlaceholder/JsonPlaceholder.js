import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const JsonPlaceholder = props => {
  const [result, setResult] = useState("...");

  const getTodo = props => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => setResult(JSON.stringify(json)));
  };

  return (
    <div className="JsonPlaceholder">
      <br />
      <hr />
      <br />
      <h3>JsonPlaceholder</h3>
      <p>
        <button onClick={() => getTodo()}>Get Todo</button>
      </p>
      <div className="result">
        Result:<p>{result}</p>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
};

JsonPlaceholder.propTypes = propTypes;
JsonPlaceholder.defaultProps = defaultProps;

export default JsonPlaceholder;
export {
  propTypes as JsonPlaceholderPropTypes,
  defaultProps as JsonPlaceholderDefaultProps
};
