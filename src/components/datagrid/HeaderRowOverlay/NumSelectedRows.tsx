import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../box';
import { TextBody, Monospaced } from '../../typography';

const NumSelectedRows = ({ numSelectedRows = 0, numSelectedRowsLabel = () => 'selected' }) => (
  <Box marginRight={3} data-teamleader-ui="datagrid-num-selected-rows">
    <TextBody element="span" marginRight={1}>
      <Monospaced>
        <strong>{numSelectedRows}</strong>
      </Monospaced>
    </TextBody>
    <TextBody color="neutral" element="span">
      {numSelectedRowsLabel(numSelectedRows)}
    </TextBody>
  </Box>
);

NumSelectedRows.propTypes = {
  /** The displayed number of selected rows */
  numSelectedRows: PropTypes.number,
  /** The function returning the label accompanying the number of selected rows */
  numSelectedRowsLabel: PropTypes.func,
};

export default NumSelectedRows;
