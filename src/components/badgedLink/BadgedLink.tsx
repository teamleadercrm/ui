import uiTypography from '@teamleader/ui-typography';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { ElementType, forwardRef, ReactElement, ReactNode, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import theme from './theme.css';

interface BadgedLinkProps {
  /** The content to display inside the badged link. */
  children: ReactNode;
  /** A class name for the badged link to give custom styles. */
  className?: string;
  /** The icon displayed inside the button. */
  icon: ReactElement;
  /** The position of the icon inside the button. */
  iconPlacement?: 'left' | 'right';
  /** If true, the badged link style inherits the parent element style. */
  inherit?: boolean;
  /** A custom element to be rendered */
  element?: ElementType | undefined;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: () => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: () => void;
}

const BadgedLink = forwardRef(
  (
    {
      children,
      className = '',
      icon,
      iconPlacement = 'left',
      element = 'a',
      inherit = true,
      onMouseUp,
      onMouseLeave,
      ...others
    }: BadgedLinkProps,
    ref,
  ) => {
    const badgedLinkRef = useRef<HTMLButtonElement>();
    useImperativeHandle(ref, () => badgedLinkRef.current);

    const blur = () => {
      const currentBadgedLinkRef = badgedLinkRef.current;
      if (currentBadgedLinkRef) {
        currentBadgedLinkRef.blur();
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
      uiTypography['ui-text-body'],
      theme['badged-link'],
      {
        [theme['is-inherit']]: inherit,
        // Since children can be text node, we have to do spacing according to icon element
        [theme['is-left-icon-placed']]: iconPlacement === 'left',
      },
      className,
    );

    return (
      <Box
        element={element}
        ref={badgedLinkRef}
        className={classNames}
        data-teamleader-ui="badgedLink"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...others}
      >
        {iconPlacement === 'left' && icon}
        {children}
        {iconPlacement === 'right' && icon}
      </Box>
    );
  },
);

BadgedLink.displayName = 'BadgedLink';

export default BadgedLink;
