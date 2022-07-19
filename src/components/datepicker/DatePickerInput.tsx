import React, { ReactNode, useState } from 'react';
import Box, { pickBoxProps } from '../box';
import DatePicker from '.';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import { formatDate } from './localeUtils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';
import { BoxProps } from '../box/Box';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import { InputProps } from '../input/Input';
import { PopoverProps } from '../popover/Popover';

interface DatePickerInputProps extends Omit<BoxProps, 'size' | 'onChange'> {
  /** A class name for the wrapper to give custom styles. */
  className?: string;
  /** Object with props for the DatePicker component. */
  dayPickerProps?: DayPickerProps;
  /** A footer component, rendered at the bottom of the date picker */
  footer?: ReactNode;
  /** A custom function to format a date. */
  formatDate?: (selectedDate: Date, locale: string) => string;
  /** Object with props for the Input component. */
  inputProps?: InputProps;
  /** If true, component will be rendered in inverse mode. */
  inverse?: boolean;
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale?: string;
  /** Callback function that is fired when the date has changed. */
  onChange?: (selectedDate: Date) => void;
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
}

interface DayPickerProps {
  numberOfMonths?: number;
  showOutsideDays?: boolean;
  showWeekNumbers?: boolean;
  withMonthPicker?: boolean;
}

const DatePickerInput: GenericComponent<DatePickerInputProps> = ({
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
}) => {
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<Element | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(others.selectedDate);

  const getFormattedDate = () => {
    if (!selectedDate) {
      return '';
    }

    if (!customFormatDate) {
      return formatDate(selectedDate, locale);
    }

    return customFormatDate(selectedDate, locale);
  };

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

  const handlePopoverClose = () => {
    onBlur && onBlur();
    setIsPopoverActive(false);
  };

  const handleDatePickerDateChange = (date: Date) => {
    setIsPopoverActive(false);
    setSelectedDate(date);
    onChange && onChange(date);
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
