import React, { ReactNode, forwardRef, RefObject } from 'react';
import { GenericComponent } from '../../@types/types';

import { Box } from '../../index';
import { BoxProps } from '../box/Box';

export interface BodyProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
}

const Body: GenericComponent<BodyProps> = forwardRef<HTMLElement, BodyProps>(
  ({ scrollable, children, ...rest }, ref) => {
    if (!scrollable) {
      return <div ref={ref as RefObject<HTMLDivElement>}>{children}</div>;
    }

    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={ref}>
        {children}
      </Box>
    );
  },
);

Body.displayName = 'Body';

export default Body;
