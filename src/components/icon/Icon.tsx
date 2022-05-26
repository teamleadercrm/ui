import React, { ReactElement } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

export type COLOURS = 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua' | 'teal';
export type TINTS = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';

interface IconProps {
  /** Element wrapped in Icon tags or sent as children prop */
  children?: ReactElement | ReactElement[];
  /** Classname for the Icon component */
  className?: string;
  /** Color of the icon */
  color?: COLOURS;
  /** Tint of the icon */
  tint?: TINTS;
  /** Opacity of the icon */
  opacity?: number;
  /** For other props */
  [key: string]: unknown;
}

const Icon = ({ children, className, color = 'teal', tint = 'normal', opacity = 0.84, ...others }: IconProps) => {
  const classNames = cx(theme[color], theme[tint], className);

  return (
    <Box className={classNames} alignItems="center" data-teamleader-ui="icon" display="flex" element="span" {...others}>
      {React.Children.map(children, (child) => {
        // Check if child is an actual React component
        // if so, pass the needed props. If not, just render it.
        if (!child?.type) {
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
