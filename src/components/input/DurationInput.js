import React from 'react';
import { Box, NumericInput } from '../../';

const DurationInput = ({ value, onChange, onKeyDown }) => {
  const handleHoursChanged = (_, hours) => {
    onChange &&
      onChange({
        ...value,
        hours,
      });
  };

  const handleMinutesChange = (_, minutes) => {
    if (!onChange) {
      return;
    }

    if (minutes >= 60) {
      onChange({
        hours: (value?.hours || 0) + 1,
        minutes: 0,
      });
      return;
    }

    if (minutes < 0) {
      onChange({
        hours: (value?.hours || 1) - 1,
        minutes: 59,
      });
      return;
    }

    onChange({
      ...value,
      minutes,
    });
  };

  return (
    <Box display="flex" alignItems="center">
      <NumericInput
        placeholder="00"
        min={0}
        value={value?.hours ?? ''}
        onChange={handleHoursChanged}
        onKeyDown={onKeyDown}
        size="small"
        flexGrow={1}
      />
      <Box element="span" marginHorizontal={2}>
        :
      </Box>
      <NumericInput
        placeholder="00"
        {...(!value?.hours ? { min: 0 } : {})}
        value={value?.minutes ?? ''}
        onChange={handleMinutesChange}
        onKeyDown={onKeyDown}
        size="small"
        flexGrow={1}
      />
    </Box>
  );
};

export default DurationInput;
