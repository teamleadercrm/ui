import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class StatusLabel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    mint: PropTypes.bool,
    teal: PropTypes.bool,
    violet: PropTypes.bool,
    ruby: PropTypes.bool,
    gold: PropTypes.bool,
    aqua: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    size: 'medium',
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

    return colors.find(color => this.props[color]);
  }

  render () {
    const {
      children,
      className,
      size,
      ...others
    } = this.props;

    const color = this.getColor();

    const classes = cx(
      theme.label,
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
    ]);

    return (
      <span className={classes} {...rest} data-teamleader-ui="status-label">
        {children}
      </span>
    );
  }
}

export default StatusLabel;
