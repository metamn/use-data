import React from "react";
import PropTypes from "prop-types";
import { useAsync } from "react-async";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The resource where the request is made
   *
   * - Currently this is borrowed from `fetch`
   *
   * @see https://docs.react-async.com/api/interfaces#usefetch-hook
   */
  resource: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * An options object containing any custom settings that you want to apply to the request
   *
   * - Currently this is borrowed from `fetch`
   *
   * @see https://docs.react-async.com/api/interfaces#usefetch-hook
   */
  init: PropTypes.object,
  /**
   * React-async specific options
   *
   * @see https://docs.react-async.com/api/options
   */
  options: PropTypes.object,
  /**
   * A fetcher function
   *
   * @see https://docs.react-async.com/guide/async-components#more-flexibility-with-useasync
   */
  fetcher: PropTypes.func
};

/**
 * Defines the default props
 */
const defaultProps = {
  resource: "",
  init: {},
  options: {
    initialValue: "Loading ...."
  },
  fetcher: () => console.log("Fetcher fumction for useDataAsync")
};

/**
 * Displays the component
 */
const useDataAsync = props => {
  const { resource, init, options, fetcher } = props;

  /**
   * Runs the query and returns various values
   *
   * @see https://docs.react-async.com/api/state
   */
  const { data, error, reload, cancel } = useAsync(
    { promiseFn: fetcher, ...init },
    options
  );

  return { data, error, reload, cancel };
};

useDataAsync.propTypes = propTypes;
useDataAsync.defaultProps = defaultProps;

export default useDataAsync;
export {
  propTypes as useDataAsyncPropTypes,
  defaultProps as useDataAsyncDefaultProps
};
