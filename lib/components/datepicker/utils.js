'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.isSelectingFirstDay = exports.convertModifiersToClassnames = void 0);
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _objectSpread3 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread')),
  _index = require('react-day-picker/lib/src/index'),
  convertModifiersToClassnames = function(i, t) {
    return i
      ? Object.keys(i).reduce(function(e, r) {
          return (0, _objectSpread3.default)({}, e, (0, _defineProperty2.default)({}, t[r], i[r]));
        }, {})
      : {};
  };
exports.convertModifiersToClassnames = convertModifiersToClassnames;
var isSelectingFirstDay = function(e, r, i) {
  var t = e && _index.DateUtils.isDayBefore(i, e);
  return !e || t || (e && r);
};
exports.isSelectingFirstDay = isSelectingFirstDay;
