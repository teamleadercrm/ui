import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import { Select } from '../select';
import { NumericInput } from '../input';
import theme from './theme.css';

// We want all the months from current month to current month in next year
const getMonthOptions = (localeUtils, locale) => {
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

// e.g. "February 2020" => "Feb"
// Exception for French language: we use 4 characters
const formatSelectedMonth = ({ label, value }, locale) => {
  const isFrench = locale === 'fr' || locale.startsWith('fr-');

  return {
    value,
    label: label.substring(0, isFrench ? 4 : 3),
  };
};

// e.g. "February 2020" => "Feb 2020"
// Exception for French language: we use 4 characters
const formatSelectMonthAndYear = ({ label, value }, locale) => {
  const isFrench = locale === 'fr' || locale.startsWith('fr-');

  return {
    value,
    label: isFrench ? label.replace(/(\w{4})\w+\s(\d{4})/, '$1 $2') : label.replace(/(\w{3})\w+\s(\d{4})/, '$1 $2'),
  };
};

const MonthPickerUnary = ({ date, locale, localeUtils, onChange }) => {
  const selectedMonth = useMemo(() => ({ value: date.getMonth(), label: localeUtils.formatMonthTitle(date, locale) }), [
    date,
  ]);

  const handleChangeMonth = (selectedMonth) => {
    onChange(selectedMonth.value);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={formatSelectMonthAndYear(selectedMonth, locale)}
          className={theme['month-picker-field']}
          options={getMonthOptions(localeUtils, locale)}
          onChange={handleChangeMonth}
          width="112px"
          size="small"
        />
      </Box>
    </Box>
  );
};

const MonthPickerSplit = ({ date, locale, localeUtils, onChange, size }) => {
  const [yearInput, setYearInput] = useState(`${date.getFullYear()}`);
  const selectedMonth = useMemo(() => ({ value: date.getMonth(), label: localeUtils.formatMonthTitle(date, locale) }), [
    date,
  ]);
  const selectedYear = useMemo(() => date.getFullYear(), [date]);

  const months = localeUtils.getMonths(locale).map((monthName, index) => {
    return { value: index, label: monthName };
  });

  const handleChangeMonth = (selectedMonth) => {
    onChange(new Date(selectedYear, selectedMonth.value));
  };

  useEffect(() => {
    setYearInput(`${date.getFullYear()}`);
  }, [date]);

  const handleChangeYear = (_, selectedYear) => {
    setYearInput(selectedYear);
    if (`${selectedYear}`.match(/\d{4}/)) {
      onChange(new Date(selectedYear, selectedMonth.value));
    }
  };

  const handleYearBlur = () => {
    setYearInput(`${date.getFullYear()}`);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={formatSelectedMonth(selectedMonth, locale)}
          className={theme['month-picker-field']}
          options={months}
          onChange={handleChangeMonth}
          width={size === 'small' ? '88px' : '112px'}
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

const MonthPicker = ({ size, ...props }) => {
  if (size === 'smallest') {
    return <MonthPickerUnary {...props} />;
  }

  return <MonthPickerSplit size={size} {...props} />;
};

MonthPicker.propTypes = {
  /** Current date */
  date: PropTypes.instanceOf(Date),
  /** Callback function that is fired when the month has changed. */
  onChange: PropTypes.func,
  /** The set locale */
  locale: PropTypes.string,
  /** The localeUtils from the DatePicker */
  localeUtils: PropTypes.object,
  /** Size of the MonthPicker component. */
  size: PropTypes.oneOf(['smallest', 'small', 'medium', 'large']),
};

export default MonthPicker;
