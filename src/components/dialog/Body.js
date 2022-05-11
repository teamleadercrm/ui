import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../index';

const Body = forwardRef(({ scrollable, children, ...rest }, ref) => {
  if (!scrollable) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={ref}>
      {children}
    </Box>
  );
});

Body.propTypes = {
  /** The content to display inside the dialog. */
  children: PropTypes.any,
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable: PropTypes.bool,
};

Body.displayName = 'Body';

export default Body;
