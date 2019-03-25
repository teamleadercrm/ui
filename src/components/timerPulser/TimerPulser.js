import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class TimerPulser extends PureComponent {
  render() {
    const { className, size, ...others } = this.props;
    console.log(theme[`${size}`]);

    return (
      <div className={cx(theme['pulser-container'], 'classNames')}>
        <div className={cx(theme['pulser'], className)} />
      </div>
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
