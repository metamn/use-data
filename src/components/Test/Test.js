import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useData, { useDataPropTypes } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = useDataPropTypes;

/**
 * Defines the default props
 */
const defaultProps = {
  key: "https://jsonplaceholder.typicode.com/todos/1",
  fetcher: url => fetch(url).then(response => response.json()),
  options: {
    initialData: {
      userId: 0,
      id: 0,
      title: "default",
      completed: false
    }
  }
};

/**
 * Displays the component
 */
const Test = props => {
  const [result, setResult] = useState();

  const { data, error } = useData(props);

  useEffect(() => {
    if (error) setResult(JSON.stringify(error));
    if (data) setResult(JSON.stringify(data));
  }, [data, error]);

  return (
    <div className="Test">
      <br />
      <hr />
      <br />
      <h3>Testing the hook</h3>
      <ul>
        <li key="data">Data: {result}</li>
      </ul>
      <br />
      <hr />
      <br />
    </div>
  );
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
export { propTypes as TestPropTypes, defaultProps as TestDefaultProps };
