import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';

const MarketingLink = forwardRef(({ children, className, element, onMouseUp, onMouseLeave, ...others }, ref) => {
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

  const classNames = cx(uiUtilities['reset-font-smoothing'], theme['link'], className);

  return (
    <Box
      element={element}
      ref={linkRef}
      className={classNames}
      data-teamleader-ui="marketing-link"
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      {...others}
    >
      {children}
    </Box>
  );
});

MarketingLink.propTypes = {
  /** The content to display inside the link. */
  children: PropTypes.any.isRequired,
  /** A class name for the link to give custom styles. */
  className: PropTypes.string,
  /** A custom element to be rendered */
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** Callback function that is fired when mouse leaves the component. */
  onMouseLeave: PropTypes.func,
  /** Callback function that is fired when the mouse button is released. */
  onMouseUp: PropTypes.func,
};

MarketingLink.defaultProps = {
  className: '',
  element: 'a',
};

MarketingLink.displayName = 'MarketingLink';

export default MarketingLink;
