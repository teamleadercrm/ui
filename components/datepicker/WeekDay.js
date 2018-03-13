import React from 'react';

const WeekDay = ({ weekday, className, localeUtils, locale, size }) => {
  const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);

  return (
    <div className={className} title={weekdayName}>
      {size === 'large' ? weekdayName.slice(0, 2) : weekdayName.slice(0, 1)}
    </div>
  );
};

export default WeekDay;
