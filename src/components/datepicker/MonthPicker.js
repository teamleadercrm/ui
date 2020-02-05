import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '../box';
import { Select } from '../select';
import { NumericInput } from '../input';
import theme from './theme.css';

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

const MonthPicker = ({ date, localeUtils, onChange, small }) => {
  const [selectedMonth, setSelectedMonth] = useState({
    value: date.getMonth(),
    label: localeUtils.formatMonthTitle(date),
  });
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());

  const months = localeUtils.getMonths().map((monthName, index) => {
    return { value: index, label: monthName };
  });

  const years = [];
  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
    years.push(i);
  }

  useEffect(() => {
    setSelectedMonth({ value: date.getMonth(), label: localeUtils.formatMonthTitle(date) });
    setSelectedYear(date.getFullYear());
  }, [date]);

  const handleChangeMonth = selectedMonth => {
    onChange(new Date(selectedYear, selectedMonth.value));
  };

  const handleChangeYear = (_, selectedYear) => {
    onChange(new Date(selectedYear, selectedMonth.value));
  };

  return (
    <Box className={theme['caption']}>
      <Box display="flex" justifyContent="center">
        <Select
          value={selectedMonth}
          className={theme['month-picker-field']}
          options={months}
          onChange={handleChangeMonth}
          width={small ? 88 : 112}
          size="small"
        />
        <NumericInput
          value={`${selectedYear}`}
          className={theme['month-picker-field']}
          onChange={handleChangeYear}
          width={small ? 72 : 80}
          size="small"
        />
      </Box>
    </Box>
  );
};

MonthPicker.propTypes = {
  /** Current date */
  date: PropTypes.bool,
  /** Callback function that is fired when the month has changed. */
  onChange: PropTypes.func,
  /** The localeUtils from the DatePicker */
  localeUtils: PropTypes.instanceOf(Date),
};

export default MonthPicker;
