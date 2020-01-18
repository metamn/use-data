import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSWR from "swr";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Without fetcher the data is undefined
 */
const fetcher = url => fetch(url).then(response => response.json());

/**
 * Displays the component
 */
const FinsterSWR = props => {
  const [result, setResult] = useState("...");
  const [resultSWR, setResultSWR] = useState("not set");

  const { data, error } = useSWR(
    "http://api.finsterdata.com/v1/login",
    fetcher
  );

  /**
   * Without useEffect it's an infinite loop
   */
  useEffect(() => {
    console.log("useEffect Finster");

    if (error) setResultSWR(JSON.stringify(error));
    console.log("...after error");

    if (!data) setResultSWR("Loading....");
    console.log("...after loading");

    setResultSWR(JSON.stringify(data));
    console.log("...data:", data);
  }, [data, error]);

  const getTodo = props => {
    setResult(resultSWR);
  };

  return (
    <div className="FinsterSWR">
      <br />
      <hr />
      <br />
      <h3>FinsterSWR</h3>
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

FinsterSWR.propTypes = propTypes;
FinsterSWR.defaultProps = defaultProps;

export default FinsterSWR;
export {
  propTypes as FinsterSWRPropTypes,
  defaultProps as FinsterSWRDefaultProps
};
