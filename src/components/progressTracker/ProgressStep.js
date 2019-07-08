import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import { TextSmall } from '../typography';

class ProgressStep extends PureComponent {
  render() {
    const { label, active, completed, onClick } = this.props;
    const classNames = cx(theme['step'], {
      [theme['is-active']]: active,
      [theme['is-completed']]: completed,
      [theme['is-clickable']]: onClick,
    });
    return (
      <Box className={classNames} onClick={onClick}>
        <TextSmall className={theme['step-label']}>{label}</TextSmall>
        <span className={theme['status-bullet']} />
      </Box>
    );
  }
}

ProgressStep.propTypes = {
  /** The label for the progress step */
  label: PropTypes.string.isRequired,
  /** Whether or not the step is active */
  active: PropTypes.bool.isRequired,
  /** Whether or not the step has been completed */
  completed: PropTypes.bool.isRequired,
  /** Callback function that is fired when the progress step is clicked */
  onClick: PropTypes.func,
};

ProgressStep.defaultProps = {
  active: false,
  completed: false,
};

export default ProgressStep;
