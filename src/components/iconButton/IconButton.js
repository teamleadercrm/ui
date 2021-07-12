import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Icon from '../icon';
import cx from 'classnames';
import buttonTheme from '../button/theme.css';
import theme from './theme.css';

const IconButton = forwardRef(
  (
    {
      children,
      className,
      disabled,
      element,
      icon,
      size,
      color,
      tint,
      selected,
      type,
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
      buttonTheme['button-base'],
      theme['icon-button'],
      theme[`is-${size}`],
      {
        [theme['is-disabled']]: disabled,
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

IconButton.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.node,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** The icon displayed inside the button. */
  icon: PropTypes.element,
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
  /** Size of the button. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** The color which the icon should have */
  color: PropTypes.oneOf(['neutral', 'white', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal']),
  /** The tint which the icon should have */
  tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
  /** Type of the button element. */
  type: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  element: 'button',
  size: 'medium',
  color: 'neutral',
  tint: 'darkest',
  type: 'button',
};

IconButton.displayName = 'IconButton';

export default IconButton;
