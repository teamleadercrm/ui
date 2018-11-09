import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box, { pickBoxProps } from '../box';
import theme from './theme.css';

class IslandGroup extends PureComponent {
  render() {
    const { children, className, color, dark, direction, size, ...otherProps } = this.props;

    const boxProps = pickBoxProps(otherProps);

    const classNames = cx(theme[`direction-${direction}`], theme['island-group'], className);

    return (
      <Box {...boxProps} className={classNames}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            ...child.props,
            color: color || child.props.color,
            dark: dark || child.props.dark,
            size: size || child.props.size,
          });
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
  direction: 'horizontal',
};

IslandGroup.displayName = 'IslandGroup';

export default IslandGroup;
