import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ checked, onMouseDown, theme, ...other }) => (
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
  theme: PropTypes.shape({
    radio: PropTypes.string,
    radioChecked: PropTypes.string,
  }),
};

export default Radio;
