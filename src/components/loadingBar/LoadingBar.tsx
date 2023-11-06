import cx from 'classnames';
import React, { forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES, TINTS } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface LoadingBarProps extends Omit<BoxProps, 'className' | 'size'> {
  /** A class name for the wrapper to add custom classes */
  className?: string;
  /** The color of the components */
  color?: (typeof COLORS)[number];
  /** Size of the component */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  /** The tint of the components color */
  tint?: (typeof TINTS)[number];
}

const LoadingBar: GenericComponent<LoadingBarProps> = forwardRef<HTMLElement, LoadingBarProps>(
  ({ className, color = 'mint', size = 'small', tint = 'normal', ...others }, ref) => {
    const classNames = cx(
      theme['loading-bar'],
      theme[`is-${color}`],
      theme[`is-${size}`],
      theme[`is-${tint}`],
      className,
    );
    return (
      <Box data-teamleader-ui="loading-bar" className={classNames} {...others} ref={ref}>
        <div className={theme['loading-bar-indicator']} />
      </Box>
    );
  },
);

LoadingBar.displayName = 'LoadingBar';

export default LoadingBar;
