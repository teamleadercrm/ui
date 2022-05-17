import cx from 'classnames';
import React from 'react';
import Box from '../box';
import theme from './theme.css';

type Size = 'small' | 'medium';

type Color = 'aqua' | 'gold' | 'mint' | 'neutral' | 'ruby' | 'teal' | 'violet';

type Tint = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';

export interface LoadingSpinnerProps {
  /** A class name for the wrapper to add custom classes */
  className?: string;
  /** The color of the components */
  color?: Color;
  /** Size of the component */
  size?: Size;
  /** The tint of the components color */
  tint?: Tint;
}
const LoadingSpinner = ({
  className,
  color = 'teal',
  size = 'medium',
  tint = 'darkest',
  ...others
}: LoadingSpinnerProps) => {
  const classNames = cx(
    theme['loading-spinner'],
    theme[`is-${color}`],
    theme[`is-${size}`],
    theme[`is-${tint}`],
    className,
  );
  return <Box data-teamleader-ui="loading-spinner" className={classNames} {...others} />;
};

export default LoadingSpinner;
