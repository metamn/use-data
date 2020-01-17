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
 * Currently SWR is the most powerful data fetching library
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
  options: PropTypes.obj
};

/**
 * Defines the default props
 */
const defaultProps = {
  fetcher: url => {
    return fetch(url).then(r => r.json());
  }
};

/**
 * Displays the component
 */
const useData = props => {
  const { data, error, isValidating, revalidate } = useSWR(...props);

  return { data, error, isValidating, revalidate };
};

useData.propTypes = propTypes;
useData.defaultProps = defaultProps;

export default useData;
export { propTypes as useDataPropTypes, defaultProps as useDataDefaultProps };
