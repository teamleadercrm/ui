import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import Box from '../box';
import LoadingSpinner from '../loadingSpinner';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';
import { BoxProps } from '../box/Box';

type Level = 'primary' | 'secondary' | 'link';
type Placement = 'left' | 'right';
type Size = 'tiny' | 'small' | 'medium' | 'large';

interface MarketingButtonProps extends Omit<BoxProps, 'ref'> {
  /** The content to display inside the button. */
  children?: ReactNode;
  /** A class name for the button to give custom styles. */
  className?: string;
  /** A custom element to be rendered */
  element?: Element | string;
  /** Determines which kind of button to be rendered. */
  level?: Level;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** If true, component will take the full width available. */
  fullWidth?: boolean;
  /** The icon displayed inside the button. */
  icon?: Element;
  /** The position of the icon inside the button. */
  iconPlacement?: Placement;
  /** The textual label displayed inside the button. */
  label?: number | string;
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave?: (event: React.MouseEvent) => void;
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp?: (event: React.MouseEvent) => void;
  /** If true, component will show a loading spinner instead of label or children. */
  processing?: boolean;
  /** Size of the button. */
  size?: Size;
  /** Type of the button element. */
  type?: string;
}

const textComponentMap = {
  tiny: UITextSmall,
  small: UITextBody,
  medium: UITextBody,
  large: UITextDisplay,
};

const MarketingButton = forwardRef(
  (
    {
      children,
      className = '',
      level = 'secondary',
      disabled,
      element = 'button',
      fullWidth = false,
      icon,
      iconPlacement = 'left',
      size = 'medium',
      type = 'button',
      processing = false,
      onMouseUp,
      onMouseLeave,
      ...others
    }: MarketingButtonProps,
    ref,
  ) => {
    const buttonRef = useRef<HTMLElement>();
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
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      level && theme[level],
      size && theme[size],
      {
        [theme['has-icon-only']]: !children || (Array.isArray(children) && !children[0]),
        [theme['is-disabled']]: disabled,
        [theme['is-full-width']]: fullWidth,
        [theme['is-processing']]: processing,
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
      'data-teamleader-ui': 'button',
    };

    const Text = size && textComponentMap[size];

    return (
      <Box {...props}>
        {icon && iconPlacement === 'left' && icon}
        {children && (
          <Text
            element="span"
            maxLines={1}
            marginLeft={icon && iconPlacement === 'left' ? 2 : 0}
            marginRight={icon && iconPlacement === 'right' ? 2 : 0}
          >
            {children}
          </Text>
        )}
        {icon && iconPlacement === 'right' && icon}
        {processing && (
          <LoadingSpinner
            className={theme['spinner']}
            color={level === 'primary' ? 'neutral' : 'violet'}
            size={size === 'tiny' || size === 'small' ? 'small' : 'medium'}
            tint={level === 'primary' ? 'lightest' : 'darkest'}
          />
        )}
      </Box>
    );
  },
);

MarketingButton.displayName = 'MarketingButton';

export default MarketingButton;
