import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../index';

class Body extends PureComponent {
  render() {
    const { scrollable, children, ...rest } = this.props;

    if (!scrollable) {
      return children;
    }

    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest}>
        {children}
      </Box>
    );
  }
}

Body.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable: PropTypes.bool,
};

export default Body;
