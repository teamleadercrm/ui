import React, { ReactNode } from 'react';
import Box from '../box';
import { Heading4 } from '../typography';

interface LabelValuePairGroupProps {
  children: ReactNode;
  title: string | ReactNode;
}

const LabelValuePairGroup = ({ children, title, ...others }: LabelValuePairGroupProps) => {
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
