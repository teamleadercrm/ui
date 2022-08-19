import cx from 'classnames';
import React, { forwardRef, ReactNode } from 'react';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../../@types/utils';
import { COLORS, SIZES } from '../../constants';
import Box from '../box';
import { BoxProps } from '../box/Box';
import LoadingSpinner from '../loadingSpinner';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import theme from './theme.css';

export enum BUTTON_LEVELS {
  outline = 'outline',
  primary = 'primary',
  secondary = 'secondary',
  destructive = 'destructive',
  link = 'link',
  timer = 'timer',
}

const textComponentMap = {
  tiny: UITextSmall,
  small: UITextBody,
  medium: UITextBody,
  large: UITextDisplay,
};

export interface ButtonProps extends BoxProps {
  /** The content to display inside the button. */
  children?: ReactNode;
  /** A class name for the button to give custom styles. */
  className?: string;
  /** The color which the button should have when 'level' is set to 'outline' */
  color?: typeof COLORS[number] | 'white';
  /** A custom element to be rendered */
  element?: any;
  /** If true, component will be disabled. */
  disabled?: boolean;
  /** If true, component will be shown in an active state */
  active?: boolean;
  /** If true, component will take the full width available. */
  fullWidth?: boolean;
  /** The icon displayed inside the button. */
  icon?: ReactNode;
  /** The position of the icon inside the button. */
  iconPlacement?: 'left' | 'right';
  /** The textual label displayed inside the button. */
  label?: string;
  /** Determines which kind of button to be rendered. */
  level?: `${BUTTON_LEVELS}`;
  /** If true, component will show a loading spinner instead of label or children. */
  processing?: boolean;
  /** Size of the button. */
  size?: Exclude<typeof SIZES[number], 'fullscreen' | 'smallest' | 'hero'>;
  /** Type of the button element. */
  type?: string;
}

const Button = forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      color = 'teal',
      children,
      className,
      disabled = false,
      element = 'button',
      active = false,
      fullWidth = false,
      icon,
      iconPlacement = 'left',
      label,
      level = BUTTON_LEVELS.secondary,
      size = 'medium',
      type = 'button',
      processing = false,
      ...others
    }: PolymorphicComponentPropsWithRef<T, ButtonProps>,
    ref: PolymorphicRef<T>,
  ) => {
    const getSpinnerColor = () => {
      switch (level) {
        case BUTTON_LEVELS.secondary:
          return 'teal';
        case BUTTON_LEVELS.outline:
          return color === 'white' ? 'neutral' : color;
        case BUTTON_LEVELS.link:
          return 'aqua';
        default:
          return 'neutral';
      }
    };

    const getSpinnerTint = () => {
      switch (level) {
        case BUTTON_LEVELS.secondary:
          return 'darkest';
        case BUTTON_LEVELS.outline:
          return color === 'white' ? 'lightest' : 'darkest';
        case BUTTON_LEVELS.link:
          return 'dark';
        default:
          return 'lightest';
      }
    };

    const getSpinnerSize = () => {
      switch (size) {
        case 'tiny':
        case 'small':
          return 'small';
        default:
          return 'medium';
      }
    };

    const classNames = cx(
      theme['reset-box-sizing'],
      theme['reset-font-smoothing'],
      theme['button-base'],
      theme['button'],
      theme[level],
      theme[size],
      {
        [theme['has-icon-only']]: (!children && !label) || (Array.isArray(children) && !children[0] && !label),
        [theme[color]]: level === BUTTON_LEVELS.outline,
        [theme['is-disabled']]: disabled,
        [theme['is-full-width']]: fullWidth,
        [theme['is-processing']]: processing,
        [theme['is-active']]: active,
      },
      className,
    );

    const Text = textComponentMap[size];

    return (
      <Box
        {...others}
        className={classNames}
        data-teamleader-ui="button"
        disabled={element === 'button' ? disabled : undefined}
        element={element}
        ref={ref}
        type={element === 'button' ? type : undefined}
      >
        {icon && iconPlacement === 'left' && icon}
        {(label || children) && (
          <Text
            element="span"
            maxLines={1}
            marginLeft={icon && iconPlacement === 'left' && 2}
            marginRight={icon && iconPlacement === 'right' && 2}
          >
            {label}
            {children}
          </Text>
        )}
        {icon && iconPlacement === 'right' && icon}
        {processing && (
          <LoadingSpinner
            className={theme['spinner']}
            color={getSpinnerColor()}
            size={getSpinnerSize()}
            tint={getSpinnerTint()}
          />
        )}
      </Box>
    );
  },
);

Button.displayName = 'Button';

export default Button;
