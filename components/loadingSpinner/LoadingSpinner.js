import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class LoadingSpinner extends PureComponent {
  render() {
    const { className, color, size, ...others } = this.props;
    const classNames = cx(theme['loading-spinner'], theme[`is-${color}`], theme[`is-${size}`], className);

    return <Box data-teamleader-ui="loading-spinner" className={classNames} {...others} />;
  }
}

LoadingSpinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'teal']),
  size: PropTypes.oneOf(['small', 'medium']),
};

LoadingSpinner.defaultProps = {
  color: 'teal',
  size: 'medium',
};

export default LoadingSpinner;
