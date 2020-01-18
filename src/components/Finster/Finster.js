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
const Finster = props => {
  const [result, setResult] = useState("...");

  const getTodo = props => {
    fetch("http://api.finsterdata.com/v1/login")
      .then(response => response.json())
      .then(json => setResult(JSON.stringify(json)));
  };

  return (
    <div className="Finster">
      <br />
      <hr />
      <br />
      <h3>Finster</h3>
      <p>
        <button onClick={() => getTodo()}>Is Logged in?</button>
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

Finster.propTypes = propTypes;
Finster.defaultProps = defaultProps;

export default Finster;
export { propTypes as FinsterPropTypes, defaultProps as FinsterDefaultProps };
