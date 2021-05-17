import React from 'react';
import { Box, NumericInput } from '../../';

const DurationInput = ({ value, onChange, onKeyDown }) => {
  return (
    <Box display="flex" alignItems="center">
      <NumericInput placeholder="00" min={0} onKeyDown={onKeyDown} size="small" flexGrow={1} />
      <Box element="span" marginHorizontal={2}>
        :
      </Box>
      <NumericInput placeholder="00" min={0} onKeyDown={onKeyDown} size="small" flexGrow={1} />
    </Box>
  );
};

export default DurationInput;
