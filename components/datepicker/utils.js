import { DateUtils } from "react-day-picker/lib/src/index";

export const convertModifiersToClassnames = (modifiers, theme) => {
  if (!modifiers) {
    return;
  }

  const convertedModifiers = {};

  Object.keys(modifiers).forEach(key => {
    convertedModifiers[theme[key]] = modifiers[key];
  });

  return convertedModifiers;
};

export const hasRange = selectedDays => {
  let containsFrom = false;
  let containsTo = false;

  if (!selectedDays || typeof selectedDays !== 'object') {
    return false;
  }

  Object.keys(selectedDays).map(key => {
    if (!selectedDays[key] || typeof selectedDays[key] !== 'object') {
      return;
    }

    Object.keys(selectedDays[key]).map(key => {
      if (key === 'from') {
        containsFrom = true;
      }
      if (key === 'to') {
        containsTo = true;
      }
    });
  });

  return containsFrom && containsTo;
};

export const isSelectingFirstDay = (from, to, day) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};
