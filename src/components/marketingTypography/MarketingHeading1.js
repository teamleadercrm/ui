import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
const MarketingHeading1 = ({ children, className, ...others }) => {
  const classNames = cx(theme['heading-1'], className);

  return (
    <Box {...others} className={classNames} element="h1">
      {children}
    </Box>
  );
};

MarketingHeading1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default MarketingHeading1;
