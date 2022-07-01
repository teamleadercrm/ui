import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface LinkProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the link. */
  children: ReactNode;
  /** A class name for the link to give custom styles. */
  className?: string;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** If true, the link style inherits the parent element style. */
  inherit?: boolean;
  /** If true, the underline behavior will be inverted. */
  inverse?: boolean;
  /** A custom element to be rendered */
  element?: React.ElementType;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: (event: React.MouseEvent) => void;
  /** If true, component will be shown in a selected state */
  selected?: boolean;
}

const Link: GenericComponent<LinkProps> = forwardRef<HTMLElement, LinkProps>(
  (
    {
      children,
      className = '',
      disabled = false,
      element = 'a',
      inherit = true,
      inverse = false,
      selected,
      onMouseUp,
      onMouseLeave,
      ...others
    },
    ref,
  ) => {
    const linkRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => linkRef.current);

    const blur = () => {
      const currentLinkRef = linkRef.current;
      if (currentLinkRef?.blur) {
        currentLinkRef.blur();
      }
    };

    const handleMouseUp = (event: React.MouseEvent) => {
      blur();
      onMouseUp && onMouseUp(event);
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
      blur();
      onMouseLeave && onMouseLeave(event);
    };

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['link'],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-inverse']]: inverse,
        [theme['is-selected']]: selected,
      },
      className,
    );

    return (
      <Box
        element={element}
        ref={linkRef}
        className={classNames}
        data-teamleader-ui="link"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...others}
      >
        {children}
      </Box>
    );
  },
);

Link.displayName = 'Link';

export default Link;
