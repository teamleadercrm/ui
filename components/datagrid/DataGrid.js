import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';

class DataGrid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const { children, className, ...others } = this.props;

    const classNames = cx(theme['data-grid'], className);

    return (
      <Box data-teamleader-ui="data-grid" className={classNames} {...others}>
        {children}
      </Box>
    );
  }
}

export default DataGrid;
