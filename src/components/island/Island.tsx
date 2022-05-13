import React from 'react';
import Box, { pickBoxProps } from '../box';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

const SIZES = {
  small: 3,
  medium: 4,
  large: 5,
};

interface IslandProps extends Omit<BoxProps, 'size'> {
  color?: 'neutral' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua' | 'white';
  size?: keyof typeof SIZES;
}

const Island = ({ children, className, color = 'white', size = 'medium', onClick, ...others }: IslandProps) => {
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
      padding={SIZES[size]}
      onClick={onClick}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default Island;
