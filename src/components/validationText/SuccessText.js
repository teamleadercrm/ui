import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';

export default class SuccessText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <TextSmall
        className={className}
        color="mint"
        data-teamleader-ui="success-text"
        marginTop={1}
        tint={inverse ? 'light' : 'dark'}
        {...others}
      >
        {children}
      </TextSmall>
    );
  }
}

SuccessText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

SuccessText.defaultProps = {
  children: 'This is the success text',
  inverse: false,
};
