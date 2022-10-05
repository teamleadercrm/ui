import React from 'react';
import Box, { pickBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { COLORS, SIZES } from '../../constants';

const PADDING = {
  small: 3,
  medium: 4,
  large: 5,
};

export interface IslandProps extends Omit<BoxProps, 'size'> {
  /** A class name for the button to give custom styles. */
  className?: string;
  /** The color for the Island background and border */
  color?: Exclude<typeof COLORS[number], 'teal'> | 'white';
  /** Te size of the Island component */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;
}

const Island: GenericComponent<IslandProps> = ({
  children,
  className,
  color = 'white',
  size = 'medium',
  onClick,
  ...others
}: IslandProps) => {
  const classNames = cx(theme[color], className);
  const boxProps = pickBoxProps(others);

  return (
    <Box
      data-teamleader-ui="island"
      backgroundColor={color === 'white' ? 'neutral' : color}
      backgroundTint={color === 'neutral' ? 'light' : 'lightest'}
      borderRadius="rounded"
      borderColor={color === 'white' ? 'neutral' : color}
      borderTint="normal"
      borderBottomWidth={1}
      borderLeftWidth={1}
      borderRightWidth={1}
      borderTopWidth={1}
      className={classNames}
      padding={PADDING[size]}
      onClick={onClick}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default Island;