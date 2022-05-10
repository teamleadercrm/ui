import uiTypography from '@teamleader/ui-typography';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { ElementType, forwardRef, HTMLProps, ReactElement, ReactNode } from 'react';
import Box, { pickBoxProps } from '../box';
import theme from './theme.css';

interface BadgedLinkProps extends HTMLProps<HTMLButtonElement> {
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
      ...others
    }: BadgedLinkProps,
    ref,
  ) => {
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
      <Box element={element} ref={pickBoxProps(ref)} className={classNames} data-teamleader-ui="badgedLink" {...others}>
        {iconPlacement === 'left' && icon}
        {children}
        {iconPlacement === 'right' && icon}
      </Box>
    );
  },
);

BadgedLink.displayName = 'BadgedLink';

export default BadgedLink;
