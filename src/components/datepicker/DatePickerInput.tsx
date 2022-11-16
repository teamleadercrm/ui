import { IconCalendarSmallOutline, IconCloseBadgedSmallFilled } from '@teamleader/ui-icons';
import React, { ReactNode, useEffect, useState } from 'react';
import { DayPickerProps as ReactDayPickerProps, Modifier } from 'react-day-picker';
import DatePicker from '.';
import { SIZES } from '../../constants';
import Box, { pickBoxProps } from '../box';
import { BoxProps } from '../box/Box';
import Icon from '../icon';
import Input from '../input';
import { InputProps } from '../input/Input';
import Popover from '../popover';
import { PopoverProps } from '../popover/Popover';
import { formatDate, parseMultiFormatsDate } from './localeUtils';
import theme from './theme.css';
import { isAllowedDate } from './utils';

const DEFAULT_FORMAT = 'dd/MM/yyyy';
const ALLOWED_DATE_FORMATS = [DEFAULT_FORMAT, 'd/M/yyyy', 'dd.MM.yyyy', 'd.M.yyyy', 'dd-MM-yyyy', 'd-M-yyyy'];

export interface DatePickerInputProps<IsTypeable extends boolean = true> extends Omit<BoxProps, 'size' | 'onChange'> {
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Object with props for the DatePicker component. */
  dayPickerProps?: DayPickerProps;
  /** A footer component, rendered at the bottom of the date picker */
  footer?: ReactNode;
  /** A custom function to format a date if input is not typeable */
  formatDate?: IsTypeable extends true ? never : (selectedDate: Date, locale: string) => string;
  /** Object with props for the Input component. */
  inputProps?: InputProps;
  /** If true, component will be rendered in inverse mode. */
  inverse?: boolean;
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale?: string;
  /** Callback function that is fired when the date has changed. */
  onChange?: (selectedDate: Date | undefined) => void;
  /** Callback function that is fired when the popover with the calendar gets closed (unfocused) */
  onBlur?: () => void;
  /** Object with props for the Popover component. */
  popoverProps?: PopoverProps;
  /** The current selected date. */
  selectedDate?: Date;
  /** Size of the Input & DatePicker components. */
  size?: Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;
  /** Overridable size of the Input component. */
  inputSize?: Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;
  /** Overridable size of the DatePicker component. */
  datePickerSize?: Exclude<typeof SIZES[number], 'tiny' | 'smallest' | 'hero' | 'fullscreen'>;
  /** Whether the picker should automatically open on input focus. True by default. */
  openPickerOnFocus?: boolean;
  /** Whether the input should have button for value clearing. False by default. */
  clearable?: boolean;
  /** Whether user is able to type into the input. True by default. */
  typeable?: IsTypeable;
  /** Error text that is displayed when typed date is invalid. */
  errorText?: string;
}

export type AllowedDisabledDays = Modifier | Date[];
interface DayPickerProps extends Omit<ReactDayPickerProps, 'modifiers' | 'disabledDays'> {
  numberOfMonths?: number;
  showOutsideDays?: boolean;
  showWeekNumbers?: boolean;
  withMonthPicker?: boolean;
  disabledDays?: AllowedDisabledDays;
}

