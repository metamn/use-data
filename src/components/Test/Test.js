import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import useData, { useDataPropTypes, useDataDefaultProps } from "../../hooks";

/**
 * Defines the prop types
 */
const propTypes = useDataPropTypes;

/**
 * Defines the default props
 */
const defaultProps = {
  key: "http://api.finsterdata.com/v2/usersss",
  fetcher: key =>
    axios(key).then(r => {
      console.log("r:", r);
      r.json();
    }),
  options: {
    initialData: "Loading data afa..."
  }
};

/**
 * Displays the component
 */
const Test = props => {
  const { data } = useData(props);

  return (
    <div className="Test">
      <ul>
        <li key="data">Data: {data}</li>
      </ul>
    </div>
  );
};

Test.propTypes = propTypes;
Test.defaultProps = defaultProps;

export default Test;
export { propTypes as TestPropTypes, defaultProps as TestDefaultProps };
