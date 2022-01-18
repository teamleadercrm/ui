import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

const BadgedLink = forwardRef(
  (
    {
      children,
      className,
      disabled,
      icon,
      iconPlacement,
      element,
      inherit,
      inverse,
      selected,
      onMouseUp,
      onMouseLeave,
      ...others
    },
    ref,
  ) => {
    const badgedLinkRef = useRef();
    useImperativeHandle(ref, () => badgedLinkRef.current);

    // const blur = () => {
    //   const currentLinkRef = linkRef.current;
    //   if (currentLinkRef.blur) {
    //     currentLinkRef.blur();
    //   }
    // };

    // const handleMouseUp = (event) => {
    //   blur();
    //   onMouseUp && onMouseUp(event);
    // };
    //
    // const handleMouseLeave = (event) => {
    //   blur();
    //   onMouseLeave && onMouseLeave(event);
    // };

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      theme['badged-link'],
      {
        // [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-button']]: element === 'button',
        // [theme['is-inverse']]: inverse,
        // [theme['is-selected']]: selected,
      },
      className,
    );

    return (
      <Box
        element={element}
        ref={badgedLinkRef}
        className={classNames}
        data-teamleader-ui="badgedLink"
        // onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseLeave}
        {...others}
      >
        {icon && iconPlacement === 'left' && icon}
        <span className={theme['content']}>{children}</span>
        {icon && iconPlacement === 'right' && icon}
      </Box>
    );
  },
);

BadgedLink.propTypes = {
  /** The content to display inside the badged link. */
  children: PropTypes.any.isRequired,
  /** A class name for the badged link to give custom styles. */
  className: PropTypes.string,
  // /** If true, component will be disabled. */
  // disabled: PropTypes.bool,
  /** The icon displayed inside the button. */
  icon: PropTypes.element.isRequired,
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, the badged link style inherits the parent element style. */
  inherit: PropTypes.bool,
  // /** If true, the underline behavior will be inverted. */
  // inverse: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // /** Callback function that is fired when mouse leaves the component. */
  // onMouseLeave: PropTypes.func,
  // /** Callback function that is fired when the mouse button is released. */
  // onMouseUp: PropTypes.func,
  // /** If true, component will be shown in a selected state */
  // selected: PropTypes.bool,
};

BadgedLink.defaultProps = {
  className: '',
  // disabled: false,
  element: 'a',
  iconPlacement: 'left',
  inherit: true,
  // inverse: false,
};

BadgedLink.displayName = 'BadgedLink';

export default BadgedLink;
