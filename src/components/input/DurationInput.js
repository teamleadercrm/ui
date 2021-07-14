import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { Box, NumericInput } from '../../';
import theme from './theme.css';
import cx from 'classnames';

const transformToPaddedNumber = (number) => (number < 10 ? `0${number}` : number.toString());

const MINUTES_STEP = 15;

const DurationInput = forwardRef(
  ({ id, value, onChange, onBlur, onFocus, onKeyDown, autoFocus, textAlignRight, className, error, max }, ref) => {
    const containerRef = useRef();
    useImperativeHandle(ref, () => containerRef.current);

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

      const inputs = containerRef.current?.getElementsByTagName('input') || [];
      if (Array.from(inputs).find((node) => node === event.relatedTarget)) {
        return;
      }

      const buttons = containerRef.current?.getElementsByTagName('button') || [];
      if (Array.from(buttons).find((node) => node === event.relatedTarget)) {
        return;
      }

      onBlur && onBlur(event);
    };

    let minutes = value?.minutes;
    if (Number.isInteger(minutes)) {
      minutes = transformToPaddedNumber(minutes);
    }
    // if it starts with 0, allow one more so we don't block typing (because we autopad the minutes)
    const maxMinuteLength = (minutes && minutes.length >= 2 && minutes[0] !== '0') ? 2 : 3

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
    let maxHourLength;
    if (hours && maxHours) {
      maxHourLength = maxHours.toString().length;

      // if it starts with 0, allow one more so we don't block typing (because we autopad the hours)
      if (hours && hours.length >= maxHourLength && hours[0] === '0') {
        maxHourLength += 1;
      }
    }

    // Minutes are relative to the already filled in hours, so the max needs to be set on the fly
    const isMaximumMinutesLimited = (max && value?.hours && value.hours >= maxHours) || maxHours === 0;

    return (
      <Box
        id={id}
        display="flex"
        alignItems="center"
        ref={containerRef}
        className={cx(className, theme['duration-input-numeric-container'], { [theme['has-error']]: error })}
      >
        <NumericInput
          placeholder="00"
          min={0}
          {...(max ? { max: maxHours } : {})}
          maxLength={maxHourLength}
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
          maxLength={maxMinuteLength}
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
  },
);

DurationInput.propTypes = {
  id: PropTypes.string,
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

DurationInput.displayName = 'DurationInput';

export default DurationInput;
