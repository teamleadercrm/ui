import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';

export interface ValueProps extends Omit<BoxProps, 'children'> {
  children?: ReactNode;
}

const Value: GenericComponent<ValueProps> = ({ children, ...others }) => (
  <Box display="flex" flex={1} overflow="hidden" {...others}>
    {children}
  </Box>
);

export default Value;
