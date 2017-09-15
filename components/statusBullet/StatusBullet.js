import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class StatusBullet extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    mint: PropTypes.bool,
    teal: PropTypes.bool,
    violet: PropTypes.bool,
    ruby: PropTypes.bool,
    gold: PropTypes.bool,
    aqua: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
  };

  getColor () {
    const colors = [
      'mint',
      'violet',
      'ruby',
      'gold',
      'aqua',
      'teal',
    ];

    const color = colors.filter(color => this.props.hasOwnProperty(color));
    return color[0];
  }

  getSize () {
    return this.props.small ? 'small' : this.props.large ? 'large' : 'medium';
  }

  render () {
    const {
      children,
      className,
      ...others
    } = this.props;

    const color = this.getColor();
    const size = this.getSize();

    const classes = cx(
      theme.bullet,
      theme[color],
      theme[size],
      className,
    );

    const rest = omit(others, [
      'mint',
      'violet',
      'ruby',
      'gold',
      'aqua',
      'teal',
      'large',
      'small',
    ]);

    return (
      <span className={classes} {...rest} data-teamleader-ui="status-bullet">
        {children}
      </span>
    );
  }
}

export default StatusBullet;
