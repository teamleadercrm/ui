import React, { ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import Monospaced from '../typography/Monospaced';
import { COLORS, TINTS } from '../../constants';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

interface Props extends Omit<BoxProps, 'size' | 'ref'> {
  /** A border color to give to the counter */
  borderColor?: typeof COLORS[number];
  /** A border tint to give to the counter */
  borderTint?: typeof TINTS[number];
  /** The content to display inside the Counter */
  children?: ReactNode;
  /** A class name for the counter to give custom styles */
  className?: string;
  /** The color theme you want to style the counter in */
  color?: typeof COLORS[number];
  /** The value of the counter. */
  count: number;
  /** The max value of the counter. */
  maxCount: number;
  /** The size of the counter */
  size: 'small' | 'medium';
}

const Counter: GenericComponent<Props> = ({
  children,
  className,
  color = 'neutral',
  count,
  maxCount,
  size = 'medium',
  borderColor,
  borderTint,
  ...others
}) => {
  const classNames = cx(
    uiUtilities['reset-font-smoothing'],
    theme['counter'],
    theme[color],
    theme[size],
    {
      [theme[`border-${borderColor}-${borderTint}`]]: borderColor && borderTint,
      [theme[`border-${borderColor}`]]: borderColor && !borderTint,
    },
    className,
  );

  return (
    <Box className={classNames} element="span" {...others} data-teamleader-ui="counter">
      <Monospaced>{count > maxCount ? `${maxCount}+` : count}</Monospaced> {children}
    </Box>
  );
};

export default Counter;
