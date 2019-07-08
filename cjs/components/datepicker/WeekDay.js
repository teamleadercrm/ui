'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var WeekDay =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(WeekDay, _PureComponent);

    function WeekDay() {
      (0, _classCallCheck2.default)(this, WeekDay);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(WeekDay).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(WeekDay, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            weekday = _this$props.weekday,
            className = _this$props.className,
            localeUtils = _this$props.localeUtils,
            locale = _this$props.locale,
            size = _this$props.size;
          var weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
          return _react.default.createElement(
            'div',
            {
              className: className,
              title: weekdayName,
            },
            weekdayName.slice(0, size === 'large' ? 2 : 1),
          );
        },
      },
    ]);
    return WeekDay;
  })(_react.PureComponent);

var _default = WeekDay;
exports.default = _default;
