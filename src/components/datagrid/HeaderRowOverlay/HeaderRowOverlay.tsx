import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../../box';
import BulkActions from './BulkActions';
import NumSelectedRows from './NumSelectedRows';
import theme from './theme.css';

const HeaderRowOverlay = ({
  children,
  className,
  headerCellCheckboxSize,
  numSelectedRows = 0,
  numSelectedRowsLabel,
  ...others
}) => {
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
      {...others}
    >
      <NumSelectedRows numSelectedRows={numSelectedRows} numSelectedRowsLabel={numSelectedRowsLabel} />
      <BulkActions bulkActions={children} />
    </Box>
  );
};

HeaderRowOverlay.propTypes = {
  /** The size of the checkboxes in the grid, used to set the right spacing between this component and the checkbox in the HeaderCell */
  headerCellCheckboxSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Passed down button element(s), are used to display the bulk actions */
  children: PropTypes.any,
  /** A class name for the container to give custom styles */
  className: PropTypes.string,
  /** If this value is greater than 0 then this component renders, it is also passed down to display the number of selected rows */
  numSelectedRows: PropTypes.number,
  /** Passed down function, is used to render the label accompanying the number of selected rows */
  numSelectedRowsLabel: PropTypes.func,
};

export default HeaderRowOverlay;
