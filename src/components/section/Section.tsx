import cx from 'classnames';
import React, { ReactNode } from 'react';
import { PolymorphicComponentProps } from '../../@types/utils';
import { COLORS, SIZES } from '../../constants';
import Box from '../box';
import { BoxProps, Padding } from '../box/Box';
import theme from './theme.css';

const PADDINGS: Record<'small' | 'medium' | 'large', Padding> = {
  small: 3,
  medium: 4,
  large: 5,
};

interface SectionProps extends BoxProps {
  children?: ReactNode;
  color?: Exclude<typeof COLORS[number], 'teal'> | 'white';
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
}

const Section = ({
  children,
  className,
  color = 'white',
  size = 'medium',
  ...rest
}: PolymorphicComponentProps<'section', SectionProps>) => {
  const classNames = cx(theme['section'], className as string, theme[color]);

  return (
    <Box data-teamleader-ui="section" className={classNames} element="section" padding={PADDINGS[size]} {...rest}>
      {children}
    </Box>
  );
};

export default Section;
