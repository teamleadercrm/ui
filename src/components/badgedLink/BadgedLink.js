import uiTypography from '@teamleader/ui-typography';
import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import theme from './theme.css';

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
      iconAligment,
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

    const blur = () => {
      const currentBadgedLinkRef = badgedLinkRef.current;
      if (currentBadgedLinkRef.blur) {
        currentBadgedLinkRef.blur();
      }
    };

    const handleMouseUp = (event) => {
      blur();
      onMouseUp && onMouseUp(event);
    };

    const handleMouseLeave = (event) => {
      blur();
      onMouseLeave && onMouseLeave(event);
    };

    const classNames = cx(
      uiUtilities['reset-font-smoothing'],
      uiTypography['ui-text-body'],
      theme['badged-link'],
      {
        [theme['is-inherit']]: inherit,
        [theme['is-bottom-aligned']]: iconAligment === 'bottom',
        // Since children can be text node, we have to do spacing according to icon element
        [theme['is-left-icon-placed']]: iconPlacement === 'left',
      },
      className,
    );

    return (
      <Box
        element={element}
        ref={badgedLinkRef}
        className={classNames}
        data-teamleader-ui="badgedLink"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...others}
      >
        {icon && iconPlacement === 'left' && icon}
        {children}
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
  /** The icon displayed inside the button. */
  icon: PropTypes.element.isRequired,
  /** The aligment of the icon inside the button. */
  iconAligment: PropTypes.oneOf(['center', 'bottom']),
  /** The position of the icon inside the button. */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** If true, the badged link style inherits the parent element style. */
  inherit: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
};

BadgedLink.defaultProps = {
  className: '',
  element: 'a',
  iconAligment: 'center',
  iconPlacement: 'left',
  inherit: true,
};

BadgedLink.displayName = 'BadgedLink';

export default BadgedLink;
