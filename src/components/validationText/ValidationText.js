import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText';
import HelpText from './HelpText';
import WarningText from './WarningText';

class ValidationText extends PureComponent {
  render() {
    const { error, inverse, help, warning } = this.props;

    if (error) {
      return <ErrorText inverse={inverse}>{error}</ErrorText>;
    }

    if (warning) {
      return <WarningText inverse={inverse}>{warning}</WarningText>;
    }

    if (help) {
      return <HelpText inverse={inverse}>{help}</HelpText>;
    }

    return null;
  }
}

ValidationText.propTypes = {
  error: PropTypes.node,
  help: PropTypes.node,
  inverse: PropTypes.bool,
  warning: PropTypes.node,
};

export default ValidationText;
