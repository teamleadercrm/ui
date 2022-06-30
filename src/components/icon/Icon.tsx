import React, { ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export type COLORS = 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua' | 'teal';
export type TINTS = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';

interface IconProps extends Omit<BoxProps, 'children' | 'className'> {
  /** Element wrapped in Icon tags or sent as children prop */
  children?: ReactNode;
  /** Classname for the Icon component */
  className?: string;
  /** Color of the icon */
  color?: COLORS;
  /** Tint of the icon */
  tint?: TINTS;
  /** Opacity of the icon */
  opacity?: number;
}

const Icon: GenericComponent<IconProps> = ({
  children,
  className,
  color = 'teal',
  tint = 'normal',
  opacity = 0.84,
  ...others
}) => {
  const classNames = cx(theme[color], theme[tint], className);

  return (
    <Box className={classNames} alignItems="center" data-teamleader-ui="icon" display="flex" element="span" {...others}>
      {React.Children.map(children, (child) => {
        // Check if child is an actual React component
        // if so, pass the needed props. If not, just render it.
        if (!React.isValidElement(child)) {
          return child;
        }

        return React.cloneElement(child, {
          opacity,
        });
      })}
    </Box>
  );
};

export default Icon;
