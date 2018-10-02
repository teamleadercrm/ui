import React, { PureComponent } from 'react';
import cx from 'classnames';
import theme from './theme.css';

class LoadingBar extends PureComponent {
  render() {
    const classNames = cx(theme['loading-bar']);

    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className={classNames}>
        <rect width="20%" height="100%" rx="2px" ry="2px" className={theme['loading-bar-indicator']} />
      </svg>
    );
  }
}

export default LoadingBar;
