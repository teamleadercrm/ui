import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import { TextSmall } from '../typography';

class ProgressStep extends PureComponent {
  render() {
    const { label, active, completed, color, onClickHandler, stepId } = this.props;
    const classNames = cx(theme['progress-step'], theme[color], {
      [theme['is-active']]: active,
      [theme['is-completed']]: completed,
    });
    return (
      <div className={classNames}>
        <TextSmall className={theme['progress-step__label']} onClick={() => onClickHandler(stepId)}>
          {label}
        </TextSmall>
        <Box className={theme['status-bullet']} onClick={() => onClickHandler(stepId)} />
      </div>
    );
  }
}

ProgressStep.propTypes = {
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** The label for the progress step */
  label: PropTypes.string.isRequired,
  /** Whether or not the step is active */
  active: PropTypes.bool.isRequired,
  /** Whether or not the step has been completed */
  completed: PropTypes.bool.isRequired,
  /** Function to be called when a step has been clicked */
  onClickHandler: PropTypes.func,
  /** Id of the step */
  stepId: PropTypes.number.isRequired,
};

ProgressStep.defaultProps = {
  color: 'neutral',
  active: false,
  completed: false,
};

export default ProgressStep;
