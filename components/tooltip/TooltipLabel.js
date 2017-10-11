import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { OldStyleNumber } from '../typography';
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

    const classes = cx(theme.label, className, {
      [theme.inverse]: inverse,
    });

    return (
      <span data-teamleader-ui="tooltip-label" className={classes} {...others}>
        {icon}
        <OldStyleNumber>{children}</OldStyleNumber>
      </span>
    );
  }
}

export default TooltipLabel;
