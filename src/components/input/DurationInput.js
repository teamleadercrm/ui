import React, { useRef } from 'react';
import { Box, NumericInput } from '../../';
import theme from './theme.css';

const transformToPaddedNumber = (number) => (number < 10 ? `0${number}` : number.toString());

const DurationInput = ({ value, onChange, onBlur, onFocus, onKeyDown, autoFocus, className }) => {
  const ref = useRef();

  const handleHoursChanged = (_, hours) => {
    if (!onChange) {
      return;
    }

    if (hours === '') {
      onChange({
        minutes: value?.minutes,
      });
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

    if (minutes === '') {
      onChange({
        hours: value?.hours,
      });
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

  /**
   * This blur handler is a special one, because this input consists of multiple focus points:
   * the two inputs themselves, and the four increment/decrement buttons
   * we filter out the blur events caused by changing focus between these, so the onBlur event only
   * gets triggered when really blurring outside of the entire component
   */
  const handleBlur = (event) => {
    if (!event.relatedTarget) {
      onBlur && onBlur(event);
      return;
    }

    const inputs = ref.current?.getElementsByTagName('input') || [];
    if (Array.from(inputs).find((node) => node === event.relatedTarget)) {
      return;
    }

    const buttons = ref.current?.getElementsByTagName('button') || [];
    if (Array.from(buttons).find((node) => node === event.relatedTarget)) {
      return;
    }

    onBlur && onBlur(event);
  };

  let minutes = value?.minutes;
  if (Number.isInteger(minutes)) {
    minutes = transformToPaddedNumber(minutes);
  }

  return (
    <Box display="flex" alignItems="center" ref={ref} className={className}>
      <NumericInput
        placeholder="0"
        min={0}
        value={value?.hours ?? ''}
        onChange={handleHoursChanged}
        onBlur={handleBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        type="text"
        inputMode="numeric"
        flexGrow={1}
        className={theme['duration-input-numeric-input']}
        autoFocus={autoFocus}
      />
      <Box element="span" className={theme['duration-input-colon']}>
        :
      </Box>
      <NumericInput
        placeholder="00"
        {...(!value?.hours ? { min: 0 } : {})}
        value={minutes ?? ''}
        onChange={handleMinutesChange}
        onBlur={handleBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        type="text"
        inputMode="numeric"
        flexGrow={1}
        className={theme['duration-input-numeric-input']}
      />
    </Box>
  );
};

export default DurationInput;
