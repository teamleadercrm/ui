import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import { OldStyleNumber } from '../typography';
import theme from './theme.css';

class StatusLabel extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua']),
    size: PropTypes.oneOf(['small', 'medium']),
  };

  static defaultProps = {
    color: 'neutral',
    size: 'medium',
  };

  render() {
    const { children, className, color, size, ...others } = this.props;

    const classNames = cx(theme['label'], theme[color], theme[size], className);

    return (
      <Box className={classNames} element="span" {...others} data-teamleader-ui="status-label">
        <OldStyleNumber>{children}</OldStyleNumber>
      </Box>
    );
  }
}

export default StatusLabel;
