import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';
import theme from './theme.css';

class BulkActions extends PureComponent {
  render() {
    const { bulkActions } = this.props;
    return (
      <Box
        display="flex"
        align-items="center"
        className={theme['bulk-actions']}
        data-teamleader-ui="datagrid-num-selected-rows"
      >
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

export default BulkActions;
