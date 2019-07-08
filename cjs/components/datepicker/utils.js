'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isSelectingFirstDay = exports.convertModifiersToClassnames = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectSpread3 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _index = require('react-day-picker/lib/src/index');

var convertModifiersToClassnames = function convertModifiersToClassnames(modifiers, theme) {
  if (!modifiers) {
    return {};
  }

  return Object.keys(modifiers).reduce(function(convertedModifiers, key) {
    return (0,
    _objectSpread3.default)({}, convertedModifiers, (0, _defineProperty2.default)({}, theme[key], modifiers[key]));
  }, {});
};

exports.convertModifiersToClassnames = convertModifiersToClassnames;

var isSelectingFirstDay = function isSelectingFirstDay(from, to, day) {
  var isBeforeFirstDay = from && _index.DateUtils.isDayBefore(day, from);

  var isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

exports.isSelectingFirstDay = isSelectingFirstDay;
