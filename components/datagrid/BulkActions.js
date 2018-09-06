import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from '../button';
import theme from './theme.css';

class BulkActions extends PureComponent {
  render() {
    const { bulkActions } = this.props;
    return (
      <ButtonGroup className={theme['bulk-actions']} segmented>
        {bulkActions}
      </ButtonGroup>
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
