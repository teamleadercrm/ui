import React, { PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Box } from '../../index';

class Body extends PureComponent {
  render() {
    const { scrollable, children, forwardedRef, ...rest } = this.props;

    if (!scrollable) {
      return children;
    }

    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={forwardedRef}>
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

const ForwardedBody = forwardRef((props, ref) => <Body {...props} forwardedRef={ref} />);

ForwardedBody.displayName = 'Body';

export default ForwardedBody;
