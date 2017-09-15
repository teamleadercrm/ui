import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class Counter extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    small: PropTypes.bool,
  };

  getSize () {
    return this.props.small ? 'small' : 'medium';
  }

  render () {
    const {
      children,
      className,
      ...others
    } = this.props;

    const size = this.getSize();

    const classes = cx(
      theme.counter,
      theme[size],
      {
        [theme['with-children']]: children,
      },
      className,
    );

    const rest = omit(others, [
      'small',
    ]);

    return (
      <span className={classes} {...rest} data-teamleader-ui="counter">
        {children}
      </span>
    );
  }
}

export default Counter;
