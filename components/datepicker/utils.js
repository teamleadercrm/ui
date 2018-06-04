import { DateUtils } from 'react-day-picker/lib/src/index';

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
