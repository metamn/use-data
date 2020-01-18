import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSWR from "swr";

/**
 * Defines the prop types
 */
const propTypes = {
  key: PropTypes.string,
  fetcher: PropTypes.func,
  options: PropTypes.object
};

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
const Props = props => {
  const { key, fetcher, options } = props;
  const { initialData } = options;

  const [result, setResult] = useState("...");

  // This ain't gonna work ...
  // const { data, error } = useSWR(props);
  const { data, error } = useSWR(key, fetcher, options);

  useEffect(() => {
    if (error) setResult(JSON.stringify(error));
    if (!data) setResult(JSON.stringify(initialData));
    setResult(JSON.stringify(data));
  }, [data, error]);

  return (
    <div className="Props">
      <br />
      <hr />
      <br />
      <h3>SWR using props</h3>
      <p>{result}</p>
      <br />
      <hr />
      <br />
    </div>
  );
};

Props.propTypes = propTypes;
Props.defaultProps = defaultProps;

export default Props;
export { propTypes as PropsPropTypes, defaultProps as PropsDefaultProps };
