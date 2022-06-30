import cx from 'classnames';
import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps, Padding } from '../box/Box';
import theme from './theme.css';

type Color = 'white' | 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua';
type Size = 'small' | 'medium' | 'large';

const PADDINGS: Record<Size, Padding> = {
  small: 3,
  medium: 4,
  large: 5,
};

interface SectionProps extends Omit<BoxProps, 'ref'> {
  children?: ReactNode;
  color?: Color;
  size?: Size;
}

const Section: GenericComponent<SectionProps> = ({
  children,
  className,
  color = 'white',
  size = 'medium',
  ...rest
}) => {
  const classNames = cx(theme['section'], className as string, theme[color]);

  return (
    <Box data-teamleader-ui="section" className={classNames} element="section" padding={PADDINGS[size]} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
