import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText';
import HelpText from './HelpText';
import SuccessText from './SuccessText';
import WarningText from './WarningText';

/** @type {React.ComponentType<any>} */
class ValidationText extends PureComponent {
  render() {
    const { error, inverse, help, success, warning } = this.props;

    if (error && typeof error !== 'boolean') {
      return <ErrorText inverse={inverse}>{error}</ErrorText>;
    }

    if (warning && typeof warning !== 'boolean') {
      return <WarningText inverse={inverse}>{warning}</WarningText>;
    }

    if (success && typeof success !== 'boolean') {
      return <SuccessText inverse={inverse}>{success}</SuccessText>;
    }

    if (help) {
      return <HelpText inverse={inverse}>{help}</HelpText>;
    }

    return null;
  }
}

ValidationText.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  help: PropTypes.node,
  inverse: PropTypes.bool,
  success: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  warning: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

export default ValidationText;
