import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import LoadingSpinner from '../loadingSpinner';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

export const BUTTON_LEVELS = {
  outline: 'outline',
  primary: 'primary',
  secondary: 'secondary',
  destructive: 'destructive',
  link: 'link',
  timer: 'timer',
};

const textComponentMap = {
  tiny: UITextSmall,
  small: UITextBody,
  medium: UITextBody,
  large: UITextDisplay,
};

/** @type {React.ComponentType<any>} */
const Button = forwardRef(
  (
    {
      color,
      level,
      children,
      className,
      disabled,
      element,
      active,
      fullWidth,
      icon,
      iconPlacement,
      label,
      size,
      type,
      processing,
      ...others
    },
    ref,
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

    const props = {
      ...others,
      ref: ref,
      className: classNames,
      disabled: element === 'button' ? disabled : null,
      element: element,
      type: element === 'button' ? type : null,
      'data-teamleader-ui': 'button',
    };

    const Text = textComponentMap[size];

    return (
      <Box {...props}>
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

Button.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.any,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** The color which the button should have when 'level' is set to 'outline' */
  color: PropTypes.oneOf(['teal', 'neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'white']),
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(Object.values(BUTTON_LEVELS)),
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** If true, component will be shown in an active state */
  active: PropTypes.bool,
  /** If true, component will take the full width available. */
  fullWidth: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** If true, component will show a loading spinner instead of label or children. */
  processing: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** Type of the button element. */
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  color: 'teal',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  processing: false,
  size: 'medium',
  type: 'button',
};

Button.displayName = 'Button';

export default Button;
