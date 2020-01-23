import React from "react";
import PropTypes from "prop-types";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const SWR = props => {
  return (
    <div className="SWR">
      <h3>SWR</h3>
      <ul>
        <li key="data">Data: xxx</li>
      </ul>
    </div>
  );
};

SWR.propTypes = propTypes;
SWR.defaultProps = defaultProps;

export default SWR;
export { propTypes as SWRPropTypes, defaultProps as SWRDefaultProps };
