import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import omit from 'lodash.omit';
import theme from './theme.css';
import { elementIsDark } from '../utils/utils';

const SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

class Island extends PureComponent {
  render() {
    const { children, className, color, dark, size, ...others } = this.props;

    const isDark = elementIsDark(color, dark);

    const classNames = cx(theme['island'], className, theme[color], {
      [theme['dark']]: isDark,
    });

    const rest = omit(others, ['dark']);

    return (
      <Box data-teamleader-ui="island" className={classNames} padding={SIZES[size]} {...rest}>
        {children}
      </Box>
    );
  }
}

Island.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  dark: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

Island.defaultProps = {
  color: 'white',
  size: 'medium',
};

Island.displayName = 'Island';

export default Island;
