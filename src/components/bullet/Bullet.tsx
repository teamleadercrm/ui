import React, { PureComponent } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { COLORS } from '../../constants';

interface BulletProps extends Omit<BoxProps, 'size' | 'ref'> {
  /** A border color to give to the counter */
  borderColor?: typeof COLORS[number];
  /** A border tint to give to the counter */
  borderTint?: 'darkest' | 'dark' | 'light' | 'lightest';
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** The color of the bullet. */
  color?: typeof COLORS[number];
  /** The size of the bullet. */
  size?: 'small' | 'medium' | 'large';
}

class Bullet extends PureComponent<BulletProps> {
  render() {
    const { className, color = 'neutral', size = 'medium', borderColor, borderTint, ...others } = this.props;
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

    return <Box data-teamleader-ui="bullet" className={classNames} element="span" {...others} />;
  }
}

export default Bullet;
