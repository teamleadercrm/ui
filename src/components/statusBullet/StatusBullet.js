import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class StatusBullet extends PureComponent {
  render() {
    const { children, className, color, size, ...others } = this.props;

    const classNames = cx(theme['bullet'], theme[color], theme[size], className);

    return (
      <Box className={classNames} data-teamleader-ui="status-bullet" element="span" {...others}>
        {children}
      </Box>
    );
  }
}

StatusBullet.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['mint', 'violet', 'ruby', 'gold', 'aqua', 'neutral']),
  size: PropTypes.oneOf(['small', 'medium']),
};

StatusBullet.defaultProps = {
  color: 'neutral',
  size: 'medium',
};

StatusBullet.displayName = 'StatusBullet';

export default StatusBullet;
