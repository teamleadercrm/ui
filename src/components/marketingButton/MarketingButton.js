import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import LoadingSpinner from '../loadingSpinner';
import { UITextBody, UITextDisplay, UITextSmall } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

const textComponentMap = {
  tiny: UITextSmall,
  small: UITextBody,
  medium: UITextBody,
  large: UITextDisplay,
};

const Button = forwardRef(
  (
    {
      children,
      className,
      level,
      disabled,
      element,
      fullWidth,
      icon,
      iconPlacement,
      size,
      type,
      processing,
      onMouseUp,
      onMouseLeave,
      ...others
    },
    ref,
  ) => {
    const buttonRef = useRef();
    useImperativeHandle(ref, () => buttonRef.current);

    const handleMouseUp = (event) => {
      blur();
      if (onMouseUp) {
        onMouseUp(event);
      }
    };

    const handleMouseLeave = (event) => {
      blur();
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    };

    const blur = () => {
      const currentButtonRef = buttonRef.current;
      if (currentButtonRef.blur) {
        currentButtonRef.blur();
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

    const Text = textComponentMap[size];

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

Button.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.any,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Determines which kind of button to be rendered. */
  level: PropTypes.oneOf(['primary', 'secondary', 'link']),
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** If true, component will take the full width available. */
  fullWidth: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will show a loading spinner instead of label or children. */
  processing: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** Type of the button element. */
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  element: 'button',
  fullWidth: false,
  level: 'secondary',
  iconPlacement: 'left',
  processing: false,
  size: 'medium',
  type: 'button',
};

Button.displayName = 'MarketingButton';

export default Button;
