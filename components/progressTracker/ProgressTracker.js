import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Island from '../island';
import ProgressStep from './ProgressStep';

class ProgressTracker extends PureComponent {
  render() {
    const { color } = this.props;

    return (
      <Island color={color}>
        <ProgressStep />
      </Island>
    );
  }
}

ProgressTracker.propTypes = {
  /** Color theme of the progress tracker. */
  color: PropTypes.oneOf(['neutral', 'mint', 'aqua', 'violet', 'teal', 'gold', 'ruby']),
};

export default ProgressTracker;
