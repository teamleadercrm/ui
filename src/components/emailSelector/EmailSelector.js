import React, { useRef } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import ValidationText from '../validationText';
import theme from './theme.css';
import Box from '../box';

const EmailSelector = ({ warning, error, ...rest }) => {
  const ref = useRef();

  return (
    <>
      <Box
        ref={ref}
        className={cx(theme['label-input'], {
          [theme['label-input--warning']]: warning,
          [theme['label-input--error']]: error,
        })}
        {...rest}
      />

      <ValidationText warning={warning} error={!warning && error} />
    </>
  );
};

EmailSelector.propTypes = {
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

export default EmailSelector;
