import React, { ReactNode } from 'react';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import { TextSmall } from '../typography';
import { GenericComponent } from '../../@types/types';

interface ProgressStepProps {
  /** The label for the progress step */
  label: string;
  /** The meta text below the label */
  meta?: ReactNode | string;
  /** Whether or not the step is active */
  active: boolean;
  /** Whether or not the step has been completed */
  completed: boolean;
  /** Callback function that is fired when the progress step is clicked */
  onClick?: () => void;
}

const ProgressStep: GenericComponent<ProgressStepProps> = ({
  label,
  meta,
  active = false,
  completed = false,
  onClick,
}: ProgressStepProps) => {
  const classNames = cx(theme['step'], {
    [theme['is-active']]: active,
    [theme['is-completed']]: completed,
    [theme['is-clickable']]: !!onClick,
    [theme['has-meta']]: !!meta,
  });
  return (
    <Box className={classNames}>
      <div className={theme['step-label-holder']}>
        <TextSmall className={theme['step-label']}>{label}</TextSmall>
        {meta && <TextSmall className={theme['step-meta']}>{meta}</TextSmall>}
      </div>
      <span className={theme['status-bullet-halo']} onClick={onClick} />
      <span className={theme['status-bullet']} onClick={onClick} />
    </Box>
  );
};

export default ProgressStep;
