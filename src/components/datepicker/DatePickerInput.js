import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box, { pickBoxProps } from '../box';
import DatePicker from '../datepicker';
import Icon from '../icon';
import Input from '../input';
import Popover from '../popover';
import cx from 'classnames';
import theme from './theme.css';
import { formatDate } from './localeUtils';
import { IconCalendarSmallOutline } from '@teamleader/ui-icons';

/** @type {React.ComponentType<any>} */
const DatePickerInput = ({
  className,
  dayPickerProps = {},
  footer,
  inverse = false,
  inputProps = {},
  locale = 'en-GB',
  popoverProps = {},
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
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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
      return formatDate(selectedDate, locale);
    }

    return customFormatDate(selectedDate, locale);
  };

  const handleInputFocus = (event) => {
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

  const handleInputClick = (event) => {
    if (!openPickerOnFocus) {
      setPopoverAnchorEl(event.currentTarget);
      setIsPopoverActive(true);
      inputProps.onFocus && inputProps.onFocus();
    }

    inputProps.onClick && inputProps.onClick(event);
  };

  const handlePopoverClose = () => {
    onBlur && onBlur({ relatedTarget: null });
    setIsPopoverActive(false);
  };

  const handleDatePickerDateChange = (date) => {
    setIsPopoverActive(false);
    setSelectedDate(date);
    onChange();
  };

  const renderIcon = () => {
    const inverse = inputProps && inputProps.inverse;

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
            locale={locale}
            month={selectedDate}
            onChange={handleDatePickerDateChange}
            selectedDate={selectedDate}
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
            tabIndex="0"
          >
            {footer}
          </Box>
        )}
      </Popover>
    </Box>
  );
};

DatePickerInput.propTypes = {
  /** A class name for the wrapper to give custom styles. */
  className: PropTypes.string,
  /** Object with props for the DatePicker component. */
  dayPickerProps: PropTypes.object,
  /** A footer component, rendered at the bottom of the date picker */
  footer: PropTypes.any,
  /** A custom function to format a date. */
  formatDate: PropTypes.func,
  /** Object with props for the Input component. */
  inputProps: PropTypes.object,
  /** If true, component will be rendered in inverse mode. */
  inverse: PropTypes.bool,
  /** The language ISO locale code ('en-GB', 'nl-BE', 'fr-FR',...). */
  locale: PropTypes.string,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** Callback function that is fired when the popover with the calendar gets closed (unfocused) */
  onBlur: PropTypes.func,
  /** Object with props for the Popover component. */
  popoverProps: PropTypes.object,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the Input & DatePicker components. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Overridable size of the Input component. */
  inputSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Overridable size of the DatePicker component. */
  datePickerSize: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether the picker should automatically open on input focus. True by default. */
  openPickerOnFocus: PropTypes.bool,
};

DatePickerInput.defaultProps = {
  dayPickerProps: {},
  inputProps: {},
  inverse: false,
  locale: 'en-GB',
  popoverProps: {},
  size: 'medium',
  openPickerOnFocus: true,
};

export default DatePickerInput;
