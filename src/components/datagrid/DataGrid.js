import React, { useEffect, useMemo, useRef, useState } from 'react';
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
const DataGrid = ({
  bordered = false,
  children,
  className,
  processing = false,
  comparableId,
  selectable,
  stickyFromLeft,
  stickyFromRight,
  onSelectionChange,
  ...others
}) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isOverflowing, setOverflowing] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const scrollableNode = useRef(null);
  const [rowNodes, setRowNodes] = useState(new Map());

  const totalRowChildrenWidth = useMemo(
    () =>
      Array.from(rowNodes.values())
        .filter((rowDOMNode) => rowDOMNode.children)
        .map((rowDOMNode) =>
          Array.from(rowDOMNode.children)
            .map((child) => child.clientWidth)
            .reduce((accumulatedChildWidth, currentChildWidth) => accumulatedChildWidth + currentChildWidth, 0),
        )
        .reduce((maxRowWidth, currentRowWidth) => (currentRowWidth > maxRowWidth ? currentRowWidth : maxRowWidth), 0),
    [rowNodes, rowNodes.size],
  );

  useEffect(() => {
    handleResize();
  });

  useEffect(() => {
    handleSelectionChange([]);
    setSelectedRows([]);
  }, [comparableId]);

  const handleHeaderRowSelectionChange = (checked, event) => {
    const allBodyRowIndexes = React.Children.map(children, (child) => {
      if (isComponentOfType(BodyRow, child)) {
        return child.key;
      }
    });

    const selectedBodyRowIndexes = checked ? allBodyRowIndexes : [];

    setSelectedRows(selectedBodyRowIndexes);
    handleSelectionChange(selectedBodyRowIndexes, event);
  };

  const handleBodyRowMouseEnter = (row, event) => {
    const { onClick, onMouseOver } = row.props;

    onClick && setHoveredRow({ hoveredRow: row.key });
    onMouseOver && onMouseOver(event);
  };

  const handleBodyRowMouseLeave = (row, event) => {
    const { onClick, onMouseOut } = row.props;

    onClick && setHoveredRow(null);
    onMouseOut && onMouseOut(event);
  };

  const handleBodyRowSelectionChange = (rowIndex, event) => {
    const rows = selectedRows.includes(rowIndex)
      ? selectedRows.filter((row) => row !== rowIndex)
      : [...selectedRows, rowIndex];

    setSelectedRows(rows);
    handleSelectionChange(selectedRows, event);
  };

  const handleResize = () => {
    if (isElementOverflowingX(scrollableNode.current)) {
      setOverflowing(true);
    } else {
      setOverflowing(false);
    }
  };

  const handleSelectionChange = (selection, event = null) => {
    if (onSelectionChange) {
      onSelectionChange(selection, event);
    }
  };

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
                  onSelectionChange: handleHeaderRowSelectionChange,
                  selected: selectedRows.length === children.find((child) => Array.isArray(child)).length,
                  selectable,
                  sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                });
              } else if (isComponentOfType(BodyRow, child)) {
                return React.cloneElement(child, {
                  hovered: hoveredRow === child.key,
                  onMouseEnter: (event) => handleBodyRowMouseEnter(child, event),
                  onMouseLeave: (event) => handleBodyRowMouseLeave(child, event),
                  onSelectionChange: (checked, event) => handleBodyRowSelectionChange(child.key, event),
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
        <div className={cx(theme['section'], theme['is-scrollable'])} ref={scrollableNode}>
          {React.Children.map(children, (child, key) => {
            if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
              return React.cloneElement(child, {
                sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                ref: (rowNode) => setRowNodes(rowNodes.set(key, rowNode)),
                style: isOverflowing
                  ? {
                      minWidth: `${totalRowChildrenWidth - 10}px`,
                    }
                  : undefined,
              });
            } else if (isComponentOfType(BodyRow, child)) {
              return React.cloneElement(child, {
                hovered: hoveredRow === child.key,
                onMouseEnter: (event) => handleBodyRowMouseEnter(child, event),
                onMouseLeave: (event) => handleBodyRowMouseLeave(child, event),
                sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                ref: (rowNode) => setRowNodes(rowNodes.set(key, rowNode)),
                style: isOverflowing
                  ? {
                      minWidth: `${totalRowChildrenWidth - 10}px`,
                    }
                  : undefined,
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
                  onMouseEnter: (event) => handleBodyRowMouseEnter(child, event),
                  onMouseLeave: (event) => handleBodyRowMouseLeave(child, event),
                  sliceFrom: -stickyFromRight,
                });
              }
            })}
          </div>
        )}
      </Box>
      <ReactResizeDetector handleWidth onResize={handleResize} refreshMode="throttle" refreshRate={16} />
    </Box>
  );
};

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
