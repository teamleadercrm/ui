import React, { FocusEvent, FormEvent, forwardRef, KeyboardEvent, useImperativeHandle, useRef } from 'react';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import NumericInput, { NumericInputProps } from './NumericInput';
import { GenericComponent } from '../../@types/types';
import { BoxProps } from '../box/Box';
import { SIZES } from '../../constants';

const MINUTES_STEP = 15;

export interface DurationInputProps
  extends Omit<NumericInputProps, 'className' | 'id' | 'max' | 'onBlur' | 'onChange' | 'onKeyDown' | 'size' | 'value'>,
    Omit<BoxProps, 'size' | 'ref'> {
  /** Sets a class name for the wrapper to give custom styles. */
  className?: string;
  /** The id of the container containing the input field. */
  id?: string | undefined;
  /** The maximum value that can be inputted. */
  max?: number;
  /** Callback function that is fired when blurring the input field. */
  onBlur?: (event: FocusEvent<HTMLElement>) => void;
  /** Callback function that is fired when the component's value changes. */
  onChange?: (value?: { hours?: number; minutes?: number }) => void;
  /** Callback function that is fired when the keyboard is touched. */
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  /** Size of the input element. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'smallest' | 'hero'>;
  /** Current value of the input element. */
  value?: {
    hours?: number;
    minutes?: number;
  };
}

const DurationInput: GenericComponent<DurationInputProps> = forwardRef<HTMLElement, DurationInputProps>(
  (
    {
      autoFocus,
      className,
      error,
      id,
      max,
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      size = 'medium',
      textAlignRight = false,
      value,
    }: DurationInputProps,
    forwardedRef,
  ) => {
    const containerRef = useRef<HTMLElement>(null);
    useImperativeHandle<HTMLElement | null, HTMLElement | null>(forwardedRef, () => containerRef.current);

    const handleHoursChanged = (_: FormEvent<HTMLElement>, hours: string) => {
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

    const handleMinutesChange = (_: FormEvent<HTMLElement>, minutes: string) => {
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
    const handleBlur = (event: FocusEvent<HTMLElement>) => {
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

    const transformToPaddedNumber = (number: number) => {
      return number < 10 ? `0${number}` : number.toString();
    };

    const getHoursString = () => {
      const hours = value?.hours;

      if (Number.isInteger(hours)) {
        return transformToPaddedNumber(hours as number);
      } else if (hours) {
        return hours.toString();
      }

      return undefined;
    };

    const getMinutesString = () => {
      const minutes = value?.minutes;

      if (Number.isInteger(minutes)) {
        return transformToPaddedNumber(minutes as number);
      } else if (minutes) {
        return minutes.toString();
      }

      return undefined;
    };

    const getMaxHoursAndMinutes = (): { maxHours: number | undefined; maxMinutes: number | undefined } => {
      if (max) {
        return {
          maxHours: Math.floor(max / 60),
          maxMinutes: max % 60,
        };
      }

      return {
        maxHours: undefined,
        maxMinutes: undefined,
      };
    };

    const getMaxHourLength = () => {
      const { maxHours } = getMaxHoursAndMinutes();
      const hoursString = getHoursString();

      if (hoursString && maxHours) {
        let maxHourLength = maxHours.toString().length;

        // if it starts with 0, allow one more so we don't block typing (because we autopad the hours)
        if (hoursString.length >= maxHourLength && hoursString[0] === '0') {
          maxHourLength += 1;
        }

        return maxHourLength;
      }

      return undefined;
    };

    const getMaxMinuteLength = () => {
      const minutesString = getMinutesString();

      // if it starts with 0, allow one more so we don't block typing (because we autopad the minutes)
      return minutesString && minutesString.length >= 2 && minutesString[0] !== '0' ? 2 : 3;
    };

    const isMaximumMinutesLimited = () => {
      const { maxHours } = getMaxHoursAndMinutes();

      // Minutes are relative to the already filled in hours, so the max needs to be set on the fly
      return (max && value?.hours && maxHours && value.hours >= maxHours) || maxHours === 0;
    };

    return (
      <Box
        data-teamleader-ui="duration-input"
        id={id}
        display="flex"
        alignItems="center"
        ref={containerRef}
        className={cx(className, theme['duration-input-numeric-container'], { [theme['has-error']]: error })}
      >
        <NumericInput
          placeholder="00"
          min={0}
          {...(max ? { max: getMaxHoursAndMinutes().maxHours } : {})}
          maxLength={getMaxHourLength()}
          value={getHoursString() ?? ''}
          onChange={handleHoursChanged}
          onBlur={handleBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          type="text"
          inputMode="numeric"
          className={theme['duration-input-numeric-input']}
          autoFocus={autoFocus}
          textAlignRight={textAlignRight}
          size={size}
        />
        <NumericInput
          placeholder="00"
          step={MINUTES_STEP}
          {...(!value?.hours ? { min: 0 } : {})}
          {...(isMaximumMinutesLimited() ? { max: getMaxHoursAndMinutes().maxMinutes } : {})}
          maxLength={getMaxMinuteLength()}
          value={getMinutesString() ?? ''}
          onChange={handleMinutesChange}
          onBlur={handleBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          type="text"
          inputMode="numeric"
          className={theme['duration-input-numeric-input']}
          textAlignRight={textAlignRight}
          size={size}
        />
      </Box>
    );
  },
);

DurationInput.displayName = 'DurationInput';

export default DurationInput;
