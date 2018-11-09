import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import ErrorText from './ErrorText';
import HelpText from './HelpText';

class ValidationText extends PureComponent {
  render() {
    const { error, help, inverse } = this.props;

    return (
      <Fragment>
        {error ? (
          <ErrorText inverse={inverse}>{error}</ErrorText>
        ) : (
          help && <HelpText inverse={inverse}>{help}</HelpText>
        )}
      </Fragment>
    );
  }
}

ValidationText.propTypes = {
  error: PropTypes.node,
  help: PropTypes.node,
  inverse: PropTypes.bool,
};

ValidationText.displayName = 'ValidationText';

export default ValidationText;
