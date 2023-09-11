import React, { useState, useEffect } from 'react';
import DayPicker, { DayModifiers, DayPickerProps } from 'react-day-picker';
import Box, { pickBoxProps } from '../box';
import NavigationBar from './NavigationBar';
import WeekDay from './WeekDay';
import MonthPicker from './MonthPicker';
import { convertModifiersToClassnames } from './utils';
import cx from 'classnames';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
import { BoxProps } from '../box/Box';
import localeUtils from './localeUtils';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';

export interface DatePickerProps extends Omit<BoxProps & DayPickerProps, 'size' | 'onChange' | 'modifiers' | 'ref'> {
  /** If true we give a border to our wrapper. */
  bordered?: boolean;
  /** A class name for the DatePicker to give custom styles. */
  className?: string;
  /** The modifiers of the DatePicker component. */
  modifiers?: DayModifiers;
  /** Callback function that is fired when the date has changed. */
  onChange?: (day: Date) => void;
  /** The current selected date. */
  selectedDate?: Date;
  /** Size of the DatePicker component. */
  size?: Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'hero'>;
  /** Show a dropdown for the month? */
  withMonthPicker?: boolean;
  /** Show week numbers? */
  showWeekNumbers?: boolean;
  /** The initial month to display if no date is selected. */
  initialMonth?: Date;
}

const DatePicker: GenericComponent<DatePickerProps> = ({
  bordered = true,
  className,
  modifiers,
  size = 'medium',
  withMonthPicker,
  showWeekNumbers,
  initialMonth,
  onChange,
  ...others
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(others.selectedDate);
  const [selectedMonth, setSelectedMonth] = useState<Date>();

  useEffect(() => {
    setSelectedDate(others.selectedDate);
    setSelectedMonth(others.selectedDate);
  }, [others.selectedDate]);

  const handleDayClick = (day: Date, modifiers: DayModifiers) => {
    if (modifiers[theme['disabled']]) {
      return;
    }

    setSelectedDate(day);
    onChange && onChange(day);
  };

  const handleYearMonthChange = (selectedMonth: Date) => {
    setSelectedMonth(selectedMonth);
  };

  const getMonthPickerSize = () => {
    const monthPickerSizeByDatePickerSize: Record<
      string,
      Exclude<(typeof SIZES)[number], 'tiny' | 'fullscreen' | 'hero'>
    > = {
      small: 'smallest',
      medium: showWeekNumbers ? 'medium' : 'small',
      large: 'large',
    };

    return monthPickerSizeByDatePickerSize[size];
  };

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
    <Box {...pickBoxProps(others)} data-teamleader-ui="date-picker">
      <DayPicker
        {...others}
        localeUtils={localeUtils}
        initialMonth={others.selectedDate ?? initialMonth}
        month={selectedMonth}
        className={classNames}
        classNames={theme as any}
        modifiers={modifiers && convertModifiersToClassnames(modifiers, theme)}
        navbarElement={({ ...props }) => <NavigationBar {...props} size={size} withMonthPicker={withMonthPicker} />}
        onDayClick={handleDayClick}
        selectedDays={selectedDate}
        weekdayElement={({ ...props }) => <WeekDay {...props} size={size} />}
        showWeekNumbers={showWeekNumbers}
        fixedWeeks
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

export default DatePicker;
