import React from "react";
import PropTypes from "prop-types";

import { useAsync } from "react-async";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * `useAsync` specific options
   *
   * @see https://docs.react-async.com/api/interfaces#useasync-hook
   */
  options: PropTypes.object
};

/**
 * Defines the default props
 *
 * - These options are mandatory
 */
const defaultProps = {
  options: {
    /**
     * The fetcher function
     */
    promiseFn: () => console.log("Fetcher function for useDataAsync"),
    /**
     * Params for the fetcher function, if any
     */
    promiseFnParams: {},
    /**
     * The default / initial data to be returned
     */
    initialValue: "Loading ...."
  }
};

/**
 * Defines the hook functionality
 */
const useDataAsync = props => {
  const { options } = props;
  const { promiseFn, promiseFnParams } = options;

  /**
   * Runs the query and returns various values
   *
   * @see https://docs.react-async.com/api/state - for return values
   * @see https://docs.react-async.com/guide/async-components#more-flexibility-with-useasync - for useAsync example
   */
  const { data, error, reload, cancel } = useAsync({
    promiseFn: promiseFn,
    ...promiseFnParams
  });

  return { data, error, reload, cancel };
};

useDataAsync.propTypes = propTypes;
useDataAsync.defaultProps = defaultProps;

export default useDataAsync;
export {
  propTypes as useDataAsyncPropTypes,
  defaultProps as useDataAsyncDefaultProps
};
