import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Box from '../box';
import BulkActions from './BulkActions';
import NumSelectedRows from './NumSelectedRows';
import theme from './theme.css';

class HeaderRowOverlay extends PureComponent {
  render() {
    const { children, className, numSelectedRows, numSelectedRowsLabel, ...others } = this.props;

    const classNames = cx(theme['header-row-overlap'], className);

    return (
      numSelectedRows > 0 && (
        <Box display="flex" alignItems="center" className={classNames} {...others}>
          <NumSelectedRows numSelectedRows={numSelectedRows} numSelectedRowsLabel={numSelectedRowsLabel} />
          <BulkActions bulkActions={children} />
        </Box>
      )
    );
  }
}

HeaderRowOverlay.propTypes = {
  /** Passed down button element(s), are used to display the bulk actions */
  children: PropTypes.any,
  /** A class name for the container to give custom styles */
  className: PropTypes.string,
  /** If this value is greater than 0 then this component renders, it is also passed down to display the number of selected rows */
  numSelectedRows: PropTypes.number,
  /** Passed down string, is used as the label accompanying the number of selected rows */
  numSelectedRowsLabel: PropTypes.string,
};

HeaderRowOverlay.defaultProps = {
  className: '',
  numSelectedRows: 0,
};

export default HeaderRowOverlay;
