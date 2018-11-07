import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TextSmall } from '../typography';

export default class HelpText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <TextSmall
        className={className}
        color={inverse ? 'teal' : 'neutral'}
        data-teamleader-ui="help-text"
        marginTop={1}
        tint={inverse ? 'light' : 'darkest'}
        {...others}
      >
        {children}
      </TextSmall>
    );
  }
}

HelpText.propTypes = {
  /** The displayed text */
  children: PropTypes.node,
  /** The class name for the wrapper to give custom styles */
  className: PropTypes.string,
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

HelpText.defaultProps = {
  children: 'This is the help text',
  inverse: false,
};
