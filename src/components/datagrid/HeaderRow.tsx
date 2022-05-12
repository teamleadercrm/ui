import React, { ChangeEvent, forwardRef } from 'react';
import Row, { RowProps } from './Row';
import HeaderCell from './HeaderCell';
import Checkbox from '../checkbox';
import cx from 'classnames';
import theme from './theme.css';

interface HeaderRowProps extends RowProps {
  /** Callback function that is fired when the checkbox on the left side has changed. */
  onSelectionChange?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  /** If true, checkboxes will be rendered on the left side of each row. */
  selectable?: boolean;
  /** If true, the checkbox on the left side of the row will be checked. */
  selected?: boolean;
  /** Amount of cells that will be sliced off, starting from left. */
  sliceFrom?: number;
  /** Amount of cells that will be sliced off, starting from right. */
  sliceTo?: number;
}

const HeaderRow = forwardRef<HTMLElement, HeaderRowProps>(
  ({ className, children, sliceFrom, sliceTo, onSelectionChange, selected, selectable, ...others }, ref) => {
    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['header-row'], className);

    return (
      <Row
        backgroundColor="neutral"
        className={classNames}
        data-teamleader-ui="datagrid-header-row"
        ref={ref}
        {...others}
      >
        {selectable && (
          <HeaderCell flex="checkbox-width" sortable={false}>
            <Checkbox checked={selected} onChange={onSelectionChange} size="small" />
          </HeaderCell>
        )}
        {childrenSliced}
      </Row>
    );
  },
);

HeaderRow.displayName = 'HeaderRow';

export default HeaderRow;
