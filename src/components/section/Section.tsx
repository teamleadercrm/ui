import React, { ReactNode } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

type Color = 'white' | 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua';
type Size = 'small' | 'medium' | 'large';

const SIZES: { [K in Size]: number } = {
  small: 3,
  medium: 4,
  large: 5,
};

interface SectionProps extends Omit<BoxProps, 'ref'> {
  children?: ReactNode;
  color?: Color;
  size?: Size;
}

const Section = ({ children, className, color = 'white', size = 'medium', ...rest }: SectionProps) => {
  const classNames = cx(theme['section'], className as string, theme[color]);

  return (
    <Box data-teamleader-ui="section" className={classNames} element="section" padding={SIZES[size]} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
