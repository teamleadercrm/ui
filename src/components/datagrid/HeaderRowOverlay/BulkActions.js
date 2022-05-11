import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';

const BulkActions = ({ bulkActions = [] }) => (
  <Box display="flex" flex="1" alignItems="center" data-teamleader-ui="datagrid-bulk-actions">
    {bulkActions}
  </Box>
);

BulkActions.propTypes = {
  /** Button element(s), used to display the bulk actions */
  bulkActions: PropTypes.any,
};

export default BulkActions;
