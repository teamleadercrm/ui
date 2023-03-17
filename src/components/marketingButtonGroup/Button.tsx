import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import Box from '../box';
import { UITextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';

export interface ButtonProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the button. */
  children?: ReactNode;
  /** A class name for the button to give custom styles. */
  className?: string;
  /** If true, component will be shown in an active state */
  active?: boolean;
  /** The textual label displayed inside the button. */
  label?: number | string;
  /** Button value in case it's being in a button group. */
  value?: string;
}

const Button: GenericComponent<ButtonProps> = forwardRef<HTMLElement, ButtonProps>(
  ({ children, className = '', active, label, ...others }, ref) => {
    const buttonRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(ref, () => buttonRef.current);

    const classNames = cx(
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      {
        [theme['is-active']]: active,
      },
      className,
    );

    const props = {
      ...others,
      ref: buttonRef,
      className: classNames,
      element: 'button' as React.ElementType,
      'data-teamleader-ui': 'button',
    };

    return (
      <Box {...props}>
        {(label || children) && (
          <UITextBody element="span" maxLines={1}>
            {label}
            {children}
          </UITextBody>
        )}
      </Box>
    );
  },
);

Button.displayName = 'MarketingButtonGroup.Button';

export default Button;
