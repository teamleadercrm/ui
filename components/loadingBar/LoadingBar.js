import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import withTheme from '../hoc/withTheme';

import Box from '../box';
import theme from './theme.css';

class LoadingBar extends PureComponent {
  render() {
    const { className, ...others } = this.props;

    const classNames = cx(theme['loading-bar'], className);

    return (
      <Box data-teamleader-ui="loading-bar" className={classNames} {...others}>
        <div className={theme['loading-bar-indicator']} />
      </Box>
    );
  }
}

LoadingBar.propTypes = {
  /** A class name for the wrapper to add custom classes */
  className: PropTypes.string,
};

export default withTheme(theme)(LoadingBar);
