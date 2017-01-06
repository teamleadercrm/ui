import React, { PropTypes } from 'react';
import cx from 'classnames';

const FontIcon = ({ children, className, value, ...other }) => (
  <span
    data-teamleader-ui='font-icon'
    className={cx({ 'material-icons': typeof value === 'string' || typeof children === 'string' }, className)}
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
    PropTypes.element
  ])
};

FontIcon.defaultProps = {
  className: ''
};

export default FontIcon;
export { FontIcon };
