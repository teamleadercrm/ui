import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import LoadingBar from '../loadingBar';
import HeaderRowOverlay from './HeaderRowOverlay';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import isComponentOfType from '../utils/is-component-of-type';
import { isElementOverflowingX } from '../utils/utils';
import FooterRow from './FooterRow';
import HeaderRow from './HeaderRow';
import BodyRow from './BodyRow';
import cx from 'classnames';
import omit from 'lodash.omit';
import ReactResizeDetector from 'react-resize-detector';
import theme from './theme.css';

/**
 * @type {React.ComponentType<any> & {
 *    HeaderRowOverlay: React.ComponentType<any>;
 *    HeaderRow: React.ComponentType<any>;
 *    HeaderCell: React.ComponentType<any>;
 *    BodyRow: React.ComponentType<any>;
 *    Cell: React.ComponentType<any>;
 *    FooterRow: React.ComponentType<any>;
 * }}
 */
class DataGrid extends PureComponent {
  state = {
    hoveredRow: null,
    isOverflowing: false,
    selectedRows: [],
  };

  rowNodes = new Map();

  scrollableNode = null;

  componentDidUpdate(prevProps) {
    this.handleResize();

    if (prevProps.comparableId !== this.props.comparableId) {
      this.handleSelectionChange([]);

      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        selectedRows: [],
      });
    }
  }

  handleHeaderRowSelectionChange = (checked, event) => {
    const allBodyRowIndexes = React.Children.map(this.props.children, (child) => {
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

  handleBodyRowMouseEnter = (row, event) => {
    const { onClick, onMouseOver } = row.props;

    onClick && this.setState({ hoveredRow: row.key });
    onMouseOver && onMouseOver(event);
  };

  handleBodyRowMouseLeave = (row, event) => {
    const { onClick, onMouseOut } = row.props;

    onClick && this.setState({ hoveredRow: null });
    onMouseOut && onMouseOut(event);
  };

  handleBodyRowSelectionChange = (rowIndex, event) => {
    this.setState((prevState) => {
      const selectedRows = prevState.selectedRows.includes(rowIndex)
        ? prevState.selectedRows.filter((row) => row !== rowIndex)
        : [...prevState.selectedRows, rowIndex];

      this.handleSelectionChange(selectedRows, event);

      return {
        ...prevState,
        selectedRows,
      };
    });
  };

  handleResize = () => {
    if (isElementOverflowingX(this.scrollableNode) && this.rowNodes) {
      this.setCalculatedRowWidth();
      this.setState({ isOverflowing: true });
    } else {
      this.setState({ isOverflowing: false });
    }
  };

  handleSelectionChange(selection, event = null) {
    if (this.props.onSelectionChange) {
      this.props.onSelectionChange(selection, event);
    }
  }

  setCalculatedRowWidth = () => {
    const rowDOMNodes = [];
    let maxRowWidth = 0;

    [...this.rowNodes.values()]
      .filter((rowDOMNode) => rowDOMNode != null)
      .forEach((rowDOMNode) => {
        if (rowDOMNode) {
          const totalRowChildrenWidth = [...rowDOMNode.children]
            .map((child) => child.offsetWidth)
            .reduce((accumulatedChildWidth, currentChildWidth) => accumulatedChildWidth + currentChildWidth);

          maxRowWidth = maxRowWidth < totalRowChildrenWidth ? totalRowChildrenWidth : maxRowWidth;
          rowDOMNodes.push(rowDOMNode);
        }
      });

    rowDOMNodes.forEach((rowDOMNode) => (rowDOMNode.style.minWidth = `${maxRowWidth}px`));
  };

  render() {
    const { bordered, children, className, processing, selectable, stickyFromLeft, stickyFromRight, ...others } =
      this.props;
    const { hoveredRow, isOverflowing, selectedRows } = this.state;

    const classNames = cx(
      theme['data-grid'],
      {
        [theme['is-bordered']]: bordered,
        [theme['is-overflowing']]: isOverflowing,
      },
      className,
    );

    const rest = omit(others, ['comparableId', 'onSelectionChange']);

    const sectionLeftClassNames = cx(theme['section'], theme['is-sticky-left'], {
      [theme['has-blend-right']]: selectable || stickyFromLeft > 0,
      [theme['has-border-right']]: selectable || stickyFromLeft > 0,
    });

    return (
      <Box data-teamleader-ui="data-grid" className={classNames} {...rest}>
        {processing && (
          <div className={cx(theme['loading-bar'])}>
            <LoadingBar />
          </div>
        )}
        {selectedRows.length > 0 &&
          React.Children.map(children, (child) => {
            if (isComponentOfType(HeaderRowOverlay, child)) {
              return React.cloneElement(child, {
                numSelectedRows: selectedRows.length,
              });
            }
          })}
        <Box display="flex" className={cx(theme['section-wrapper'])}>
          {(selectable || stickyFromLeft > 0) && (
            <div className={sectionLeftClassNames}>
              {React.Children.map(children, (child) => {
                if (isComponentOfType(HeaderRow, child)) {
                  return React.cloneElement(child, {
                    onSelectionChange: this.handleHeaderRowSelectionChange,
                    selected: selectedRows.length === children.find((child) => Array.isArray(child)).length,
                    selectable,
                    sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                  });
                } else if (isComponentOfType(BodyRow, child)) {
                  return React.cloneElement(child, {
                    hovered: hoveredRow === child.key,
                    onMouseEnter: (event) => this.handleBodyRowMouseEnter(child, event),
                    onMouseLeave: (event) => this.handleBodyRowMouseLeave(child, event),
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
          <div className={cx(theme['section'], theme['is-scrollable'])} ref={(node) => (this.scrollableNode = node)}>
            {React.Children.map(children, (child, key) => {
              if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                return React.cloneElement(child, {
                  sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                  sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                  ref: (rowNode) => this.rowNodes.set(key, rowNode),
                });
              } else if (isComponentOfType(BodyRow, child)) {
                return React.cloneElement(child, {
                  hovered: hoveredRow === child.key,
                  onMouseEnter: (event) => this.handleBodyRowMouseEnter(child, event),
                  onMouseLeave: (event) => this.handleBodyRowMouseLeave(child, event),
                  sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                  sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                  ref: (rowNode) => this.rowNodes.set(key, rowNode),
                });
              }
            })}
          </div>
          {stickyFromRight > 0 && (
            <div className={cx(theme['section'], theme['has-blend-left'])}>
              {React.Children.map(children, (child) => {
                if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                  return React.cloneElement(child, { sliceFrom: -stickyFromRight });
                } else if (isComponentOfType(BodyRow, child)) {
                  return React.cloneElement(child, {
                    hovered: hoveredRow === child.key,
                    onMouseEnter: (event) => this.handleBodyRowMouseEnter(child, event),
                    onMouseLeave: (event) => this.handleBodyRowMouseLeave(child, event),
                    sliceFrom: -stickyFromRight,
                  });
                }
              })}
            </div>
          )}
        </Box>
        <ReactResizeDetector handleWidth onResize={this.handleResize} refreshMode="throttle" refreshRate={16} />
      </Box>
    );
  }
}

DataGrid.propTypes = {
  /** If true, datagrid will have a border and rounded corners. */
  bordered: PropTypes.bool,
  /** The content to display inside the data grid. */
  children: PropTypes.node,
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** A unique id which will be compared on each render to reset the selected rows */
  comparableId: PropTypes.any,
  /** If true, checkboxes will be rendered on the left side of each row */
  selectable: PropTypes.bool,
  /** Amount of columns that will be sticky, starting from left */
  stickyFromLeft: PropTypes.number,
  /** Amount of columns that will be sticky, starting from right */
  stickyFromRight: PropTypes.number,
  /** Callback function that is fired when the selected rows have changed */
  onSelectionChange: PropTypes.func,
  /** If true, a loading bar will be rendered below the header row */
  processing: PropTypes.bool,
};

DataGrid.defaultProps = {
  bordered: false,
  processing: false,
};

DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderRow.displayName = 'DataGrid.HeaderRow';
DataGrid.HeaderRowOverlay = HeaderRowOverlay;
DataGrid.HeaderRowOverlay.displayName = 'DataGrid.HeaderRowOverlay';
DataGrid.HeaderCell = HeaderCell;
DataGrid.HeaderCell.displayName = 'DataGrid.HeaderCell';
DataGrid.BodyRow = BodyRow;
DataGrid.BodyRow.displayName = 'DataGrid.BodyRow';
DataGrid.Cell = Cell;
DataGrid.Cell.displayName = 'DataGrid.Cell';
DataGrid.FooterRow = FooterRow;
DataGrid.FooterRow.displayName = 'DataGrid.FooterRow';

export default DataGrid;
