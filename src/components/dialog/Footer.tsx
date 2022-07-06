import React, { ReactNode } from 'react';
import { GenericComponent } from '../../@types/types';

import { Box } from '../../index';
import { BoxProps } from '../box/Box';

export interface FooterProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the dialog. */
  children: ReactNode;
}

const Footer: GenericComponent<FooterProps> = ({ children, ...rest }) => {
  return (
    <Box padding={4} borderColor="neutral" borderTopWidth={1} borderTint="normal" {...rest}>
      {children}
    </Box>
  );
};

export default Footer;
