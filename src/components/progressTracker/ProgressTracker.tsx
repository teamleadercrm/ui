import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import ProgressStep from './ProgressStep';
import { GenericComponent } from '../../@types/types';
import { COLORS } from '../../constants';

export interface ProgressTrackerProps {
  /** Whether or not all steps are completed */
  done?: boolean;
  /** The number of the step which is currently active */
  currentStep?: number;
  /** The steps to display inside the progress tracker */
  children?: ReactNode;
  /** Color theme of the progress tracker. */
  color?: typeof COLORS[number];
  /** Color of the progress step. */
  activeStepColor?: string;
  /** Where to position the labels. Alternating allows for wider labels. */
  labelPosition?: 'top' | 'alternating' | 'bottom';
}

const ProgressTracker: GenericComponent<ProgressTrackerProps> & { ProgressStep: typeof ProgressStep } = ({
  color = 'mint',
  children,
  currentStep = 0,
  done,
  labelPosition = 'top',
  activeStepColor,
}: ProgressTrackerProps) => {
  const classNames = cx(theme['tracker'], theme[color], theme[`tracker-${labelPosition}`]);
  return (
    <Box data-teamleader-ui="progress-tracker" className={classNames}>
      {React.Children.map(children, (child, index) => {
        const activeStep = Math.max(0, currentStep);
        const isActiveStep = index === activeStep;
        const childProps = React.isValidElement(child) && child.props;
        const hasColoredActiveStep = isActiveStep && activeStepColor && !done;
        return (
          <ProgressStep
            active={done ? false : isActiveStep}
            completed={done || index < activeStep}
            color={hasColoredActiveStep ? activeStepColor : ''}
            {...childProps}
          />
        );
      })}
    </Box>
  );
};

ProgressTracker.ProgressStep = ProgressStep;

export default ProgressTracker;
