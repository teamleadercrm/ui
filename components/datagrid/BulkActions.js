import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import theme from './theme.css';

class BulkActions extends PureComponent {
  render() {
    const { bulkActions } = this.props;
    return (
      <Box display="flex" align-items="center" className={theme['bulk-actions']}>
        {bulkActions}
      </Box>
    );
  }
}

BulkActions.propTypes = {
  bulkActions: PropTypes.any,
};

BulkActions.defaultProps = {
  bulkActions: [],
};

export default BulkActions;
