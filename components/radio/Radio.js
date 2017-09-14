import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme.css';

const Radio = ({ checked, onMouseDown, ...other }) => (
  <div
    data-teamleader-ui="radio"
    className={theme[checked ? 'radioChecked' : 'radio']}
    onMouseDown={onMouseDown}
    {...other}
  />
);

Radio.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  onMouseDown: PropTypes.func,
};

export default Radio;
