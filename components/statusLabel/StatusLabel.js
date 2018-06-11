import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

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

    const classNames = cx(theme['label'], theme[color], theme[size], className);

    return (
      <Box className={classNames} element="span" {...SIZES[size]} {...others} data-teamleader-ui="status-label">
        {children}
      </Box>
    );
  }
}

StatusLabel.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
  size: PropTypes.oneOf(Object.keys(SIZES)),
};

StatusLabel.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

export default StatusLabel;
