/**
 * A hook for working with data
 *
 * @see useData.md
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Builds upon SWR.
 *
 * - Currently SWR is the most powerful data fetching library
 * - This package can be replaced anytime
 *
 * @see https://swr.now.sh/
 */
import useSWR from "swr";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Where to fetch from, and what to fetch with useSWR
   *
   * @see https://github.com/zeit/swr#conditional-fetching
   */
  key: PropTypes.any,
  /**
   * The fetcher function for useSWR
   *
   * @see https://github.com/zeit/swr#data-fetching
   */
  fetcher: PropTypes.func,
  /**
   * The options for useSWR
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
  fetcher: () => {
    console.log("Fetcher function");
  },
  options: {
    initialData: "Loading..."
  }
};

/**
 * Displays the component
 */
const useData = props => {
  /**
   * Prepares params for useSWR
   *
   * - Note: `useSWR(props)` simply won't work ....
   */
  const { key, fetcher, options } = props;
  const { initialData } = options;

  /**
   * Queries the API
   */
  const { data, error, isValidating, revalidate } = useSWR(
    key,
    fetcher,
    options
  );

  /**
   * Returns default data while real data is loaded from the API
   */
  if (data === undefined) {
    return { data: initialData, isValidating, revalidate };
  }

  /**
   * Returns the error
   */
  if (error) {
    return { data: null, isValidating, revalidate };
  }

  /**
   * Returns data and functions
   */
  return { data, isValidating, revalidate };
};

useData.propTypes = propTypes;
useData.defaultProps = defaultProps;

export default useData;
export { propTypes as useDataPropTypes, defaultProps as useDataDefaultProps };
