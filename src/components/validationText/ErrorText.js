import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';

export default class ErrorText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <TextSmall
        className={className}
        color="ruby"
        data-teamleader-ui="error-text"
        marginTop={2}
        tint={inverse ? 'light' : 'dark'}
        {...others}
      >
        {children}
      </TextSmall>
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
