/**
 * A hook for working with data
 *
 * @see useData.md
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Builds upon the Fetch API.
 *
 * - Fetch API is the browser's default way to fetch data
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * Defines the resource to fetch
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   */
  resource: PropTypes.string,
  /**
   * Defines additional options
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
   */
  init: PropTypes.object,
  /**
   * The initial / default data to return while loading the real data from the server
   *
   * - Added to comply with other fetching methods / packages like SWR
   */
  initialData: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  resource: "",
  init: {},
  initialData: "Loading...."
};

/**
 * Implements the hook
 */
const useData = props => {
  /**
   * Preparing the props
   */
  const { resource, init, initialData } = props;

  return fetch(resource, init)
    .then(response => response.json())
    .then(data => {
      console.log("d1:", data);
      return data;
    });
};

useData.propTypes = propTypes;
useData.defaultProps = defaultProps;

export default useData;
export { propTypes as useDataPropTypes, defaultProps as useDataDefaultProps };
