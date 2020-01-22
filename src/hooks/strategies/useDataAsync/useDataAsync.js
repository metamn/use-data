import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "react-async";

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
  options: PropTypes.object
};

/**
 * Defines the default props
 */
const defaultProps = {
  resource: "",
  init: {},
  options: {
    initialValue: "Loading ...."
  }
};

/**
 * Displays the component
 */
const useDataAsync = props => {
  const { resource, init, options } = props;

  /**
   * Runs the query and returns various values
   *
   * @see https://docs.react-async.com/api/state
   */
  const state = useFetch(resource, init, options);
  const { data, error, reload, cancel } = state;

  return { data, error, reload, cancel };
};

useDataAsync.propTypes = propTypes;
useDataAsync.defaultProps = defaultProps;

export default useDataAsync;
export {
  propTypes as useDataAsyncPropTypes,
  defaultProps as useDataAsyncDefaultProps
};
