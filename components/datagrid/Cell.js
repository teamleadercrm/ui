import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

const Cell = props => {
  const { children, className, ...others } = props;

  return (
    <Box className={cx(theme['cell'], className)} data-teamleader-ui="datagrid-cell" {...others}>
      {children}
    </Box>
  );
};

Cell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Cell;
