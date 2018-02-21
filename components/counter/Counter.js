import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
    count: PropTypes.number.isRequired,
    maxCount: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render() {
    const { children, className, color, count, maxCount, size, ...others } = this.props;

    const classNames = cx(theme['counter'], theme[color], theme[size], className);

    return (
      <Box className={classNames} element="span" {...others} data-teamleader-ui="counter">
        {count > maxCount ? `${maxCount}+` : count} {children}
      </Box>
    );
  }
}

export default Counter;
