import cx from 'classnames';
import omit from 'lodash.omit';
import React, { ChangeEvent, ReactElement, ReactNode, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { GenericComponent } from '../../@types/types';
import Box from '../box';
import { BoxProps } from '../box/Box';
import LoadingBar from '../loadingBar';
import isComponentOfType from '../utils/is-component-of-type';
import isReactElement from '../utils/is-react-element';
import { isElementOverflowingX } from '../utils/utils';
import BodyRow, { BodyRowProps } from './BodyRow';
import Cell, { CellProps } from './Cell';
import FooterRow, { FooterRowProps } from './FooterRow';
import HeaderCell, { HeaderCellProps } from './HeaderCell';
import HeaderRow, { HeaderRowProps } from './HeaderRow';
import HeaderRowOverlay, { HeaderRowOverlayProps } from './HeaderRowOverlay/HeaderRowOverlay';
import theme from './theme.css';

export interface DataGridProps extends Omit<BoxProps, 'children' | 'className'> {
  /** If true, datagrid will have a border and rounded corners. */
  bordered?: boolean;
  /** The content to display inside the data grid. */
  children?: ReactNode;
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** A unique id which will be compared on each render to reset the selected rows */
  comparableId?: string | number;
  /** If true, checkboxes will be rendered on the left side of each row */
  selectable?: boolean;
  /** Amount of columns that will be sticky, starting from left */
  stickyFromLeft?: number;
  /** Amount of columns that will be sticky, starting from right */
  stickyFromRight?: number;
  /** Callback function that is fired when the selected rows have changed */
  onSelectionChange?: (selection: (string | number)[], event: ChangeEvent | null) => void;
  /** If true, a loading bar will be rendered below the header row */
  processing?: boolean;
}

interface DatagridComponent extends GenericComponent<DataGridProps> {
  HeaderRow: GenericComponent<HeaderRowProps>;
  HeaderRowOverlay: GenericComponent<HeaderRowOverlayProps>;
  HeaderCell: GenericComponent<HeaderCellProps>;
  BodyRow: GenericComponent<BodyRowProps>;
  Cell: GenericComponent<CellProps>;
  FooterRow: GenericComponent<FooterRowProps>;
}

export const DataGrid: DatagridComponent = forwardRef<HTMLElement, DataGridProps>(
  (
    {
      bordered = false,
      children,
      className,
      processing = false,
      comparableId,
      selectable,
      stickyFromLeft = 0,
      stickyFromRight = 0,
      onSelectionChange,
      ...others
    },
    ref,
  ) => {
    const [hoveredRow, setHoveredRow] = useState<React.Key | null>(null);
    const [isOverflowing, setOverflowing] = useState(false);
    const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
    const scrollableNode = useRef<HTMLDivElement>(null);
    const [rowNodes, setRowNodes] = useState<Map<number, HTMLElement>>(new Map());
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [rowNodes, rowNodes.size],
    );
    const childrenArray: (ReactElement | ReactElement[])[] = !Array.isArray(children) ? [children] : children;
    const bodyRowCount = (childrenArray.find((child) => Array.isArray(child)) as ReactElement[] | undefined)?.length;

    const handleSelectionChange = (selection: React.Key[], event: ChangeEvent | null = null) => {
      if (onSelectionChange) {
        onSelectionChange(selection, event);
      }
    };

    const handleHeaderRowSelectionChange = (checked: boolean, event: ChangeEvent) => {
      const allBodyRowIndexes = React.Children.map(children, (child) => {
        if (isReactElement(child) && isComponentOfType(BodyRow, child)) {
          return child.key;
        }
      });

      const selectedBodyRowIndexes = checked ? allBodyRowIndexes ?? [] : [];
      setSelectedRows(selectedBodyRowIndexes);
      handleSelectionChange(selectedBodyRowIndexes, event);
    };

    const handleBodyRowMouseEnter = (row: ReactElement, event: MouseEvent) => {
      const { onClick, onMouseOver } = row.props;

      onClick && setHoveredRow(row.key);
      onMouseOver && onMouseOver(event);
    };

    const handleBodyRowMouseLeave = (row: ReactElement, event: MouseEvent) => {
      const { onClick, onMouseOut } = row.props;

      onClick && setHoveredRow(null);
      onMouseOut && onMouseOut(event);
    };

    const handleBodyRowSelectionChange = (rowIndex: React.Key | null, event: ChangeEvent) => {
      if (rowIndex === null) {
        return;
      }

      const rows = selectedRows.includes(rowIndex)
        ? selectedRows.filter((row) => row !== rowIndex)
        : [...selectedRows, rowIndex];

      setSelectedRows(rows);
      handleSelectionChange(rows, event);
    };

    const handleResize = () => {
      if (isElementOverflowingX(scrollableNode.current)) {
        setOverflowing(true);
      } else {
        setOverflowing(false);
      }
    };

    useEffect(() => {
      handleResize();
    });

    useEffect(() => {
      setSelectedRows([]);
      handleSelectionChange([]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comparableId]);

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
      <Box data-teamleader-ui="data-grid" className={classNames} {...rest} ref={ref}>
        {processing && (
          <div className={cx(theme['loading-bar'])}>
            <LoadingBar />
          </div>
        )}
        {selectedRows.length > 0 &&
          React.Children.map(children, (child) => {
            if (isReactElement(child) && isComponentOfType(HeaderRowOverlay, child)) {
              return React.cloneElement(child, {
                numSelectedRows: selectedRows.length,
              });
            }
          })}
        <Box display="flex" className={cx(theme['section-wrapper'])}>
          {(selectable || stickyFromLeft > 0) && (
            <div className={sectionLeftClassNames}>
              {React.Children.map(children, (child) => {
                if (isReactElement(child)) {
                  if (isComponentOfType(HeaderRow, child)) {
                    return React.cloneElement(child, {
                      onSelectionChange: handleHeaderRowSelectionChange,
                      selected: selectedRows.length === bodyRowCount,
                      selectable,
                      sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                    });
                  } else if (isComponentOfType(BodyRow, child)) {
                    return React.cloneElement(child, {
                      hovered: hoveredRow === child.key,
                      onMouseEnter: (event: MouseEvent) => handleBodyRowMouseEnter(child, event),
                      onMouseLeave: (event: MouseEvent) => handleBodyRowMouseLeave(child, event),
                      onSelectionChange: (checked: boolean, event: ChangeEvent) =>
                        handleBodyRowSelectionChange(child.key, event),
                      selected: child.key ? selectedRows.indexOf(child.key) !== -1 : false,
                      selectable,
                      sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                    });
                  } else if (isComponentOfType(FooterRow, child)) {
                    return React.cloneElement(child, {
                      preserveSelectableSpace: selectable,
                      sliceTo: stickyFromLeft > 0 ? stickyFromLeft : 0,
                    });
                  }
                }
              })}
            </div>
          )}
          <div className={cx(theme['section'], theme['is-scrollable'])} ref={scrollableNode}>
            {React.Children.map(children, (child, key) => {
              if (isReactElement(child)) {
                if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                  return React.cloneElement(child, {
                    sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                    sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                    ref: (rowNode: HTMLElement | null) => rowNode && setRowNodes(rowNodes.set(key, rowNode)),
                    style: isOverflowing
                      ? {
                          minWidth: `${totalRowChildrenWidth - 10}px`,
                        }
                      : undefined,
                  });
                } else if (isComponentOfType(BodyRow, child)) {
                  return React.cloneElement(child, {
                    hovered: hoveredRow === child.key,
                    onMouseEnter: (event: MouseEvent) => handleBodyRowMouseEnter(child, event),
                    onMouseLeave: (event: MouseEvent) => handleBodyRowMouseLeave(child, event),
                    sliceFrom: stickyFromLeft > 0 ? stickyFromLeft : 0,
                    sliceTo: stickyFromRight > 0 ? -stickyFromRight : undefined,
                    ref: (rowNode: HTMLElement | null) => rowNode && setRowNodes(rowNodes.set(key, rowNode)),
                    style: isOverflowing
                      ? {
                          minWidth: `${totalRowChildrenWidth - 10}px`,
                        }
                      : undefined,
                  });
                }
              }
            })}
          </div>
          {stickyFromRight > 0 && (
            <div className={cx(theme['section'], theme['has-blend-left'])}>
              {React.Children.map(children, (child) => {
                if (isReactElement(child)) {
                  if (isComponentOfType(HeaderRow, child) || isComponentOfType(FooterRow, child)) {
                    return React.cloneElement(child, { sliceFrom: -stickyFromRight });
                  } else if (isComponentOfType(BodyRow, child)) {
                    return React.cloneElement(child, {
                      hovered: hoveredRow === child.key,
                      onMouseEnter: (event: MouseEvent) => handleBodyRowMouseEnter(child, event),
                      onMouseLeave: (event: MouseEvent) => handleBodyRowMouseLeave(child, event),
                      sliceFrom: -stickyFromRight,
                    });
                  }
                }
              })}
            </div>
          )}
        </Box>
        <ReactResizeDetector handleWidth onResize={handleResize} refreshMode="throttle" refreshRate={16} />
      </Box>
    );
  },
);

DataGrid.HeaderRow = HeaderRow;
DataGrid.HeaderRowOverlay = HeaderRowOverlay;
DataGrid.HeaderCell = HeaderCell;
DataGrid.BodyRow = BodyRow;
DataGrid.Cell = Cell;
DataGrid.FooterRow = FooterRow;

DataGrid.displayName = 'DataGrid';

export default DataGrid;
