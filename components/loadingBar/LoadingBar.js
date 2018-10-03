import React, { PureComponent } from 'react';
import cx from 'classnames';

import Box from '../box';
import theme from './theme.css';

class LoadingBar extends PureComponent {
  render() {
    const classNames = cx(theme['loading-bar']);

    return (
      <Box data-teamleader-ui="loading-bar" className={classNames}>
        <Box className={theme['loading-bar-indicator']} />
      </Box>
    );
  }
}

export default LoadingBar;
