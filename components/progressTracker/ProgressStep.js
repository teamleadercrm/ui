import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProgressStep extends PureComponent {
  render() {
    const { label, active } = this.props;
    return (
      <div>
        <label>{label}</label>
      </div>
    );
  }
}

ProgressStep.propTypes = {
  /** The label for the progress step */
  label: PropTypes.string.isRequired,
  /** Whether or not the step is active */
  active: PropTypes.bool.isRequired,
};

export default ProgressStep;
