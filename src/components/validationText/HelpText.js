import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TextSmall } from '../typography';

/** @type {React.ComponentType<any>} */
export default class HelpText extends PureComponent {
  render() {
    const { children, inverse, ...others } = this.props;

    return (
      <TextSmall
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
  /** Determines if the component will be rendered in inverse mode */
  inverse: PropTypes.bool,
};

HelpText.defaultProps = {
  children: 'This is the help text',
  inverse: false,
};
