import React, { ReactNode } from 'react';
import { GenericComponent } from '../../../@types/types';
import Box from '../../box';

interface BulkActionsProps {
  /** Button element(s), used to display the bulk actions */
  bulkActions?: ReactNode;
}

const BulkActions: GenericComponent<BulkActionsProps> = ({ bulkActions = [] }) => (
  <Box display="flex" flex="1" alignItems="center" data-teamleader-ui="datagrid-bulk-actions">
    {bulkActions}
  </Box>
);

export default BulkActions;
