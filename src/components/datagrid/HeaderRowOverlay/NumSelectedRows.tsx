import React from 'react';
import Box from '../../box';
import { TextBody, Monospaced } from '../../typography';

interface NumSelectedRowsProps {
  /** The displayed number of selected rows */
  numSelectedRows?: number;
  /** The function returning the label accompanying the number of selected rows */
  numSelectedRowsLabel?: (numSelectedRows: number) => string;
}

const NumSelectedRows = ({ numSelectedRows = 0, numSelectedRowsLabel = () => 'selected' }: NumSelectedRowsProps) => (
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

export default NumSelectedRows;
