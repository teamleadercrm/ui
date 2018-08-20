import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Box from '../box';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import isComponentOfType from '../utils/is-component-of-type';
import { isElementOverflowingX } from '../utils/utils';
import FooterRow from './FooterRow';
import HeaderRow from './HeaderRow';
import BodyRow from './BodyRow';
import cx from 'classnames';
import omit from 'lodash.omit';
import throttle from 'lodash.throttle';
import theme from './theme.css';
import { events } from '../utils';

class DataGrid extends PureComponent {
  state = {
    selectedRows: [],
  };

  rowNodes = new Map();
  scrollableNode = null;

  setCalculatedRowWidthThrottled = () => throttle(this.setCalculatedRowWidth, 16);

  componentDidMount() {
    events.addEventsToWindow({
      resize: this.setCalculatedRowWidthThrottled,
    });
  }

  componentWillUnmount() {
    events.removeEventsFromWindow({
      resize: this.setCalculatedRowWidthThrottled,
    });
  }

  componentDidUpdate(prevProps) {
    this.setCalculatedRowWidth();

    if (prevProps.comparableId !== this.props.comparableId) {
      this.handleSelectionChange([]);

      this.setState({
        selectedRows: [],
      });
    }
  }

  handleHeaderRowSelectionChange = (checked, event) => {
    const allBodyRowIndexes = React.Children.map(this.props.children, child => {
      if (isComponentOfType(BodyRow, child)) {
        return child.key;
      }
    });

    const selectedBodyRowIndexes = checked ? allBodyRowIndexes : [];

    this.setState({
      selectedRows: selectedBodyRowIndexes,
    });

    this.handleSelectionChange(selectedBodyRowIndexes, event);
  };

  handleBodyRowSelectionChange = (rowIndex, event) => {
    this.setState(prevState => {
      const selectedRows = prevState.selectedRows.includes(rowIndex)
        ? prevState.selectedRows.filter(row => row !== rowIndex)
        : [...prevState.selectedRows, rowIndex];

      this.handleSelectionChange(selectedRows, event);

      return {
        ...prevState,
        selectedRows,
      };
    });
  };

  handleSelectionChange(selection, event = null) {
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(selection, event);
    }
  }

  setCalculatedRowWidth = () => {
    if (isElementOverflowingX(this.scrollableNode) && this.rowNodes) {
      const rowDOMNodes = [];
      let maxRowWidth = 0;

      [...this.rowNodes.values()].filter(rowNode => rowNode != null).forEach(rowNode => {
        const rowDOMNode = ReactDOM.findDOMNode(rowNode);
        const totalRowChildrenWidth = [...rowDOMNode.children]
          .map(child => child.offsetWidth)
          .reduce((accumulatedChildWidth, currentChildWidth) => accumulatedChildWidth + currentChildWidth);

        maxRowWidth = maxRowWidth < totalRowChildrenWidth ? totalRowChildrenWidth : maxRowWidth;
        rowDOMNodes.push(rowDOMNode);
      });

      rowDOMNodes.forEach(rowDOMNode => (rowDOMNode.style.minWidth = `${maxRowWidth}px`));
    }
  };

  render() {
    const { checkboxSize, children, className, selectable, stickyFromLeft, stickyFromRight, ...others } = this.props;
    const { selectedRows } = this.state;

    const classNames = cx(theme['data-grid'], className);
    const rest = omit(others, ['comparableId', 'onSelectionChange']);

    const sectionLeftClassNames = cx(theme['section'], theme['is-sticky-left'], {
      [theme['has-blend-right']]: selectable || stickyFromLeft > 0,
      [theme['has-border-right']]: selectable || stickyFromLeft > 0,
    });

    const numberOfBodyRows = React.Children.toArray(children).filter(child => isComponentOfType(BodyRow, child)).length;
    const isPartiallySelected = selectedRows.length > 0 && selectedRows.length !== numberOfBodyRows;

    return (
      <Box data-teamleader-ui="data-grid" className={classNames} {...rest}>
        {(selectable || stickyFromLeft > 0) && (
          <div className={sectionLeftClassNames}>
            {React.Children.map(children, child => {
              if (isComponentOfType(HeaderRow, child)) {
                return React.cloneElement(child, {
                  checkboxSize: checkboxSize,
                  onSelectionChange: this.handleHeaderRowSelectionChange,
                  selected: selectedRows.length === children[1].length,
                  selectable,
                  sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                  partiallySelected: isPartiallySelected,
                });
              } else if (isComponentOfType(BodyRow, child)) {
                return React.cloneElement(child, {
                  checkboxSize: checkboxSize,
                  onSelectionChange: (checked, event) => this.handleBodyRowSelectionChange(child.key, event),
                  selected: selectedRows.indexOf(child.key) !== -1,
                  selectable,
                  sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                });
              } else if (isComponentOfType(FooterRow, child)) {
                return React.cloneElement(child, {
                  preserveSelectableSpace: selectable,
                  sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                });
              }
            })}
          </div>
        )}

        <div className={cx(theme['section'], theme['is-scrollable'])} ref={node => (this.scrollableNode = node)}>
          {React.Children.map(children, (child, key) => {
            return React.cloneElement(child, {
              sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
              sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
              ref: rowNode => this.rowNodes.set(key, rowNode),
            });
          })}
        </div>

        {stickyFromRight > 0 && (
          <div className={cx(theme['section'], theme['has-blend-left'])}>
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                sliceFrom: -stickyFromRight,
              });
            })}
          </div>
        )}
      </Box>
    );
  }
}

DataGrid.propTypes = {
  checkboxSize: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  className: PropTypes.string,
  comparableId: PropTypes.any,
  selectable: PropTypes.bool,
  stickyFromLeft: PropTypes.number,
  stickyFromRight: PropTypes.number,
  onSelectionChange: PropTypes.func,
};

DataGrid.defaultProps = {
  checkboxSize: 'small',
};

DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderCell = HeaderCell;
DataGrid.BodyRow = BodyRow;
DataGrid.Cell = Cell;
DataGrid.FooterRow = FooterRow;

export default DataGrid;
