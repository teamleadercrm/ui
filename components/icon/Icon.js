import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Icon extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    color: PropTypes.oneOf(['neutral', 'mint', 'violet', 'ruby', 'gold', 'aqua', 'teal']),
    tint: PropTypes.oneOf(['lightest', 'light', 'normal', 'dark', 'darkest']),
  };

  static defaultProps = {
    color: 'teal',
    tint: 'normal',
  };

  render() {
    const { children, className, color, tint, ...others } = this.props;

    const classNames = cx(theme[color], theme[tint], className);

    return (
      <Box className={classNames} data-teamleader-ui="icon" element="span" {...others}>
        {children}
      </Box>
    );
  }
}

export default Icon;
