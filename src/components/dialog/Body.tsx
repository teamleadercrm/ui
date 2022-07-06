import React, { forwardRef, ReactNode, RefObject, UIEventHandler } from 'react';
import { GenericComponent } from '../../@types/types';

import { Box } from '../../index';
import { BoxProps } from '../box/Box';

export interface BodyProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the dialog. */
  children?: ReactNode;
  /** If true, the content will be scrollable when it exceeds the available height. */
  scrollable?: boolean;
  handleShowScrollShadow: (show: boolean) => void;
}

const Body: GenericComponent<BodyProps> = forwardRef<HTMLElement, BodyProps>(
  ({ scrollable, children, handleShowScrollShadow, ...rest }, ref) => {
    if (!scrollable) {
      return <div ref={ref as RefObject<HTMLDivElement>}>{children}</div>;
    }

    const handleWrapperScroll: UIEventHandler<HTMLElement> = (event) => {
      if (!event.target) {
        return;
      }
      const element = event.target as HTMLDivElement;
      handleShowScrollShadow(element.scrollHeight - element.scrollTop === element.clientHeight);
    };
    return (
      <Box display="flex" flexDirection="column" overflowY="auto" {...rest} ref={ref} onScroll={handleWrapperScroll}>
        {children}
      </Box>
    );
  },
);

Body.displayName = 'Body';

export default Body;
