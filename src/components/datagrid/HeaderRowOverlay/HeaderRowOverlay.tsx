import React, { ReactNode, forwardRef } from 'react';
import cx from 'classnames';
import Box from '../../box';
import BulkActions from './BulkActions';
import NumSelectedRows from './NumSelectedRows';
import theme from './theme.css';
import { GenericComponent } from '../../../@types/types';

export interface HeaderRowOverlayProps {
  /** The size of the checkboxes in the grid, used to set the right spacing between this component and the checkbox in the HeaderCell */
  headerCellCheckboxSize?: 'small' | 'medium' | 'large';
  /** Passed down button element(s), are used to display the bulk actions */
  children: ReactNode;
  /** A class name for the container to give custom styles */
  className?: string;
  /** If this value is greater than 0 then this component renders, it is also passed down to display the number of selected rows */
  numSelectedRows?: number;
  /** Passed down function, is used to render the label accompanying the number of selected rows */
  numSelectedRowsLabel?: (numSelectedRows?: number) => string;
}

const HeaderRowOverlay: GenericComponent<HeaderRowOverlayProps> = forwardRef<HTMLElement, HeaderRowOverlayProps>(
  ({ children, className, headerCellCheckboxSize, numSelectedRows = 0, numSelectedRowsLabel, ...others }, ref) => {
    const classNames = cx(
      theme['header-row-overlay'],
      theme[`data-grid-checkbox-size-${headerCellCheckboxSize}`],
      className,
    );

    return (
      <Box
        display="flex"
        alignItems="center"
        className={classNames}
        data-teamleader-ui="datagrid-header-row-overlay"
        ref={ref}
        {...others}
      >
        <NumSelectedRows numSelectedRows={numSelectedRows} numSelectedRowsLabel={numSelectedRowsLabel} />
        <BulkActions bulkActions={children} />
      </Box>
    );
  },
);

export default HeaderRowOverlay;
HeaderRowOverlay.displayName = 'DataGrid.HeaderRowOverlay';
