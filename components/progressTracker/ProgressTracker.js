import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { color, children, currentStep, allStepsCompleted } = this.props;

    const classNames = cx(theme['tracker']);

    return (
      <Box className={classNames}>
        {React.Children.map(children, (child, index) => {
          const activeStep = Math.max(0, currentStep);

          return (
            <ProgressStep
              { ...child.props} 
              active={allStepsCompleted ? false : index === activeStep}
              completed={allStepsCompleted || index < activeStep}
              color={color} 
            />
          );
        })}
      </Box>
    );
  }
}

ProgressTracker.propTypes = {
  /** Whether or not all steps are completed */
  allStepsCompleted: PropTypes.bool,
  /** The number of the step which is currently active */
  currentStep: PropTypes.number.isRequired,
  /** The steps to display inside the progress tracker */
  children: PropTypes.node,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby']),
};

ProgressTracker.defaultProps = {
  currentStep: 0,
  color: 'neutral',
};

ProgressTracker.ProgressStep = ProgressStep;

export default ProgressTracker;
