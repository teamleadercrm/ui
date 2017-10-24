import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

const SIZES = {
  small: {
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  medium: {
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  large: {
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
};

class Section extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['white', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
    dark: PropTypes.bool,
    size: PropTypes.oneOf(Object.keys(SIZES)),
  };

  static defaultProps = {
    color: 'white',
    size: 'medium',
  };

  isDark(color) {
    if (color !== 'white' && color !== 'neutral') {
      return false;
    }

    return this.props.dark;
  }

  render() {
    const { children, className, color, size, ...others } = this.props;

    const isDark = this.isDark(color);

    const classNames = cx(theme['section'], className, theme[color], {
      [theme['dark']]: isDark,
    });

    const rest = omit(others, ['dark']);

    return (
      <Box data-teamleader-ui="section" className={classNames} element="section" {...SIZES[size]} {...rest}>
        {children}
      </Box>
    );
  }
}

export default Section;
