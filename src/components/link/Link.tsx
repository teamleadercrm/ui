import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

interface LinkProps extends Omit<BoxProps, 'ref'> {
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
  element?: Element | string;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: () => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: () => void;
  /** If true, component will be shown in a selected state */
  selected?: boolean;
}

/** @type {React.ComponentType<any>} */
const Link = forwardRef(
  (
    {
      children = '',
      className,
      disabled = false,
      element = 'a',
      inherit = true,
      inverse = false,
      selected,
      onMouseUp,
      onMouseLeave,
      ...others
    }: LinkProps,
    ref,
  ) => {
    const linkRef = useRef<HTMLElement>();
    useImperativeHandle(ref, () => linkRef.current);

    const blur = () => {
      const currentLinkRef = linkRef.current;
      if (currentLinkRef?.blur) {
        currentLinkRef.blur();
      }
    };

    const handleMouseUp = () => {
      blur();
      onMouseUp && onMouseUp();
    };

    const handleMouseLeave = () => {
      blur();
      onMouseLeave && onMouseLeave();
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
