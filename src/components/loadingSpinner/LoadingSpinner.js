import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class LoadingSpinner extends PureComponent {
  render() {
    const { className, color, size, tint, ...others } = this.props;

    const classNames = cx(
      theme['loading-spinner'],
      theme[`is-${color}`],
      theme[`is-${size}`],
      theme[`is-${tint}`],
      className,
    );
    console.log(classNames);

    return <Box data-teamleader-ui="loading-spinner" className={classNames} {...others} />;
  }
}

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['aqua', 'gold', 'mint', 'neutral', 'ruby', 'teal', 'violet']),
  size: PropTypes.oneOf(['small', 'medium']),
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
};

LoadingSpinner.defaultProps = {
  color: 'teal',
  size: 'medium',
  tint: 'darkest',
};

export default LoadingSpinner;
