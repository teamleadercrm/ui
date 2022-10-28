import React, { forwardRef, ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { COLORS, TINTS } from '../../constants';
import isComponentOfType from '../utils/is-component-of-type';

export interface IconProps extends Omit<BoxProps, 'children' | 'className'> {
  /** Element wrapped in Icon tags or sent as children prop */
  children?: ReactNode;
  /** Classname for the Icon component */
  className?: string;
  /** Color of the icon */
  color?: typeof COLORS[number];
  /** Tint of the icon */
  tint?: typeof TINTS[number];
  /** Opacity of the icon */
  opacity?: number;
}

const Icon: GenericComponent<IconProps> = forwardRef<HTMLElement, IconProps>(
  ({ children, className, color = 'teal', tint = 'normal', opacity = 0.84, ...others }, ref) => {
    const classNames = cx(theme[color], theme[tint], className);

    return (
      <Box
        className={classNames}
        alignItems="center"
        data-teamleader-ui="icon"
        display="flex"
        element="span"
        ref={ref}
        {...others}
      >
        {React.Children.map(children, (child) => {
          // Check if child is an actual React component
          // if so, pass the needed props. If not, just render it.
          if (!React.isValidElement(child) || !isComponentOfType(Icon, child)) {
            return child;
          }

          return React.cloneElement(child, {
            opacity,
          });
        })}
      </Box>
    );
  },
);

Icon.displayName = 'Icon';

export default Icon;
