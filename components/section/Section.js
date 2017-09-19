import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([ 'white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua' ]),
    dark: PropTypes.bool,
  };

  static defaultProps = {
    white: true,
  };

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
      color,
      ...others
    } = this.props;

    const isDark = this.isDark(color);

    const classes = cx(
      theme.section,
      className,
      theme[color],
      {
        [theme.dark]: isDark,
      }
    );

    return (
      <div data-teamleader-ui="section" className={classes} {...others}>
        {children}
      </div>
    );
  }
}

export default Section;
