import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';

/** @type {React.ComponentType<any>} */
export default class ErrorText extends PureComponent {
  render() {
    const { children, inverse, ...others } = this.props;

    return (
      <TextSmall
        color="ruby"
        data-teamleader-ui="error-text"
        marginTop={1}
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
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

ErrorText.defaultProps = {
  children: 'This is the error text',
  inverse: false,
};
