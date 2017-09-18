import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Monospaced } from '../typography';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'neutral', 'ruby' ]),
    count: PropTypes.number,
    maxCount: PropTypes.number,
    size: PropTypes.oneOf([ 'small', 'medium' ]),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render () {
    const {
      className,
      color,
      count,
      maxCount,
      size,
      ...others
    } = this.props;

    const classes = cx(
      theme.counter,
      theme[color],
      theme[size],
      {
        [theme.rounded]: typeof (count) !== 'undefined',
      },
      className,
    );

    return (
      <span className={classes} {...others} data-teamleader-ui="counter">
        <Monospaced>{ count > maxCount ? `${maxCount}+` : count }</Monospaced>
      </span>
    );
  }
}

export default Counter;
