import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import ErrorText from '../errorText';
import HelpText from '../helptext';

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

export default ValidationText;
