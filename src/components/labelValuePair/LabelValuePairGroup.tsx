import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import { Heading4 } from '../typography';

interface LabelValuePairGroupProps extends Omit<BoxProps, 'children'> {
  children: ReactNode;
  title?: string | ReactNode;
}

const LabelValuePairGroup: GenericComponent<LabelValuePairGroupProps> = ({ children, title, ...others }) => {
  return (
    <Box {...others}>
      <Heading4 color="neutral" marginBottom={2}>
        {title}
      </Heading4>
      {children}
    </Box>
  );
};

export default LabelValuePairGroup;
