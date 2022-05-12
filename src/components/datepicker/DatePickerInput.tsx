import React, { useEffect, useState } from 'react';
import Box, { pickBoxProps } from '../box';
import DatePicker from '.';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import { formatDate } from './localeUtils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { DateTimeFormatOptions } from 'luxon';

interface DatePickerInputProps {
  /** A class name for the wrapper to give custom styles. */
  className: string;
  /** Object with props for the DatePicker component. */
  dayPickerProps: DayPickerProps;
  /** A footer component, rendered at the bottom of the date picker */
  footer: any;
  /** A custom function to format a date. */
  formatDate: (selectedDate: Date, locale: DateTimeFormatOptions | string) => void;
  /** Object with props for the Input component. */
  inputProps: TSFixMe; // TODO: change this to our input props
  /** If true, component will be rendered in inverse mode. */
  inverse: boolean;
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale: DateTimeFormatOptions | string;
  /** Callback function that is fired when the date has changed. */
  onChange: () => void;
  /** Callback function that is fired when the popover with the calendar gets closed (unfocused) */
  onBlur: () => void;
  /** Object with props for the Popover component. */
  popoverProps: object;
  /** The current selected date. */
  selectedDate: Date;
  /** Size of the Input & DatePicker components. */
  size: 'small' | 'medium' | 'large';
  /** Overridable size of the Input component. */
  inputSize: 'small' | 'medium' | 'large';
  /** Overridable size of the DatePicker component. */
  datePickerSize: 'small' | 'medium' | 'large';
  /** Whether the picker should automatically open on input focus. True by default. */
  openPickerOnFocus: boolean;
}

interface DayPickerProps {
  numberOfMonths: number;
  showOutsideDays: boolean;
  showWeekNumbers: boolean;
  withMonthPicker: boolean;
}

const DatePickerInput = ({
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
  onChange,
  onBlur,
  ...others
}: DatePickerInputProps) => {
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<EventTarget | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (others.selectedDate !== undefined && others.selectedDate !== selectedDate) {
      setSelectedDate(others.selectedDate);
      return;
    }

    setSelectedDate(null);
  }, [others.selectedDate]);

  const getFormattedDate = () => {
    if (!selectedDate) {
      return '';
    }

    if (!customFormatDate) {
      return formatDate(selectedDate, locale as DateTimeFormatOptions);
    }

    return customFormatDate(selectedDate, locale);
  };

  const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputProps.readOnly) {
      return;
    }

    if (openPickerOnFocus) {
      setPopoverAnchorEl(event.currentTarget);
      setIsPopoverActive(true);
      inputProps.onFocus && inputProps.onFocus(event);
    } else {
      inputProps.onFocus && inputProps.onFocus(event);
    }
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>) => {
    if (!openPickerOnFocus) {
      setPopoverAnchorEl(event.currentTarget);
      setIsPopoverActive(true);
      inputProps.onFocus && inputProps.onFocus(event as React.FocusEvent<HTMLInputElement>);
    }

    inputProps.onClick && inputProps.onClick(event as React.MouseEvent<HTMLInputElement>);
  };

  const handlePopoverClose = () => {
    onBlur && onBlur();
    setIsPopoverActive(false);
  };

  const handleDatePickerDateChange = (date: Date) => {
    setIsPopoverActive(false);
    setSelectedDate(date);
    onChange();
  };

  const renderIcon = () => {
    return (
      <Icon color={inverse ? 'teal' : 'neutral'} tint={inverse ? 'light' : 'darkest'} marginRight={2}>
        <IconCalendarSmallOutline />
      </Icon>
    );
  };

  const boxProps = pickBoxProps(others);
  const datePickerClassNames = cx(theme['date-picker-input'], theme[`is-${datePickerSize || size}`]);

  return (
    <Box className={className} {...boxProps}>
      <Input
        inverse={inverse}
        prefix={renderIcon()}
        size={inputSize || size}
        value={getFormattedDate()}
        width="120px"
        noInputStyling={dayPickerProps && dayPickerProps.withMonthPicker}
        {...inputProps}
        onClick={handleInputClick}
        onFocus={handleInputFocus}
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
        {...popoverProps}
      >
        <Box overflowY="auto">
          <DatePicker
            className={datePickerClassNames}
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
};

export default DatePickerInput;
