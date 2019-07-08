import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import { DateUtils } from 'react-day-picker/lib/src/index';
export var convertModifiersToClassnames = function convertModifiersToClassnames(modifiers, theme) {
  if (!modifiers) {
    return {};
  }

  return Object.keys(modifiers).reduce(function(convertedModifiers, key) {
    return _objectSpread({}, convertedModifiers, _defineProperty({}, theme[key], modifiers[key]));
  }, {});
};
export var isSelectingFirstDay = function isSelectingFirstDay(from, to, day) {
  var isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  var isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};
