import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Island from '../island';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { activeStep, color, steps } = this.props;

    return (
      <Island color={color}>
        {steps.map(step => {
          return <ProgressStep label={step.label} />;
        })}
      </Island>
    );
  }
}

ProgressTracker.propTypes = {
  /** The number of the step which is currently active */
  activeStep: PropTypes.number,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The steps of the progress tracker */
  steps: PropTypes.array,
};

ProgressTracker.defaultProps = {
  activeStep: 0,
};

export default ProgressTracker;
