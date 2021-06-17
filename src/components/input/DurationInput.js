import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, NumericInput } from '../../';
import theme from './theme.css';
import cx from "classnames";

const transformToPaddedNumber = (number) => (number < 10 ? `0${number}` : number.toString());

const MINUTES_STEP = 15;

const DurationInput = ({ value, onChange, onBlur, onFocus, onKeyDown, autoFocus, textAlignRight, className, error, max }) => {
  const ref = useRef();

  const handleHoursChanged = (_, hours) => {
    if (!onChange) {
      return;
    }

    if (hours === '') {
      if (typeof value?.minutes === 'undefined') {
        onChange();
        return;
      }

      onChange({
        minutes: value?.minutes,
      });
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

    if (minutes === '') {
      if (typeof value?.hours === 'undefined') {
        onChange();
        return;
      }

      onChange({
        hours: value?.hours,
      });
      return;
    }

    const parsedMinutes = parseInt(minutes);
    if (!Number.isInteger(parsedMinutes)) {
      return;
    }

    if (parsedMinutes > 60) {
      return;
    }

    if (parsedMinutes === 60) {
      onChange({
        hours: (value?.hours || 0) + 1,
        minutes: 0,
      });
      return;
    }

    if (parsedMinutes < 0) {
      onChange({
        hours: (value?.hours || 1) - 1,
        minutes: 60 - MINUTES_STEP,
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

  let hours = value?.hours;
  if (Number.isInteger(hours)) {
    hours = transformToPaddedNumber(hours);
  }

  let maxHours;
  let maxMinutes;
  if (max) {
    maxHours = Math.floor(max / 60);
    maxMinutes = max % 60;
  }

  // Minutes are relative to the already filled in hours, so the max needs to be set on the fly
  const isMaximumMinutesLimited = max
    && (value?.hours && value.hours >= maxHours)
    || maxHours === 0;

  return (
    <Box display="flex" alignItems="center" ref={ref} className={cx(className, theme['duration-input-numeric-container'], {[theme['has-error']]: error})}>
      <NumericInput
        placeholder="00"
        min={0}
        {...(max ? { max: maxHours } : {})}
        value={hours ?? ''}
        onChange={handleHoursChanged}
        onBlur={handleBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        type="text"
        inputMode="numeric"
        className={theme['duration-input-numeric-input']}
        autoFocus={autoFocus}
        textAlignRight={textAlignRight}
      />
      <NumericInput
        placeholder="00"
        step={MINUTES_STEP}
        {...(!value?.hours ? { min: 0 } : {})}
        {...(isMaximumMinutesLimited ? { max: maxMinutes } : {})}
        value={minutes ?? ''}
        onChange={handleMinutesChange}
        onBlur={handleBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        type="text"
        inputMode="numeric"
        className={theme['duration-input-numeric-input']}
        textAlignRight={textAlignRight}
      />
    </Box>
  );
};

DurationInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  autoFocus: PropTypes.func,
  textAlignRight: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.bool,
  /** In minutes **/
  max: PropTypes.number,
};

export default DurationInput;
