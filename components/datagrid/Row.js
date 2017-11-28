import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Cell from './Cell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

class Row extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    onSelectionChange: PropTypes.func,
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
  };

  render() {
    const { className, children, onSelectionChange, selected, selectable, ...others } = this.props;

    const classNames = cx(theme['row'], className);

    return (
      <Box className={classNames} data-teamleader-ui="datagrid-row" {...others}>
        {selectable && (
          <Cell>
            <Checkbox checked={selected} onChange={onSelectionChange} />
          </Cell>
        )}
        {children}
      </Box>
    );
  }
}

export default Row;
