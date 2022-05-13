import React, { forwardRef, isValidElement } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';

/** @type {React.ComponentType<any>} */
const IslandGroup = forwardRef(
  ({ children: originalChildren, className, color, direction, size, ...otherProps }, ref) => {
    const boxProps = pickBoxProps(otherProps);
    const children = [];

    React.Children.forEach(originalChildren, (child) => {
      if (isValidElement(child)) {
        children.push(child);
      }
    });

    const hasMoreThanOneChild = children.length > 1;

    return (
      <Box
        ref={ref}
        {...boxProps}
        className={className}
        display="flex"
        flexDirection={direction === 'horizontal' ? 'row' : 'column'}
      >
        {React.Children.map(children, (child, index) => {
          const isFirstChild = index === 0;
          const isLastChild = index === children.length - 1;

          return React.cloneElement(child, {
            ...(!isFirstChild &&
              !isLastChild && {
                borderRadius: 'square',
              }),
            ...(direction === 'horizontal' &&
              !isFirstChild && {
                borderLeftWidth: 0,
              }),
            ...(direction === 'horizontal' &&
              hasMoreThanOneChild &&
              isFirstChild && {
                borderBottomRightRadius: 'square',
                borderTopRightRadius: 'square',
              }),
            ...(direction === 'horizontal' &&
              hasMoreThanOneChild &&
              isLastChild && {
                borderBottomLeftRadius: 'square',
                borderTopLeftRadius: 'square',
              }),
            ...(direction === 'vertical' &&
              !isFirstChild && {
                borderTopWidth: 0,
              }),
            ...(direction === 'vertical' &&
              hasMoreThanOneChild &&
              isFirstChild && {
                borderBottomLeftRadius: 'square',
                borderBottomRightRadius: 'square',
              }),
            ...(direction === 'vertical' &&
              hasMoreThanOneChild &&
              isLastChild && {
                borderTopLeftRadius: 'square',
                borderTopRightRadius: 'square',
              }),
            ...child.props,
            color: color || child.props.color,
            size: size || child.props.size,
          });
        })}
      </Box>
    );
  },
);

IslandGroup.displayName = 'IslandGroup';

IslandGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

IslandGroup.defaultProps = {
  direction: 'horizontal',
};

export default IslandGroup;
