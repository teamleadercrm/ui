import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../index';

class Footer extends PureComponent {
  render() {
    const { children, ...rest } = this.props;

    return (
      <Box justifyContent="flex-end" padding={4} {...rest}>
        {children}
      </Box>
    );
  }
}

Footer.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
};

export default Footer;
