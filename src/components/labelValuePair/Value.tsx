import React, { ReactNode } from 'react';
import Box from '../box';

interface ValueProps {
  children: ReactNode;
}

const Value = ({ children, ...others }: ValueProps) => (
  <Box display="flex" flex={1} overflow="hidden" {...others}>
    {children}
  </Box>
);

export default Value;
