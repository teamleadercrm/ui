import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import { Select } from '../select';
import { NumericInput } from '../input';
import theme from './theme.css';

// We want all the months from current month to current month in next year
const getMonthOptions = (localeUtils) => {
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
      label: localeUtils.formatMonthTitle(monthOption),
    });
  }
  return monthOptions;
};

// e.g. "February 2020" => "Feb"
const formatSelectedMonth = ({ label, value }) => ({ value, label: label.substring(0, 3) });

// e.g. "February 2020" => "Feb 2020"
const formatSelectMonthAndYear = ({ label, value }) => ({
  value,
  label: label.replace(/(\w{3})\w+\s(\d{4})/, '$1 $2'),
});

const MonthPickerUnary = ({ date, localeUtils, onChange }) => {
  const selectedMonth = useMemo(() => ({ value: date.getMonth(), label: localeUtils.formatMonthTitle(date) }), [date]);

  const handleChangeMonth = (selectedMonth) => {
    onChange(selectedMonth.value);
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={formatSelectMonthAndYear(selectedMonth)}
          className={theme['month-picker-field']}
          options={getMonthOptions(localeUtils)}
          onChange={handleChangeMonth}
          width={112}
          size="small"
          isSearchable={false}
        />
      </Box>
    </Box>
  );
};

const MonthPickerSplit = ({ date, localeUtils, onChange, size }) => {
  const [yearInput, setYearInput] = useState(`${date.getFullYear()}`);
  const selectedMonth = useMemo(() => ({ value: date.getMonth(), label: localeUtils.formatMonthTitle(date) }), [date]);
  const selectedYear = useMemo(() => date.getFullYear(), [date]);

  const months = localeUtils.getMonths().map((monthName, index) => {
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
          value={formatSelectedMonth(selectedMonth)}
          className={theme['month-picker-field']}
          options={months}
          onChange={handleChangeMonth}
          width={size === 'small' ? 88 : 112}
          size="small"
          isSearchable={false}
        />
        <NumericInput
          value={`${yearInput}`}
          className={theme['month-picker-field']}
          onChange={handleChangeYear}
          onBlur={handleYearBlur}
          width={size === 'small' ? 72 : 80}
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

  return <MonthPickerSplit {...props} />;
};

MonthPicker.propTypes = {
  /** Current date */
  date: PropTypes.bool,
  /** Callback function that is fired when the month has changed. */
  onChange: PropTypes.func,
  /** The localeUtils from the DatePicker */
  localeUtils: PropTypes.instanceOf(Date),
  /** Size of the MonthPicker component. */
  size: PropTypes.oneOf(['smallest', 'small', 'medium', 'large']),
};

export default MonthPicker;
