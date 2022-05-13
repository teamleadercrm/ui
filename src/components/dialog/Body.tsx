import React, { ReactNode, forwardRef, RefObject } from 'react';

import { Box } from '../../index';
import { BoxProps } from '../box/Box';

interface BodyProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
}

const Body = forwardRef(({ scrollable, children, ...rest }: BodyProps, ref) => {
  if (!scrollable) {
    return <div ref={ref as RefObject<HTMLDivElement>}>{children}</div>;
  }

  return (
    <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={ref}>
      {children}
    </Box>
  );
});

Body.displayName = 'Body';

export default Body;
