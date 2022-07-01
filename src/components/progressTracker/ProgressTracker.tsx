import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import ProgressStep from './ProgressStep';
import { GenericComponent } from '../../@types/types';

interface ProgressTrackerProps {
  /** Whether or not all steps are completed */
  done?: boolean;
  /** The number of the step which is currently active */
  currentStep: number;
  /** The steps to display inside the progress tracker */
  children?: ReactNode;
  /** Color theme of the progress tracker. */
  color?: 'neutral' | 'mint' | 'aqua' | 'violet' | 'gold' | 'ruby';
  /** Where to position the labels. Alternating allows for wider labels. */
  labelPosition?: 'top' | 'alternating' | 'bottom';
}

const ProgressTracker: GenericComponent<ProgressTrackerProps> = ({
  color,
  children,
  currentStep,
  done,
  labelPosition,
}: ProgressTrackerProps) => {
  const classNames = cx(theme['tracker'], theme[color], theme[`tracker-${labelPosition}`]);

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
};

ProgressTracker.defaultProps = {
  currentStep: 0,
  color: 'mint',
  labelPosition: 'top',
};

ProgressTracker.ProgressStep = ProgressStep;
ProgressTracker.ProgressStep.displayName = 'ProgressTracker.ProgressStep';

export default ProgressTracker;
