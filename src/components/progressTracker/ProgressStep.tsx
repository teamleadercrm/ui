import cx from 'classnames';
import React, { ReactNode, forwardRef } from 'react';
import theme from './theme.css';

import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { TextSmall } from '../typography';

export interface ProgressStepProps {
  /** The label for the progress step */
  label?: string;
  /** The meta text below the label */
  meta?: ReactNode | string;
  /** Whether or not the step is active */
  active?: boolean;
  /** Whether or not the step has been completed */
  completed?: boolean;
  /** Color theme of the progress step. */
  color?: string;
  /** Callback function that is fired when the progress step is clicked */
  onClick?: () => void;
}

const ProgressStep: GenericComponent<ProgressStepProps> = forwardRef<HTMLElement, ProgressStepProps>(
  ({ label, meta, active = false, completed = false, color = '', onClick }: ProgressStepProps, ref) => {
    const classNames = cx(theme['step'], {
      [theme['is-active']]: active,
      [theme['is-completed']]: completed,
      [theme['is-clickable']]: !!onClick,
      [theme['has-meta']]: !!meta,
      [theme['custom-color']]: !!color,
    });
    return (
      <Box className={classNames} style={{ '--step-color': color } as React.CSSProperties} ref={ref}>
        <div className={theme['step-label-holder']}>
          <TextSmall className={theme['step-label']}>{label}</TextSmall>
          {meta && <TextSmall className={theme['step-meta']}>{meta}</TextSmall>}
        </div>
        <span className={theme['status-bullet-halo']} onClick={onClick} />
        <span className={theme['status-bullet']} onClick={onClick} />
      </Box>
    );
  },
);

ProgressStep.displayName = 'ProgressTracker.ProgressStep';

export default ProgressStep;
