import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
const MarketingHeading2 = ({ children, className, ...others }) => {
  const classNames = cx(theme['heading-2'], className);

  return (
    <Box {...others} className={classNames} element="h2">
      {children}
    </Box>
  );
};

MarketingHeading2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default MarketingHeading2;
