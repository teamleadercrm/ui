import cx from 'classnames';
import React, { forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES, TINTS } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface LoadingSpinnerProps extends Omit<BoxProps, 'className' | 'size'> {
  /** A class name for the wrapper to add custom classes */
  className?: string;
  /** The color of the components */
  color?: (typeof COLORS)[number];
  /** Size of the component */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'large' | 'fullscreen' | 'smallest' | 'hero'>;
  /** The tint of the components color */
  tint?: (typeof TINTS)[number];
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
