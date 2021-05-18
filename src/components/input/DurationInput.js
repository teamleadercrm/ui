import React from 'react';
import { Box, NumericInput } from '../../';

const transformToPaddedNumber = (number) => (number < 10 ? `0${number}` : number.toString());

const DurationInput = ({ value, onChange, onKeyDown }) => {
  const handleHoursChanged = (_, hours) => {
    if (!onChange) {
      return;
    }

    const parsedHours = parseInt(hours);
    if (!Number.isInteger(parsedHours)) {
      return;
    }

    onChange({
      ...value,
      hours: parsedHours,
    });
  };

  const handleMinutesChange = (_, minutes) => {
    if (!onChange) {
      return;
    }

    const parsedMinutes = parseInt(minutes);
    if (!Number.isInteger(parsedMinutes)) {
      return;
    }

    if (parsedMinutes >= 60) {
      onChange({
        hours: (value?.hours || 0) + 1,
        minutes: 0,
      });
      return;
    }

    if (parsedMinutes < 0) {
      onChange({
        hours: (value?.hours || 1) - 1,
        minutes: 59,
      });
      return;
    }

    onChange({
      ...value,
      minutes: parsedMinutes,
    });
  };

  let minutes = value?.minutes;
  if (Number.isInteger(minutes)) {
    minutes = transformToPaddedNumber(minutes);
  }

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
        value={minutes ?? ''}
        onChange={handleMinutesChange}
        onKeyDown={onKeyDown}
        size="small"
        flexGrow={1}
      />
    </Box>
  );
};

export default DurationInput;
