import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Island from '../island';

const Body = forwardRef(({ children, ...others }, ref) => {
  return (
    <Island ref={ref} {...others}>
      {children}
    </Island>
  );
});

Body.displayName = 'Body';

Body.propTypes = {
  /** The content to display inside the widget body. */
  children: PropTypes.any,
};

export default Body;
