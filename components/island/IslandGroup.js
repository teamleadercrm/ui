import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box, { pickBoxProps } from '../box';
import theme from './theme.css';
import Island from './Island';
import { elementIsDark } from '../utils/utils';

class IslandGroup extends PureComponent {
  render() {
    const { children, className, color, dark, direction, size, ...otherProps } = this.props;

    const boxProps = pickBoxProps(otherProps);
    const isDark = elementIsDark(color, dark);

    const classNames = cx(theme[`direction-${direction}`], theme['island-group'], className);

    return (
      <Box {...boxProps} className={classNames}>
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
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IslandGroup.defaultProps = {
  color: 'white',
  direction: 'horizontal',
};

export default IslandGroup;
