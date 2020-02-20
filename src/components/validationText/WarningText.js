import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextSmall } from '../typography';

export default class WarningText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <TextSmall
        className={className}
        color="gold"
        data-teamleader-ui="warning-text"
        marginTop={1}
        tint={inverse ? 'light' : 'dark'}
        {...others}
      >
        {children}
      </TextSmall>
    );
  }
}

WarningText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

WarningText.defaultProps = {
  children: 'This is the warning text',
  inverse: false,
};
