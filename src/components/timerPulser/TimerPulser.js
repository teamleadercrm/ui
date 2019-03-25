import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TimerPulser extends PureComponent {
  render() {
    const { className, size, ...others } = this.props;

    return (
      <Box
        data-teamleader-ui="timer-pulser"
        className={cx(theme['pulser-container'], theme[`is-${size}-outer`], className)}
        {...others}
      >
        <Box className={cx(theme['pulser'], theme[`is-${size}-inner`], className)} {...others} />
      </Box>
    );
  }
}

TimerPulser.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

TimerPulser.defaultProps = {
  size: 'medium',
};

export default TimerPulser;
