import React from 'react';
import { Box, NumericInput } from '../../';

const DurationInput = ({ value, onChange, onKeyDown }) => {
  return (
    <Box display="flex" alignItems="center">
      <NumericInput placeholder="00" min={0} onKeyDown={onKeyDown} size="small" />
      <Box element="span" marginHorizontal={2}>
        :
      </Box>
      <NumericInput placeholder="00" min={0} onKeyDown={onKeyDown} size="small" />
    </Box>
  );
};

export default DurationInput;
