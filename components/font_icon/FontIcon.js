import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FontIcon = ({ children, className, value, ...other }) => (
  <span
    data-teamleader-ui="font-icon"
    className={cx(className, { 'teamleader-icons': typeof value === 'string' || typeof children === 'string' })}
    {...other}
  >
    {value}
    {children}
  </span>
);

FontIcon.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

FontIcon.defaultProps = {
  className: '',
};

export default FontIcon;
export { FontIcon };
