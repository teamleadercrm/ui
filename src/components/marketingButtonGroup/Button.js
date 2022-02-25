import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { UITextBody } from '../typography';
import cx from 'classnames';
import theme from './theme.css';

const Button = forwardRef(({ onMouseUp, onMouseLeave, children, className, active, label, ...others }, ref) => {
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
    if (currentButtonRef) {
      currentButtonRef.blur();
    }
  };

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
    element: 'button',
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
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
});

Button.propTypes = {
  /** The content to display inside the button. */
  children: PropTypes.any,
  /** A class name for the button to give custom styles. */
  className: PropTypes.string,
  /** If true, component will be shown in an active state */
  active: PropTypes.bool,
  /** The textual label displayed inside the button. */
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
};

Button.defaultProps = {
  className: '',
};

Button.displayName = 'MarketingButtonGroup.Button';

export default Button;
