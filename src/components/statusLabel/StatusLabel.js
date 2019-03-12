import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import utils from '@teamleader/ui-utilities';

const SIZES = {
  medium: {
    paddingHorizontal: 2,
    paddingVertical: 1,
  },
  small: {
    paddingHorizontal: 2,
  },
};

class StatusLabel extends PureComponent {
  render() {
    const { children, className, color, size, ...others } = this.props;

    const classNames = cx(theme['label'], utils['reset-font-smoothing'], theme[color], theme[size], className);

    return (
      <Box className={classNames} element="span" {...SIZES[size]} {...others} data-teamleader-ui="status-label">
        {children}
      </Box>
    );
  }
}

StatusLabel.propTypes = {
  /** The content to display inside the status label */
  children: PropTypes.any.isRequired,
  /** A classname to add to the status label to give custom styles */
  className: PropTypes.string,
  /** The name of the color them you want to give to the status label */
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  /** Size of the button */
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

StatusLabel.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default StatusLabel;
