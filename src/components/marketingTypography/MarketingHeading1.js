import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

/** @type {React.ComponentType<any>} */
class MarketingHeading1 extends Component {
  render() {
    const { children, className, ...others } = this.props;

    const classNames = cx(theme['heading-1'], className);

    return (
      <Box {...others} className={classNames} element="h1">
        {children}
      </Box>
    );
  }
}

MarketingHeading1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default MarketingHeading1;
