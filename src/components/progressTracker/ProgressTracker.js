import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { color, children, currentStep, done, alternating } = this.props;

    const classNames = cx(theme['tracker'], theme[color], { [theme['tracker-alternating']]: alternating });

    return (
      <Box className={classNames}>
        {React.Children.map(children, (child, index) => {
          const activeStep = Math.max(0, currentStep);

          return (
            <ProgressStep
              {...child.props}
              active={done ? false : index === activeStep}
              completed={done || index < activeStep}
            />
          );
        })}
      </Box>
    );
  }
}

ProgressTracker.propTypes = {
  /** Whether or not all steps are completed */
  done: PropTypes.bool,
  /** The number of the step which is currently active */
  currentStep: PropTypes.number.isRequired,
  /** The steps to display inside the progress tracker */
  children: PropTypes.node,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'gold', 'ruby']),
  /** Whether the position of the labels should alternate so they have more space  */
  alternating: PropTypes.bool,
};

ProgressTracker.defaultProps = {
  currentStep: 0,
  color: 'mint',
};

ProgressTracker.ProgressStep = ProgressStep;
ProgressTracker.ProgressStep.displayName = 'ProgressTracker.ProgressStep';

export default ProgressTracker;
