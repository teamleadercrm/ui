import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { color, children, activeStep, allStepsCompleted } = this.props;

    const classNames = cx(theme['progress-tracker']);

    return (
      <Box className={classNames}>
        {React.Children.map(children, (child, index) => {
          const currentActiveStep = activeStep < 0 ? 0 : activeStep;

          return React.cloneElement(child, {
            active: allStepsCompleted ? false : index === currentActiveStep,
            completed: allStepsCompleted || index < currentActiveStep,
            color,
          });
        })}
      </Box>
    );
  }
}

ProgressTracker.propTypes = {
  /** Whether or not all steps are completed */
  allStepsCompleted: PropTypes.bool,
  /** The number of the step which is currently active */
  activeStep: PropTypes.number.isRequired,
  /** The steps to display inside the progress tracker */
  children: PropTypes.node,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby']),
};

ProgressTracker.defaultProps = {
  activeStep: 0,
  color: 'neutral',
};

ProgressTracker.ProgressStep = ProgressStep;

export default ProgressTracker;
