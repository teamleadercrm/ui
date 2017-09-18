import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Monospaced } from '../typography';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'neutral', 'ruby' ]),
    size: PropTypes.oneOf([ 'small', 'medium' ]),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render () {
    const {
      children,
      className,
      color,
      size,
      ...others
    } = this.props;

    const classes = cx(
      theme.counter,
      theme[color],
      theme[size],
      {
        [theme.circular]: !children,
        [theme.rounded]: children,
      },
      className,
    );

    return (
      <span className={classes} {...others} data-teamleader-ui="counter">
        <Monospaced>{children}</Monospaced>
      </span>
    );
  }
}

export default Counter;
