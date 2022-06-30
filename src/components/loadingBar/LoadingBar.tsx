import cx from 'classnames';
import React from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

type Size = 'small' | 'medium' | 'large';

type Color = 'aqua' | 'gold' | 'mint' | 'neutral' | 'ruby' | 'teal' | 'violet';

type Tint = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';

export interface LoadingBarProps extends Omit<BoxProps, 'className' | 'size'> {
  /** A class name for the wrapper to add custom classes */
  className?: string;
  /** The color of the components */
  color?: Color;
  /** Size of the component */
  size?: Size;
  /** The tint of the components color */
  tint?: Tint;
}

const LoadingBar: GenericComponent<LoadingBarProps> = ({
  className,
  color = 'mint',
  size = 'small',
  tint = 'normal',
  ...others
}) => {
  const classNames = cx(
    theme['loading-bar'],
    theme[`is-${color}`],
    theme[`is-${size}`],
    theme[`is-${tint}`],
    className,
  );
  return (
    <Box data-teamleader-ui="loading-bar" className={classNames} {...others}>
      <div className={theme['loading-bar-indicator']} />
    </Box>
  );
};

export default LoadingBar;
