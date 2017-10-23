import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    borderColor: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby', 'tealdark']),
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
    count: PropTypes.number,
    inactive: PropTypes.bool,
    maxCount: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    borderColor: 'neutral',
    color: 'neutral',
    inactive: false,
    size: 'medium',
  };

  render() {
    const { borderColor, className, color, count, inactive, maxCount, size, ...others } = this.props;

    const classNames = cx(
      theme['counter'],
      theme[color],
      theme[size],
      theme[`border-${borderColor}`],
      {
        [theme['inactive']]: inactive,
        [theme['rounded']]: typeof count !== 'undefined',
      },
      className,
    );

    return (
      <span className={classNames} {...others} data-teamleader-ui="counter">
        {count > maxCount ? `${maxCount}+` : count}
      </span>
    );
  }
}

export default Counter;
