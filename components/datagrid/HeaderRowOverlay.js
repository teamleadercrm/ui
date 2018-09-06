import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import NumSelectedRows from './NumSelectedRows';
import BulkActions from './BulkActions';
import theme from './theme.css';

class HeaderRowOverlay extends PureComponent {
  render() {
    const { numSelectedRows, numSelectedRowsLabel, children } = this.props;

    return (
      numSelectedRows > 0 && (
        <Box className={theme['header-row-overlap']}>
          <NumSelectedRows numSelectedRows={numSelectedRows} numSelectedRowsLabel={numSelectedRowsLabel} />
          <BulkActions bulkActions={children} />
        </Box>
      )
    );
  }
}

HeaderRowOverlay.propTypes = {
  /** If this value is greater than 0 then this component renders, it is also passed down to display the number of selected rows */
  numSelectedRows: PropTypes.number,
  /** Passed down string, is used as the label accompanying the number of selected rows */
  numSelectedRowsLabel: PropTypes.string,
  /** Passed down button element(s), are used to display the bulk actions */
  children: PropTypes.any,
};

HeaderRowOverlay.defaultProps = {
  numSelectedRows: 0,
};

export default HeaderRowOverlay;
