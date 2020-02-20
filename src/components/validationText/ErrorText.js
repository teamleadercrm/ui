import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';
import Box from '../box';

export default class ErrorText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <Box
        className={className}
        alignItems="center"
        data-teamleader-ui="error-text"
        display="flex"
        marginTop={2}
        {...others}
      >
        <TextSmall color="ruby" element="span" tint={inverse ? 'light' : 'dark'}>
          {children}
        </TextSmall>
      </Box>
    );
  }
}

ErrorText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

ErrorText.defaultProps = {
  children: 'This is the error text',
  inverse: false,
};
