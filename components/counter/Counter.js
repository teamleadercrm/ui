import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    borderColor: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby', 'tealdark']),
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
    count: PropTypes.number,
    maxCount: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    borderColor: 'neutral',
    color: 'neutral',
    size: 'medium',
  };

  render() {
    const { borderColor, className, color, count, maxCount, size, ...others } = this.props;

    const classNames = cx(
      theme['counter'],
      theme[color],
      theme[size],
      theme[`border-${borderColor}`],
      className,
    );

    return (
      <Box className={classNames} element="span" {...others} data-teamleader-ui="counter">
        {count > maxCount ? `${maxCount}+` : count}
      </Box>
    );
  }
}

export default Counter;
