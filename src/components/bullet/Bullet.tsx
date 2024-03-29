import React, { forwardRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { COLORS, SIZES, TINTS } from '../../constants';
import { GenericComponent } from '../../@types/types';

export interface BulletProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** A border color to give to the counter */
  borderColor?: (typeof COLORS)[number];
  /** A border tint to give to the counter */
  borderTint?: Exclude<(typeof TINTS)[number], 'normal'>;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The color of the bullet. */
  color?: (typeof COLORS)[number];
  /** The size of the bullet. */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
}

const Bullet: GenericComponent<BulletProps> = forwardRef<HTMLElement, BulletProps>(
  ({ className, color = 'neutral', size = 'medium', borderColor, borderTint, ...others }, ref) => {
    const classNames = cx(
      theme['bullet'],
      theme[color],
      theme[size],
      {
        [theme[`border-${borderColor}-${borderTint}`]]: borderColor && borderTint,
        [theme[`border-${borderColor}`]]: borderColor && !borderTint,
      },
      className,
    );

    return <Box data-teamleader-ui="bullet" className={classNames} element="span" ref={ref} {...others} />;
  },
);

Bullet.displayName = 'Bullet';

export default Bullet;
