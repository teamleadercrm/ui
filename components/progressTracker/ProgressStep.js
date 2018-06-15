import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

class ProgressStep extends PureComponent {
  render() {
    const { label, active, completed } = this.props;
    const classNames = cx(theme['progress-step'], {
      [theme['is-active']]: active,
      [theme['is-completed']]: completed,
    });
    return (
      <div className={classNames}>
        <label>{label}</label>
      </div>
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
};

export default ProgressStep;
