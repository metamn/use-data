import React from "react";
import PropTypes from "prop-types";
import { useAsync } from "react-async";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * React-async specific options
   *
   * @see https://docs.react-async.com/api/options
   */
  options: PropTypes.object
};

/**
 * Defines the default props
 */
const defaultProps = {
  options: {
    promiseFn: () => console.log("Fetcher fumction for useDataAsync"),
    initialValue: "Loading ...."
  }
};

/**
 * Displays the component
 */
const useDataAsync = props => {
  const { options } = props;
  const { promiseFn } = options;

  console.log("op:", options);

  /**
   * Runs the query and returns various values
   *
   * @see https://docs.react-async.com/api/state
   */
  const { data, error, reload, cancel } = useAsync({ promiseFn: promiseFn });

  console.log("e:", error);
  console.log("d:", data);

  return { data, error, reload, cancel };
};

useDataAsync.propTypes = propTypes;
useDataAsync.defaultProps = defaultProps;

export default useDataAsync;
export {
  propTypes as useDataAsyncPropTypes,
  defaultProps as useDataAsyncDefaultProps
};
