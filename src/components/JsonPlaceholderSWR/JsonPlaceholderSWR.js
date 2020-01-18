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

const fetcher = url => fetch(url).then(response => response.json());

/**
 * Displays the component
 */
const JsonPlaceholderSWR = props => {
  /**
   * The displayed results
   */
  const [result, setResult] = useState("...");

  /**
   * Results from the hook must be saved separately from the results which will be displayed
   */
  const [resultSWR, setResultSWR] = useState("not set");

  /**
   * Without fetcher the data is undefined
   */
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );

  /**
   * Without useEffect it's an infinite loop
   */
  useEffect(() => {
    console.log("useEffect");

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
    <div className="JsonPlaceholderSWR">
      <br />
      <hr />
      <br />
      <h3>JsonPlaceholderSWR</h3>
      <p>
        Uses `useSWR` which making a single request to the API the returns
        results from the cache.{" "}
      </p>
      <p>However the code is much complex than in the case of `fetch`</p>
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

JsonPlaceholderSWR.propTypes = propTypes;
JsonPlaceholderSWR.defaultProps = defaultProps;

export default JsonPlaceholderSWR;
export {
  propTypes as JsonPlaceholderSWRPropTypes,
  defaultProps as JsonPlaceholderSWRDefaultProps
};
