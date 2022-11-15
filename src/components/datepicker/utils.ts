import { BeforeAfterModifier, DateUtils, DayModifiers } from 'react-day-picker';
import { AllowedDisabledDays } from './DatePickerInput';

export const convertModifiersToClassnames = (modifiers: DayModifiers, theme: Record<string, string>) => {
  if (!modifiers) {
    return {};
  }

  return Object.keys(modifiers).reduce((convertedModifiers, key) => {
    return {
      ...convertedModifiers,
      [theme[key]]: modifiers[key],
    };
  }, {});
};

export const isSelectingFirstDay = (from: Date, to: Date, day: Date) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

const getDateTimeAtStartOfDay = (date: Date) => {
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};
export const isAllowedDate = (date: Date, disabledDays?: AllowedDisabledDays) => {
  if (!disabledDays) {
    return true;
  }
  const dateTime = getDateTimeAtStartOfDay(date);
  if (disabledDays instanceof Date) {
    return dateTime !== getDateTimeAtStartOfDay(disabledDays);
  }
  if (Array.isArray(disabledDays) && disabledDays.length > 0) {
    return !disabledDays.some((disabledDay) => {
      return dateTime === getDateTimeAtStartOfDay(disabledDay);
    });
  }
  if ('from' in disabledDays && disabledDays.from && 'to' in disabledDays && disabledDays.to) {
    return !(
      getDateTimeAtStartOfDay(disabledDays.from) <= dateTime && dateTime <= getDateTimeAtStartOfDay(disabledDays.to)
    );
  }
  if ('before' in disabledDays && disabledDays.before && !('after' in disabledDays)) {
    return getDateTimeAtStartOfDay(disabledDays.before) <= dateTime;
  }
  if ('after' in disabledDays && disabledDays.after && !('before' in disabledDays)) {
    return getDateTimeAtStartOfDay(disabledDays.after) >= dateTime;
  }
  const disabledDaysBeforeAfter = disabledDays as BeforeAfterModifier;
  if (
    'before' in disabledDaysBeforeAfter &&
    'after' in disabledDaysBeforeAfter &&
    disabledDaysBeforeAfter.before &&
    disabledDaysBeforeAfter.after
  ) {
    return (
      getDateTimeAtStartOfDay(disabledDaysBeforeAfter.before) <= dateTime &&
      dateTime <= getDateTimeAtStartOfDay(disabledDaysBeforeAfter.after)
    );
  }
  if ('daysOfWeek' in disabledDays && Array.isArray(disabledDays.daysOfWeek)) {
    return !disabledDays.daysOfWeek.includes(date.getDay());
  }
  if (typeof disabledDays === 'function') {
    return !disabledDays(date);
  }

  return true;
};
