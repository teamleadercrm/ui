import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

import Island from '../island';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  state = {
    activeStep: this.props.activeStep,
  };
  updateStep = stepId => {
    this.setState({
      activeStep: stepId,
    });
  };
  render() {
    const { activeStep } = this.state;
    const { color, children, isClickable } = this.props;

    const classNames = cx(theme['progress-tracker']);

    return (
      <Island color={color} className={classNames}>
        {React.Children.map(children, (child, index) => {
          const currentActiveStep = activeStep < 0 ? 0 : activeStep;

          return React.cloneElement(child, {
            active: index === currentActiveStep,
            completed: index < currentActiveStep,
            color: color,
            onClickHandler: isClickable ? this.updateStep : null,
            stepId: index,
          });
        })}
      </Island>
    );
  }
}

ProgressTracker.propTypes = {
  /** The number of the step which is currently active */
  activeStep: PropTypes.number.isRequired,
  /** The steps to display inside the progress tracker */
  children: PropTypes.node,
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
  /** */
  isClickable: PropTypes.bool,
};

ProgressTracker.defaultProps = {
  activeStep: 0,
};

ProgressTracker.ProgressStep = ProgressStep;

export default ProgressTracker;
