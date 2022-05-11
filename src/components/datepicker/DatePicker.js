import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DayPicker from 'react-day-picker';
import Box, { omitBoxProps, pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import MonthPicker from './MonthPicker';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import LocaleUtils from './localeUtils';

/** @type {React.ComponentType<any>} */
const DatePicker = ({
  bordered,
  className,
  style,
  modifiers,
  size,
  withMonthPicker,
  showWeekNumbers,
  onChange,
  ...others
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    if (selectedDate !== undefined && others.selectedDate !== selectedDate) {
      setSelectedDate(others.selectedDate);
      return;
    }

    setSelectedDate(null);
  }, [others.selectedDate]);

  const handleDayClick = (day, modifiers = {}) => {
    if (modifiers[theme['disabled']]) {
      return;
    }

    setSelectedDate(day);
    onChange(day);
  };

  const handleYearMonthChange = (selectedMonth) => {
    setSelectedMonth(selectedMonth);
  };

  const getMonthPickerSize = () => {
    const monthPickerSizeByDatePickerSize = {
      small: 'smallest',
      medium: showWeekNumbers ? 'medium' : 'small',
      large: 'large',
    };
    return monthPickerSizeByDatePickerSize[size];
  };

  const boxProps = pickBoxProps(others);
  const restProps = omitBoxProps(others);
  const classNames = cx(
    uiUtilities['reset-font-smoothing'],
    theme['date-picker'],
    theme[`is-${size}`],
    {
      [theme['is-bordered']]: bordered,
    },
    className,
  );

  return (
    <Box {...boxProps}>
      <DayPicker
        {...restProps}
        localeUtils={LocaleUtils}
        initialMonth={others.selectedDate}
        month={selectedMonth}
        className={classNames}
        style={style}
        classNames={theme}
        modifiers={convertModifiersToClassnames(modifiers, theme)}
        navbarElement={<NavigationBar size={size} withMonthPicker={withMonthPicker} />}
        onDayClick={handleDayClick}
        selectedDays={selectedDate}
        weekdayElement={<WeekDay size={size} />}
        showWeekNumbers={showWeekNumbers}
        captionElement={
          withMonthPicker
            ? ({ date, locale, localeUtils }) => (
                <MonthPicker
                  date={date}
                  locale={locale}
                  localeUtils={localeUtils}
                  onChange={handleYearMonthChange}
                  size={getMonthPickerSize()}
                />
              )
            : undefined
        }
      />
    </Box>
  );
};

DatePicker.propTypes = {
  /** If true we give a border to our wrapper. */
  bordered: PropTypes.bool,
  /** A class name for the DatePicker to give custom styles. */
  className: PropTypes.string,
  /** The modifiers of the DatePicker component. */
  modifiers: PropTypes.object,
  /** Callback function that is fired when the date has changed. */
  onChange: PropTypes.func,
  /** The current selected date. */
  selectedDate: PropTypes.instanceOf(Date),
  /** Size of the DatePicker component. */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

DatePicker.defaultProps = {
  bordered: true,
  size: 'medium',
};

export default DatePicker;
