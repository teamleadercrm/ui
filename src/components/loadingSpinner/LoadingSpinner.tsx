import cx from 'classnames';
import React, { forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

type Size = 'small' | 'medium';

type Color = 'aqua' | 'gold' | 'mint' | 'neutral' | 'ruby' | 'teal' | 'violet';

type Tint = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';

export interface LoadingSpinnerProps extends Omit<BoxProps, 'className' | 'size'> {
  /** A class name for the wrapper to add custom classes */
  className?: string;
  /** The color of the components */
  color?: Color;
  /** Size of the component */
  size?: Size;
  /** The tint of the components color */
  tint?: Tint;
}
const LoadingSpinner: GenericComponent<LoadingSpinnerProps> = forwardRef<HTMLElement, LoadingSpinnerProps>(
  ({ className, color = 'teal', size = 'medium', tint = 'darkest', ...others }, ref) => {
    const classNames = cx(
      theme['loading-spinner'],
      theme[`is-${color}`],
      theme[`is-${size}`],
      theme[`is-${tint}`],
      className,
    );
    return <Box data-teamleader-ui="loading-spinner" className={classNames} {...others} ref={ref} />;
  },
);

LoadingSpinner.displayName = 'LoadingSpinner';
export default LoadingSpinner;
