import React, { PureComponent } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

interface BulletProps {
  borderColor?: 'neutral' | 'mint' | 'aqua' | 'violet' | 'teal' | 'gold' | 'ruby';
  borderTint?: 'darkest' | 'dark' | 'light' | 'lightest';
  className?: string;
  color?: 'neutral' | 'mint' | 'aqua' | 'violet' | 'teal' | 'gold' | 'ruby';
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
