import React, { forwardRef, isValidElement, ReactElement } from 'react';
import { GenericComponent } from '../../@types/types';

import Box, { pickBoxProps } from '../box';
import { IslandProps } from './Island';

export interface IslandGroupProps extends IslandProps {
  /** The orientation in which the Islands are layed out */
  direction?: 'horizontal' | 'vertical';
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
        data-teamleader-ui={otherProps['data-teamleader-ui'] ?? 'island-group'}
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
