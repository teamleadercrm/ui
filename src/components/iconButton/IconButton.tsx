import React, { useRef, useImperativeHandle, forwardRef, ReactNode } from 'react';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import buttonTheme from '../button/theme.css';
import theme from './theme.css';
import LoadingSpinner from '../loadingSpinner';
import { BoxProps } from '../box/Box';

type SIZES = 'small' | 'medium' | 'large';
type TINTS = 'lightest' | 'light' | 'normal' | 'dark' | 'darkest';
type COLOURS = 'neutral' | 'white' | 'mint' | 'violet' | 'ruby' | 'gold' | 'aqua' | 'teal';

interface IconButtonProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the button. */
  children?: ReactNode;
  /** A class name for the button to give custom styles. */
  className?: string;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** A custom element to be rendered */
  element?: HTMLElement | string;
  /** The icon displayed inside the button. */
  icon?: HTMLElement;
  /** Size of the button. */
  size?: SIZES;
  /** The color which the icon should have */
  color?: COLOURS;
  /** The tint which the icon should have */
  tint?: TINTS;
  /** If true, component will be shown in a selected state */
  selected?: boolean;
  /** Type of the button element. */
  type?: string;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: (e: React.MouseEvent) => void;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: (e: React.MouseEvent) => void;
  /** If true, component will show a loading spinner instead of icon or children. */
  processing?: boolean;
}

const IconButton = forwardRef(
  (
    {
      children,
      className = '',
      disabled,
      element = 'button',
      icon,
      size = 'medium',
      color = 'neutral',
      tint = 'darkest',
      selected,
      type = 'button',
      onMouseUp,
      onMouseLeave,
      processing = false,
      ...others
    }: IconButtonProps,
    ref,
  ) => {
    const buttonRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    const blur = () => {
      const currentButtonRef = buttonRef.current;
      if (currentButtonRef?.blur) {
        currentButtonRef.blur();
      }
    };

    const handleMouseUp = (event: React.MouseEvent) => {
      blur();
      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
      blur();
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const classNames = cx(
      buttonTheme['button-base'],
      theme['icon-button'],
      theme[`is-${size}`],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-processing']]: processing,
        [theme['is-selected']]: selected,
      },
      className,
    );

    const props = {
      ...others,
      ref: buttonRef,
      className: classNames,
      disabled: element === 'button' ? disabled : null,
      element: element,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
      type: element === 'button' ? type : null,
      'data-teamleader-ui': 'icon-button',
    };

    if (processing) {
      return (
        <Box {...props}>
          <LoadingSpinner
            className={theme['spinner']}
            color={color === 'white' ? 'neutral' : color}
            size={size === 'small' ? 'small' : 'medium'}
            tint={tint}
          />
        </Box>
      );
    }

    return (
      <Box {...props}>
        <Icon color={color === 'white' ? 'neutral' : color} tint={color === 'white' ? 'lightest' : tint}>
          {icon}
        </Icon>
        {children}
      </Box>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
