import React from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

const Body = ({ children, ...others }) => {
  return <Island {...others}>{children}</Island>;
};

Body.propTypes = {
  /** The content to display inside the widget body. */
  children: PropTypes.any,
};

export default Body;
