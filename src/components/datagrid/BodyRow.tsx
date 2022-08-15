import React, { forwardRef, useCallback } from 'react';
import Cell from './Cell';
import Checkbox from '../checkbox';
import Row, { RowProps } from './Row';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';

export interface BodyRowProps extends RowProps {
  /** If true, the row will show a hover state */
  hovered?: boolean;
  /** Callback function that is fired when the row is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** Callback function that is fired when the checkbox on the left side has changed. */
  onSelectionChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** If true, checkboxes will be rendered on the left side of each row. */
  selectable?: boolean;
  /** If true, the checkbox on the left side of the row will be checked. */
  selected?: boolean;
  /** Amount of cells that will be sliced off, starting from left. */
  sliceFrom?: number;
  /** Amount of cells that will be sliced off, starting from right. */
  sliceTo?: number;
}

const BodyRow: GenericComponent<BodyRowProps> = forwardRef<HTMLElement, BodyRowProps>(
  (
    { className, children, hovered, sliceFrom, sliceTo, onClick, onSelectionChange, selected, selectable, ...others },
    ref,
  ) => {
    const handleClick = useCallback(
      (event) => {
        onClick && onClick(event);
      },
      [onClick],
    );

    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(
      theme['body-row'],
      {
        [theme['has-pointer-cursor']]: onClick,
      },
      className,
    );

    return (
      <Row
        backgroundColor={hovered ? 'neutral' : 'white'}
        className={classNames}
        data-teamleader-ui="datagrid-body-row"
        onClick={handleClick}
        ref={ref}
        {...others}
      >
        {selectable && (
          <Cell flex="checkbox-width" onClick={(event) => event.stopPropagation()} preventOverflow={false}>
            <Checkbox checked={selected} onChange={onSelectionChange} size="small" />
          </Cell>
        )}
        {childrenSliced}
      </Row>
    );
  },
);

BodyRow.displayName = 'BodyRow';

export default BodyRow;
