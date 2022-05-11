import React, { ReactNode, forwardRef } from 'react';

import { Box } from '../../index';

interface BodyProps {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
}

const Body = forwardRef(({ scrollable, children, ...rest }: BodyProps, ref) => {
  if (!scrollable) {
    return <div ref={ref}>{children}</div>;
  }

  return (
    <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={ref}>
      {children}
    </Box>
  );
});

Body.displayName = 'Body';

export default Body;