function DatePickerInput<IsTypeable extends boolean = true>({
  className,
  dayPickerProps,
  footer,
  inverse = false,
  inputProps,
  locale = 'en-GB',
  popoverProps,
  size = 'medium',
  inputSize,
  datePickerSize,
  formatDate: customFormatDate,
  openPickerOnFocus = true,
  clearable = false,
  onChange,
  onBlur,
  typeable = true as IsTypeable,
  errorText,
  ...others
}: DatePickerInputProps<IsTypeable>) {
  const getFormattedDateString = (date: Date) => {
    if (!date) {
      return '';
    }

    if (typeable || !customFormatDate) {
      return formatDate(date, DEFAULT_FORMAT, locale);
    }

    return customFormatDate(date, locale);
  };
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<Element | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(others.selectedDate);
  const [displayError, setDisplayError] = useState(false);
  const [inputValue, setInputValue] = useState(others.selectedDate ? getFormattedDateString(others.selectedDate) : '');
  const handleInputValueChange = (value: string) => {
    setDisplayError(false);
    setInputValue(value);
  };

  useEffect(() => {
    setSelectedDate(others.selectedDate);
    handleInputValueChange(others.selectedDate ? getFormattedDateString(others.selectedDate) : '');
  }, [others.selectedDate]);

  const handleInputFocus = (event: React.FocusEvent<HTMLElement>) => {
    if (inputProps?.readOnly) {
      return;
    }
    if (openPickerOnFocus) {
      setPopoverAnchorEl(event.currentTarget);
      setIsPopoverActive(true);
      inputProps?.onFocus && inputProps.onFocus(event);
    } else {
      inputProps?.onFocus && inputProps.onFocus(event);
    }
  };

  const handleInputClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!openPickerOnFocus) {
      setPopoverAnchorEl(event.currentTarget);
      setIsPopoverActive(true);
      inputProps?.onFocus && inputProps.onFocus(event as unknown as React.FocusEvent<HTMLElement>);
    }
    inputProps?.onClick && inputProps.onClick(event);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = event.target.value;
    const date = parseMultiFormatsDate(value, ALLOWED_DATE_FORMATS, locale);
    if (date && isAllowedDate(date, dayPickerProps?.disabledDays)) {
      setSelectedDate(date);
    }
    handleInputValueChange(value);
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLElement>) => {
    inputProps?.onBlur && inputProps.onBlur(event);
    if (typeable && !customFormatDate && inputValue) {
      const date = parseMultiFormatsDate(inputValue, ALLOWED_DATE_FORMATS, locale);
      if (date && isAllowedDate(date, dayPickerProps?.disabledDays)) {
        handleInputValueChange(getFormattedDateString(date));
        onChange && onChange(date);
      } else {
        setDisplayError(true);
      }
    }
  };

  const handlePopoverClose = () => {
    onBlur && onBlur();
    setIsPopoverActive(false);
  };

  const handleDatePickerDateChange = (date: Date) => {
    setIsPopoverActive(false);
    setSelectedDate(date);
    handleInputValueChange(getFormattedDateString(date));
    onChange && onChange(date);
  };

  const renderIcon = () => {
    return (
      <Icon color={inverse ? 'teal' : 'neutral'} tint={inverse ? 'light' : 'darkest'} marginRight={2}>
        <IconCalendarSmallOutline />
      </Icon>
    );
  };

  const handleClear = (event: MouseEvent) => {
    // Prevents opening datepicker on clicking of this
    event.preventDefault();
    setIsPopoverActive(false);
    setSelectedDate(undefined);
    handleInputValueChange('');
    onChange && onChange(undefined);
  };

  const renderClearIcon = () => {
    return clearable && selectedDate ? (
      <Icon
        color={inverse ? 'teal' : 'neutral'}
        tint={inverse ? 'light' : 'darkest'}
        marginRight={2}
        onClick={handleClear}
      >
        <IconCloseBadgedSmallFilled />
      </Icon>
    ) : null;
  };

  const boxProps = pickBoxProps(others);
  const internalError = displayError ? errorText || true : false;
  return (
    <Box className={className} {...boxProps}>
      <Input
        inverse={inverse}
        prefix={renderIcon()}
        suffix={renderClearIcon()}
        size={inputSize || size}
        width="120px"
        noInputStyling={!typeable}
        {...inputProps}
        error={inputProps?.error || internalError}
        onClick={handleInputClick}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        className={theme['date-picker-input']}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Popover
        active={isPopoverActive}
        anchorEl={popoverAnchorEl}
        backdrop="transparent"
        maxWidth="min-content"
        onEscKeyDown={handlePopoverClose}
        onOverlayClick={handlePopoverClose}
        position="end"
        offsetCorrection={30}
        returnFocusToSource={false}
        withFocusTrap={!typeable}
        {...popoverProps}
      >
        <Box overflowY="auto">
          <DatePicker
            className={theme[`is-${datePickerSize || size}`]}
            onChange={handleDatePickerDateChange}
            selectedDate={selectedDate as Date}
            size={datePickerSize || size}
            {...dayPickerProps}
          />
        </Box>
        {footer && (
          <Box
            backgroundColor="neutral"
            backgroundTint="light"
            borderColor="neutral"
            borderTint="normal"
            borderTopWidth={1}
            flex="1 0 auto"
            overflowX="hidden"
            paddingHorizontal={3}
            paddingVertical={3}
            tabIndex={0}
          >
            {footer}
          </Box>
        )}
      </Popover>
    </Box>
  );
}

export default DatePickerInput;
