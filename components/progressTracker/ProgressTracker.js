import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Island from '../island';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { activeStep, color, children } = this.props;

    return (
      <Island color={color}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            active: index === activeStep,
            completed: index < activeStep,
          });
        })}
      </Island>
    );
  }
}

ProgressTracker.propTypes = {
  /** The number of the step which is currently active */
  activeStep: PropTypes.number.isRequired,
  /** The steps to display inside the progress tracker */
  children: PropTypes.node,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
};

ProgressTracker.defaultProps = {
  activeStep: 0,
};

ProgressTracker.ProgressStep = ProgressStep;

export default ProgressTracker;
