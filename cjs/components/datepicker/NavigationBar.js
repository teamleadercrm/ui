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

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = require('../box');

var _button = require('../button');

var _uiIcons = require('@teamleader/ui-icons');

var NavigationBar =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(NavigationBar, _PureComponent);

    function NavigationBar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, NavigationBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NavigationBar)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handlePreviousClick', function() {
        _this.props.onPreviousClick();
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleNextClick', function() {
        _this.props.onNextClick();
      });
      return _this;
    }

    (0, _createClass2.default)(NavigationBar, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            localeUtils = _this$props.localeUtils,
            nextMonth = _this$props.nextMonth,
            previousMonth = _this$props.previousMonth,
            size = _this$props.size;
          var months = localeUtils.getMonths();
          var previousMonthButtonLabel = months[previousMonth.getMonth()];
          var nextMonthButtonLabel = months[nextMonth.getMonth()];
          return _react.default.createElement(
            _box.Box,
            {
              className: className,
              display: 'flex',
              justifyContent: 'space-between',
            },
            _react.default.createElement(_button.IconButton, {
              icon:
                size === 'large'
                  ? _react.default.createElement(_uiIcons.IconArrowLeftMediumOutline, null)
                  : _react.default.createElement(_uiIcons.IconArrowLeftSmallOutline, null),
              onClick: this.handlePreviousClick,
              title: previousMonthButtonLabel,
            }),
            _react.default.createElement(_button.IconButton, {
              icon:
                size === 'large'
                  ? _react.default.createElement(_uiIcons.IconArrowRightMediumOutline, null)
                  : _react.default.createElement(_uiIcons.IconArrowRightSmallOutline, null),
              onClick: this.handleNextClick,
              title: nextMonthButtonLabel,
            }),
          );
        },
      },
    ]);
    return NavigationBar;
  })(_react.PureComponent);

var _default = NavigationBar;
exports.default = _default;
