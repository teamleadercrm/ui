import React, { forwardRef, useRef, useImperativeHandle, ReactNode } from 'react';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';

export interface MarketingLinkProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the link. */
  children: ReactNode;
  /** A class name for the link to give custom styles. */
  className?: string;
  /** A custom element to be rendered */
  element?: React.ElementType;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: (event: React.MouseEvent) => void;
}

const MarketingLink: GenericComponent<MarketingLinkProps> = forwardRef<HTMLElement, MarketingLinkProps>(
  ({ children, className = '', element = 'a', ...others }, ref) => {
    const linkRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => linkRef.current);

    const classNames = cx(uiUtilities['reset-font-smoothing'], theme['link'], className);

    return (
      <Box element={element} ref={linkRef} className={classNames} data-teamleader-ui="marketing-link" {...others}>
        {children}
      </Box>
    );
  },
);

MarketingLink.displayName = 'MarketingLink';

export default MarketingLink;
