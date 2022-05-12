import React, { ReactNode } from 'react';
import Box from '../../box';

interface BulkActionsProps {
  /** Button element(s), used to display the bulk actions */
  bulkActions?: ReactNode;
}

const BulkActions = ({ bulkActions = [] }: BulkActionsProps) => (
  <Box display="flex" flex="1" alignItems="center" data-teamleader-ui="datagrid-bulk-actions">
    {bulkActions}
  </Box>
);

export default BulkActions;
