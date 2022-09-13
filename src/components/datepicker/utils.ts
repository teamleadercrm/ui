import { DateUtils, DayModifiers } from 'react-day-picker';

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
