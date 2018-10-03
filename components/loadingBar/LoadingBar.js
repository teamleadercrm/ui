import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Box from '../box';
import theme from './theme.css';

class LoadingBar extends PureComponent {
  render() {
    const { className, color, size, tint, ...others } = this.props;

    const classNames = cx(
      theme['loading-bar'],
      theme[`is-${color}`],
      theme[`is-${size}`],
      theme[`is-${tint}`],
      className,
    );

    return (
      <Box data-teamleader-ui="loading-bar" className={classNames} {...others}>
        <Box className={theme['loading-bar-indicator']} />
      </Box>
    );
  }
}

LoadingBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
};

LoadingBar.defaultProps = {
  color: 'mint',
  size: 'small',
  tint: 'neutral',
};

export default LoadingBar;
