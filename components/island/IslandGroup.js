import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';
import Island from './Island';

class IslandGroup extends PureComponent {
  isDark(color) {
    if (color !== 'white' && color !== 'neutral') {
      return false;
    }

    return this.props.dark;
  }
  render() {
    const { children, className, color, size } = this.props;

    const isDark = this.isDark(color);

    const classNames = cx(theme['segmented'], theme['island'], theme[color], { [theme['dark']]: isDark }, className);

    return (
      <Box className={classNames} padding={0}>
        {React.Children.map(children, child => {
          return (
            <Island {...child.props} color={color} dark={isDark} size={size}>
              {child.props.children}
            </Island>
          );
        })}
      </Box>
    );
  }
}

IslandGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  dark: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IslandGroup.defaultProps = {
  color: 'white',
};

export default IslandGroup;
