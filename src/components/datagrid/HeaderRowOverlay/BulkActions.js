import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';

class BulkActions extends PureComponent {
  render() {
    const { bulkActions } = this.props;
    return (
      <Box display="flex" flex="1" alignItems="center" data-teamleader-ui="datagrid-bulk-actions">
        {bulkActions}
      </Box>
    );
  }
}

BulkActions.propTypes = {
  /** Button element(s), used to display the bulk actions */
  bulkActions: PropTypes.any,
};

BulkActions.defaultProps = {
  bulkActions: [],
};

BulkActions.displayName = 'BulkActions';

export default BulkActions;
