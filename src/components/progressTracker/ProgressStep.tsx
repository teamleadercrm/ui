import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Box from '../box';
import { TextSmall } from '../typography';

class ProgressStep extends PureComponent {
  render() {
    const { label, meta, active, completed, onClick } = this.props;
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
  }
}

ProgressStep.propTypes = {
  /** The label for the progress step */
  label: PropTypes.string.isRequired,
  /** The meta text below the label */
  meta: PropTypes.PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
