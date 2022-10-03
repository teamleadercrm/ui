import React, { forwardRef, isValidElement, ReactElement } from 'react';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES } from '../../constants';

import Box, { pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';

interface IslandGroupProps extends Omit<BoxProps, 'size'> {
  /** The color of the child Islands */
  color?: typeof COLORS[number] | 'white';
  /** The orientation in which the Islands are layed out */
  direction?: 'horizontal' | 'vertical';
  /** The size of the child Islands */
  size?: keyof typeof SIZES;
}

const IslandGroup: GenericComponent<IslandGroupProps> = forwardRef<HTMLElement, IslandGroupProps>(
  ({ children: originalChildren, className, color, direction = 'horizontal', size, ...otherProps }, ref) => {
    const boxProps = pickBoxProps(otherProps);
    const children: ReactElement[] = [];

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

export default IslandGroup;
