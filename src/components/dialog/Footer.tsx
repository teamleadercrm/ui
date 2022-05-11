import React, { ReactNode } from 'react';

import { Box } from '../../index';

interface FooterProps {
  /** The content to display inside the dialog. */
  children: ReactNode;
}

const Footer = ({ children, ...rest }: FooterProps) => {
  return (
    <Box padding={4} borderColor="neutral" borderTopWidth={1} borderTint="normal" {...rest}>
      {children}
    </Box>
  );
};

export default Footer;
