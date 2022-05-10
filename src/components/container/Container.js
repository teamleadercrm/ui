import React from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

const Container = ({ children, className, fixed, ...others }) => {
  const classNames = cx(
    theme['container'],
    {
      [theme['is-fixed']]: fixed,
    },
    className,
  );

  return (
    <Box {...others} boxSizing="content-box" className={classNames}>
      {children}
    </Box>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
};

export default Container;
