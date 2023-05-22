import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { LocaleUtils } from 'react-day-picker';
import { GenericComponent } from '../../@types/types';
import { SIZES } from '../../constants';
import Box from '../box';
import { NumericInput } from '../input';
import { Select } from '../select';
import theme from './theme.css';

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
  size?: Exclude<typeof SIZES[number], 'tiny' | 'fullscreen' | 'hero'>;
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

const MonthPickerUnary: GenericComponent<MonthPickerProps> = ({ date, locale, localeUtils, onChange }) => {
  const selectedMonth = useMemo(
    () =>
      date && localeUtils && { value: date.getMonth().toString(), label: localeUtils.formatMonthTitle(date, locale) },
    [date, locale, localeUtils],
  );

  const handleChangeMonth = (selectedMonth: Option) => {
    onChange && selectedMonth && onChange(selectedMonth.value as Date);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={selectedMonth && locale ? formatSelectMonthAndYear(selectedMonth, locale) : null}
          className={theme['month-picker-field']}
          options={localeUtils && locale ? getMonthOptions(localeUtils, locale) : []}
          onChange={handleChangeMonth}
          width="112px"
          size="small"
        />
      </Box>
    </Box>
  );
};

const MonthPickerSplit: GenericComponent<MonthPickerProps> = ({ date, locale, localeUtils, onChange, size }) => {
  const [yearInput, setYearInput] = useState(date && `${date.getFullYear()}`);
  const selectedMonth = useMemo(
    () => date && localeUtils && { value: date.getMonth(), label: localeUtils.formatMonthTitle(date, locale) },
    [date, locale, localeUtils],
  );
  const selectedYear = useMemo(() => date && date.getFullYear(), [date]);

  const months = localeUtils
    ? localeUtils.getMonths(locale).map((monthName, index) => {
        return { value: index, label: monthName };
      })
    : [];
  const handleChangeMonth = (selectedMonth: Option) => {
    onChange && selectedYear && selectedMonth && onChange(new Date(selectedYear, selectedMonth.value as number));
  };

  useEffect(() => {
    setYearInput(date && `${date.getFullYear()}`);
  }, [date]);

  const handleChangeYear = (_: ChangeEvent<HTMLElement>, selectedYear: string | number) => {
    setYearInput(selectedYear as string);
    if (`${selectedYear}`.match(/\d{4}/)) {
      onChange && selectedMonth && onChange(new Date(selectedYear as number, selectedMonth.value as number));
    }
  };

  const handleYearBlur = () => {
    setYearInput(date && `${date.getFullYear()}`);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={selectedMonth ? formatSelectedMonth(selectedMonth) : null}
          className={theme['month-picker-field']}
          options={months}
          onChange={handleChangeMonth}
          width={size === 'small' ? '88px' : '112px'}
          truncateOptionText
          size="small"
          menuWidth="168px"
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

const MonthPicker: GenericComponent<MonthPickerProps> = ({ size, ...props }) => {
  if (size === 'smallest') {
    return <MonthPickerUnary {...props} />;
  }

  return <MonthPickerSplit size={size} {...props} />;
};

export default MonthPicker;
