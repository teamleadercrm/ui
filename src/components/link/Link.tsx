import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import React, { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import theme from './theme.css';

export interface LinkProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the link. */
  children?: ReactNode;
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
  /** If true, component will be shown in a selected state */
  selected?: boolean;
}

const Link: GenericComponent<LinkProps> = forwardRef<HTMLElement, LinkProps>(
  (
    { children, className = '', disabled = false, element = 'a', inherit = true, inverse = false, selected, ...others },
    ref,
  ) => {
    const linkRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => linkRef.current);

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
      <Box element={element} ref={linkRef} className={classNames} data-teamleader-ui="link" {...others}>
        {children}
      </Box>
    );
  },
);

Link.displayName = 'Link';

export default Link;
