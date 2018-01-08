import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class Badge extends PureComponent {
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

    const classNames = cx(theme.badge, className, {
      [theme['inverse']]: inverse,
    });

    return (
      <Box
        className={classNames}
        data-teamleader-ui="badge"
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

export default Badge;
