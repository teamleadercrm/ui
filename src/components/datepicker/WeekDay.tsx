import React from 'react';
import { LocaleUtils } from 'react-day-picker';
import { GenericComponent } from '../../@types/types';

export type Size = 'smallest' | 'small' | 'medium' | 'large';

interface WeekDayProps {
  weekday: number;
  className?: string;
  localeUtils?: LocaleUtils;
  locale?: string;
  size?: Size;
}

const WeekDay: GenericComponent<WeekDayProps> = ({ weekday, className, localeUtils, locale, size }) => {
  const weekdayName = localeUtils?.formatWeekdayLong(weekday, locale);

  return (
    <div className={className} title={weekdayName}>
      {weekdayName?.slice(0, size === 'large' ? 2 : 1)}
    </div>
  );
};

export default WeekDay;
