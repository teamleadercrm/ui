import { DateUtils } from 'react-day-picker/lib/src/index';
import { DateTime } from 'luxon';

export const convertModifiersToClassnames = (modifiers, theme) => {
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

export const isSelectingFirstDay = (from, to, day) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

export function JSDateToLocaleString(date, locale, format = DateTime.DATE_SHORT) {
  return DateTime.fromJSDate(date)
    .setLocale(locale)
    .toLocaleString(format);
}
