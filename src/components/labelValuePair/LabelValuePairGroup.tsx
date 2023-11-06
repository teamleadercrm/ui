import React, { ReactNode, forwardRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { Heading4 } from '../typography';

export interface LabelValuePairGroupProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  title?: string | ReactNode;
}

const LabelValuePairGroup: GenericComponent<LabelValuePairGroupProps> = forwardRef<
  HTMLElement,
  LabelValuePairGroupProps
>(({ children, title, ...others }, ref) => {
  return (
    <Box data-teamleader-ui="label-value-pair-group" {...others} ref={ref}>
      <Heading4 color="neutral" marginBottom={2}>
        {title}
      </Heading4>
      {children}
    </Box>
  );
});

LabelValuePairGroup.displayName = 'LabelValuePairGroup';

export default LabelValuePairGroup;
