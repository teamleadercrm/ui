import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class IconTab extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const { children, className, ...others } = this.props;
    const classNames = cx(theme['icon-tab'], className);

    return (
      <Box data-teamleader-ui="icon-tab" className={classNames} {...others}>
        {children}
      </Box>
    );
  }
}

export default IconTab;
