import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../index';

const Footer = ({ children, ...rest }) => {
  return (
    <Box padding={4} borderColor="neutral" borderTopWidth={1} borderTint="normal" {...rest}>
      {children}
    </Box>
  );
};

Footer.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
};

export default Footer;
