import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';

const spacings = {
  'small' : 3,
  'medium' : 4,
  'large' : 5,
};

class Island extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
    dark: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
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

    const classes = cx(theme.island, className, theme[color], {
      [theme.dark]: isDark,
    });

    const rest = omit(others, ['dark']);

    return (
      <Box data-teamleader-ui="island" className={classes} padding={spacings[size]} {...rest}>
        {children}
      </Box>
    );
  }
}

export default Island;
