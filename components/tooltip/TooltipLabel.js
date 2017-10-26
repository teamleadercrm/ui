import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class TooltipLabel extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.element,
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    inverse: false,
  };

  render() {
    const { children, className, icon, inverse, ...others } = this.props;

    const classNames = cx(theme.label, className, {
      [theme['inverse']]: inverse,
    });

    return (
      <Box
        className={classNames}
        data-teamleader-ui="tooltip-label"
        element="span"
        paddingHorizontal={2}
        paddingVertical={1}
        {...others}
      >
        {icon}
        {children}
      </Box>
    );
  }
}

export default TooltipLabel;
