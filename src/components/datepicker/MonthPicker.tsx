import React, { useMemo, useState, useEffect } from 'react';

import Box from '../box';
import { Select } from '../select';
import { NumericInput } from '../input';
import theme from './theme.css';
import { LocaleUtils } from 'react-day-picker';

interface MonthPickerProps {
  /** Current date */
  date?: Date;
  /** Callback function that is fired when the month has changed. */
  onChange?: (selectedOption: Date) => void;
  /** The set locale */
  locale?: string;
  /** The localeUtils from the DatePicker */
  localeUtils?: LocaleUtils;
  /** Size of the MonthPicker component. */
  size?: 'smallest' | 'small' | 'medium' | 'large';
}

interface Option {
  value: string | number | Date;
  label: string;
}

// We want all the months from current month to current month in next year
const getMonthOptions = (localeUtils: LocaleUtils, locale: string) => {
  let currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const monthOptions = [];
  for (let i = currentMonth; i <= 13; i++) {
    const currentMonthInYear = i % 12;

    if (currentMonthInYear === 0) {
      currentYear++;
    }

    const monthOption = new Date(currentYear, currentMonthInYear);
    monthOptions.push({
      value: monthOption,
      label: localeUtils.formatMonthTitle(monthOption, locale),
    });
  }
  return monthOptions;
};

// e.g. "February 2020" => "February"
const formatSelectedMonth = ({ label, value }: Option) => ({
  value,
  label: label.split(' ')[0],
});

// e.g. "February 2020" => "Feb 2020"
// Exception for French language: we use 4 characters
const formatSelectMonthAndYear = ({ label, value }: Option, locale: string) => {
  const isFrench = locale === 'fr' || locale.startsWith('fr-');

  return {
    value,
    label: isFrench ? label.replace(/(\w{4})\w+\s(\d{4})/, '$1 $2') : label.replace(/(\w{3})\w+\s(\d{4})/, '$1 $2'),
  };
};

const MonthPickerUnary = ({ date, locale, localeUtils, onChange }: Omit<MonthPickerProps, 'size'>) => {
  const selectedMonth = useMemo(
    () =>
      date && localeUtils && { value: date.getMonth().toString(), label: localeUtils.formatMonthTitle(date, locale) },
    [date],
  );

  const handleChangeMonth = (selectedMonth: Option) => {
    onChange && onChange(selectedMonth.value as Date);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={selectedMonth && locale && formatSelectMonthAndYear(selectedMonth, locale)}
          className={theme['month-picker-field']}
          options={localeUtils && locale && getMonthOptions(localeUtils, locale)}
          onChange={handleChangeMonth}
          width="112px"
          size="small"
        />
      </Box>
    </Box>
  );
};

const MonthPickerSplit = ({ date, locale, localeUtils, onChange, size }: MonthPickerProps) => {
  const [yearInput, setYearInput] = useState(date && `${date.getFullYear()}`);
  const selectedMonth = useMemo(
    () => date && localeUtils && { value: date.getMonth(), label: localeUtils.formatMonthTitle(date, locale) },
    [date],
  );
  const selectedYear = useMemo(() => date && date.getFullYear(), [date]);

  const months =
    localeUtils &&
    localeUtils.getMonths(locale).map((monthName, index) => {
      return { value: index, label: monthName };
    });

  const handleChangeMonth = (selectedMonth: Option) => {
    onChange && selectedYear && onChange(new Date(selectedYear, selectedMonth.value as number));
  };

  useEffect(() => {
    setYearInput(date && `${date.getFullYear()}`);
  }, [date]);

  const handleChangeYear = (selectedMonth: Option, selectedYear: string | number) => {
    setYearInput(selectedYear as string);
    if (`${selectedYear}`.match(/\d{4}/)) {
      onChange && onChange(new Date(selectedYear as number, selectedMonth.value as number));
    }
  };

  const handleYearBlur = () => {
    setYearInput(date && `${date.getFullYear()}`);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={selectedMonth && formatSelectedMonth(selectedMonth)}
          className={theme['month-picker-field']}
          options={months}
          onChange={handleChangeMonth}
          width={size === 'small' ? '88px' : '112px'}
          truncateOptionText
          size="small"
        />
        <NumericInput
          value={`${yearInput}`}
          className={theme['month-picker-field']}
          onChange={handleChangeYear}
          onBlur={handleYearBlur}
          width={size === 'small' ? '72px' : '80px'}
          size="small"
        />
      </Box>
    </Box>
  );
};

const MonthPicker = ({ size, ...props }: MonthPickerProps) => {
  if (size === 'smallest') {
    return <MonthPickerUnary {...props} />;
  }

  return <MonthPickerSplit size={size} {...props} />;
};

export default MonthPicker;
