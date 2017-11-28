import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import isComponentOfType from '../utils/is-component-of-type';
import HeaderRow from './HeaderRow';
import Row from './Row';
import cx from 'classnames';
import theme from './theme.css';

class DataGrid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectable: PropTypes.bool,
  };

  constructor() {
    super(...arguments);

    this.handleRowSelectionChange = ::this.handleRowSelectionChange;
    this.handleHeaderRowSelectionChange = ::this.handleHeaderRowSelectionChange;

    this.state = {
      selectedRows: [],
    };
  }

  handleHeaderRowSelectionChange(value) {
    const allChildrenIndexes = React.Children.map(this.props.children, child => child.key);

    if (value) {
      this.setState({
        selectedRows: allChildrenIndexes,
      });
    } else {
      this.setState({
        selectedRows: [],
      });
    }
  }

  handleRowSelectionChange(rowIndex) {
    const { selectedRows } = this.state;

    if (selectedRows.indexOf(rowIndex) > -1) {
      this.setState({
        selectedRows: selectedRows.filter(row => row !== rowIndex),
      });
    } else {
      this.setState({
        selectedRows: [...selectedRows, rowIndex],
      });
    }
  }

  render() {
    const { children, className, selectable, ...others } = this.props;
    const { selectedRows } = this.state;

    const classNames = cx(theme['data-grid'], className);

    return (
      <Box data-teamleader-ui="data-grid" className={classNames} {...others}>
        {React.Children.map(children, child => {
          if (!isComponentOfType(Row, child) && !isComponentOfType(HeaderRow, child)) {
            return child;
          }

          if (isComponentOfType(HeaderRow, child)) {
            return React.cloneElement(child, {
              onSelectionChange: event => this.handleHeaderRowSelectionChange(event),
              selected: selectedRows.length === children[1].length,
              selectable,
            });
          }

          if (isComponentOfType(Row, child)) {
            return React.cloneElement(child, {
              onSelectionChange: event => this.handleRowSelectionChange(child.key),
              selected: selectedRows.indexOf(child.key) !== -1,
              selectable,
            });
          }
        })}
      </Box>
    );
  }
}

DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderCell = HeaderCell;
DataGrid.Row = Row;
DataGrid.Cell = Cell;

export default DataGrid;
