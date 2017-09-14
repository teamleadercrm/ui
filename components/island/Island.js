import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

class Island extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    white: PropTypes.bool,
    neutral: PropTypes.bool,
    mint: PropTypes.bool,
    violet: PropTypes.bool,
    ruby: PropTypes.bool,
    gold: PropTypes.bool,
    aqua: PropTypes.bool,
    dark: PropTypes.bool,
  };

  static defaultProps = {
    white: true,
  };

  getColor () {
    const colors = [
      'neutral',
      'mint',
      'violet',
      'ruby',
      'gold',
      'aqua',
      'white',
    ];

    for (var i = 0; i < colors.length; i++) {
      const color = colors[i];
      if (this.props[color]) {
        return color;
      }
    }
  }

  isDark (color) {
    if (color !== 'white' && color !== 'neutral') {
      return false;
    }

    return this.props.dark;
  }

  render () {
    const {
      children,
      className,
      ...others
    } = this.props;

    const color = this.getColor();
    const isDark = this.isDark(color);

    const classes = cx(
      theme.island,
      className,
      theme[color],
      {
        [theme.dark]: isDark,
      }
    );

    const rest = omit(others, [
      'white',
      'neutral',
      'mint',
      'violet',
      'ruby',
      'gold',
      'aqua',
      'dark',
    ]);

    return (
      <div data-teamleader-ui="island" className={classes} {...rest}>
        {children}
      </div>
    );
  }
}

export default Island;
