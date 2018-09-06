import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import NumSelectedRows from './NumSelectedRows';
import theme from './theme.css';

class HeaderRowOverlay extends PureComponent {
  render() {
    const { numSelectedRows } = this.props;

    return (
      numSelectedRows > 0 && (
        <Box className={theme['header-row-overlap']}>
          <NumSelectedRows numSelectedRows={numSelectedRows} />
        </Box>
      )
    );
  }
}

HeaderRowOverlay.propTypes = {
  /** If this value is greater than 0 then this component renders, it also is used for displaying the number of selected rows */
  numSelectedRows: PropTypes.number,
};

HeaderRowOverlay.defaultProps = {
  numSelectedRows: 0,
};

export default HeaderRowOverlay;
