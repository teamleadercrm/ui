import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
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
      theme.monospaced,
      theme[color],
      theme[size],
      {
        [theme.circular]: !children,
        [theme.rounded]: children,
      },
      className,
    );

    const rest = omit(others, [
      'color',
      'size',
    ]);

    return (
      <span className={classes} {...rest} data-teamleader-ui="counter">
        {children}
      </span>
    );
  }
}

export default Counter;
