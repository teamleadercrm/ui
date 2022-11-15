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

export const isAllowedDate = (date: Date, disabledDays?: AllowedDisabledDays) => {
  if (disabledDays) {
    date.setHours(0, 0, 0, 0);
    const dateTime = date.getTime();
    if (disabledDays instanceof Date) {
      disabledDays.setHours(0, 0, 0, 0);
      return dateTime !== disabledDays.getTime();
    }
    if (Array.isArray(disabledDays) && disabledDays.length > 0) {
      return !disabledDays.some((disabledDay) => {
        disabledDay.setHours(0, 0, 0, 0);
        return dateTime === disabledDay.getTime();
      });
    }
    if ('from' in disabledDays && disabledDays.from && 'to' in disabledDays && disabledDays.to) {
      disabledDays.from.setHours(0, 0, 0, 0);
      disabledDays.to.setHours(0, 0, 0, 0);
      return !(disabledDays.from.getTime() <= dateTime && dateTime <= disabledDays.to.getTime());
    }
    if ('before' in disabledDays && disabledDays.before && !('after' in disabledDays)) {
      disabledDays.before.setHours(0, 0, 0, 0);
      return disabledDays.before.getTime() <= dateTime;
    }
    if ('after' in disabledDays && disabledDays.after && !('before' in disabledDays)) {
      disabledDays.after.setHours(0, 0, 0, 0);
      return disabledDays.after.getTime() >= dateTime;
    }
    const disabledDaysBeforeAfter = disabledDays as BeforeAfterModifier;
    if (
      'before' in disabledDaysBeforeAfter &&
      'after' in disabledDaysBeforeAfter &&
      disabledDaysBeforeAfter.before &&
      disabledDaysBeforeAfter.after
    ) {
      disabledDaysBeforeAfter.before.setHours(0, 0, 0, 0);
      disabledDaysBeforeAfter.after.setHours(0, 0, 0, 0);
      return (
        disabledDaysBeforeAfter.before.getTime() <= dateTime && dateTime <= disabledDaysBeforeAfter.after.getTime()
      );
    }
    if ('daysOfWeek' in disabledDays && Array.isArray(disabledDays.daysOfWeek)) {
      return !disabledDays.daysOfWeek.includes(date.getDay());
    }
    if (typeof disabledDays === 'function') {
      return !disabledDays(date);
    }
  }
  return true;
};
