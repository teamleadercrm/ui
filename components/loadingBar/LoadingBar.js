import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Box from '../box';
import theme from './theme.css';

class LoadingBar extends PureComponent {
  render() {
    const { className } = this.props;

    const classNames = cx(theme['loading-bar'], className);

    return (
      <Box data-teamleader-ui="loading-bar" className={classNames}>
        <Box className={theme['loading-bar-indicator']} />
      </Box>
    );
  }
}

LoadingBar.propTypes = {
  className: PropTypes.string,
};

export default LoadingBar;
