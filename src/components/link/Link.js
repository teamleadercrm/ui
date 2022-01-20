import uiUtilities from '@teamleader/ui-utilities';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import theme from './theme.css';

const Link = forwardRef(
  ({ children, className, disabled, element, inherit, inverse, selected, onMouseUp, onMouseLeave, ...others }, ref) => {
    const linkRef = useRef();
    useImperativeHandle(ref, () => linkRef.current);

    const blur = () => {
      const currentLinkRef = linkRef.current;
      if (currentLinkRef.blur) {
        currentLinkRef.blur();
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
      theme['link'],
      {
        [theme['is-disabled']]: disabled,
        [theme['is-inherit']]: inherit,
        [theme['is-inverse']]: inverse,
        [theme['is-selected']]: selected,
      },
      className,
    );

    return (
      <Box
        element={element}
        ref={linkRef}
        className={classNames}
        data-teamleader-ui="link"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        {...others}
      >
        {children}
      </Box>
    );
  },
);

Link.propTypes = {
  /** The content to display inside the link. */
  children: PropTypes.any.isRequired,
  /** A class name for the link to give custom styles. */
  className: PropTypes.string,
  /** If true, component will be disabled. */
  disabled: PropTypes.bool,
  /** If true, the link style inherits the parent element style. */
  inherit: PropTypes.bool,
  /** If true, the underline behavior will be inverted. */
  inverse: PropTypes.bool,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
  /** If true, component will be shown in a selected state */
  selected: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  disabled: false,
  element: 'a',
  inherit: true,
  inverse: false,
};

Link.displayName = 'Link';

export default Link;
