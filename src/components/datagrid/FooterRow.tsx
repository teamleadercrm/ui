import React, { forwardRef } from 'react';
import Cell from './Cell';
import Row, { RowProps } from './Row';
import cx from 'classnames';
import theme from './theme.css';
import { GenericComponent } from '../../@types/types';

export interface FooterRowProps extends RowProps {
  /** Will render a checkbox cell at the front of the row when true */
  preserveSelectableSpace?: boolean;
  /** Amount of cells that will be sliced off, starting from left. */
  sliceFrom?: number;
  /** Amount of cells that will be sliced off, starting from right. */
  sliceTo?: number;
}

const FooterRow: GenericComponent<FooterRowProps> = forwardRef<HTMLElement, FooterRowProps>(
  ({ className, children, sliceFrom, sliceTo, preserveSelectableSpace, ...others }, ref) => {
    const childrenArray = Array.isArray(children) ? children : [children];
    const childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
    const classNames = cx(theme['footer-row'], className);

    return (
      <Row className={classNames} data-teamleader-ui="datagrid-footer-row" ref={ref} {...others}>
        {preserveSelectableSpace && <Cell flex="checkbox-width" preventOverflow={false} />}
        {childrenSliced}
      </Row>
    );
  },
);

FooterRow.displayName = 'DataGrid.FooterRow';
export default FooterRow;
