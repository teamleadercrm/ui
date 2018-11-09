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
        <div className={theme['loading-bar-indicator']} />
      </Box>
    );
  }
}

LoadingBar.propTypes = {
  /** A class name for the wrapper to add custom classes */
  className: PropTypes.string,
  /** The color of the components */
  color: PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
  /** Size of the component */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** The tint of the components color */
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
};

LoadingBar.defaultProps = {
  color: 'mint',
  size: 'small',
  tint: 'neutral',
};

LoadingBar.displayName = 'LoadingBar';

export default LoadingBar;
