import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';

export interface ValueProps extends Omit<BoxProps, 'children'> {
  children?: ReactNode;
}

const Value: GenericComponent<ValueProps> = forwardRef<HTMLElement, ValueProps>(({ children, ...others }, ref) => (
  <Box display="flex" flex={1} overflow="hidden" {...others} ref={ref}>
    {children}
  </Box>
));

Value.displayName = 'LabelValuePair.Value';

export default Value;
