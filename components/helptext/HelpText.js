import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TextSmall } from '../../components';

export default class HelpText extends PureComponent {
  render() {
    const { children, className, inverse, ...others } = this.props;

    return (
      <TextSmall
        className={className}
        color={inverse ? 'white' : 'neutral'}
        data-teamleader-ui="help-text"
        marginTop={1}
        soft
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
