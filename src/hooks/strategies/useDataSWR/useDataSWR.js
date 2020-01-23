import React from "react";
import PropTypes from "prop-types";

import useSWR from "swr";

/**
 * Defines the prop types
 *
 * @see https://github.com/zeit/swr#parameters
 */
const propTypes = {
  /**
   * Where to fetch from, and what to fetch
   *
   * @see https://github.com/zeit/swr#conditional-fetching
   */
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.array]),
  /**
   * The fetcher function
   *
   * @see https://github.com/zeit/swr#data-fetching
   */
  fetcher: PropTypes.func,
  /**
   * The options for the hook
   *
   * @see https://github.com/zeit/swr#options
   */
  options: PropTypes.object
};

/**
 * Defines the default props
 */
const defaultProps = {
  key: "",
  fetcher: () => console.log("Fetcher function for SWR"),
  options: {
    initialData: "Loading..."
  }
};

/**
 * Defines the hook functionality
 */
const useDataSWR = props => {
  /**
   * Prepares params for useSWR
   *
   * - Note: `useSWR(props)` simply won't work ....
   */
  const { key, fetcher, options } = props;

  /**
   * Queries the API
   *
   * @see https://github.com/zeit/swr#return-values
   */
  const { data, error, isValidating, revalidate } = useSWR(
    key,
    fetcher,
    options
  );

  /**
   * Returns a common shape of data and functions
   */
  return { data, error, reload: revalidate, cancel: () => {} };
};

useDataSWR.propTypes = propTypes;
useDataSWR.defaultProps = defaultProps;

export default useDataSWR;
export {
  propTypes as useDataSWRPropTypes,
  defaultProps as useDataSWRDefaultProps
};
