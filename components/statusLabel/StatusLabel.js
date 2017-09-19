import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class StatusLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua' ]),
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
      theme.label,
      theme[color],
      theme[size],
      className,
    );

    return (
      <span className={classes} {...others} data-teamleader-ui="status-label">
        {children}
      </span>
    );
  }
}

export default StatusLabel;
