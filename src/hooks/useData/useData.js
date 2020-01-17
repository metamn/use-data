/**
 * A hook for working with data
 *
 * @see useData.md
 */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
  const { key, options } = props;
  const { initialData } = options;

  const fetcher = key =>
    fetch(key).then(r => {
      console.log("r:", r);
      r.json();
    });

  console.log("k:", key);

  /**
   * Queries the database
   */
  const { data, error, isValidating, revalidate } = useSWR(
    key,
    fetcher,
    options
  );

  /**
   * Returns default data while real data is loaded from the database
   */
  if (data === undefined) {
    return { data: initialData };
  }

  /**
   * Logs to console when there is an error
   */
  if (error) {
    console.log("useData error:" + error);
    return { data: null };
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
