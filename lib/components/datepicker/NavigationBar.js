'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _box = require('../box'),
  _button = require('../button'),
  _uiIcons = require('@teamleader/ui-icons'),
  NavigationBar = (function(e) {
    function a() {
      var e, t;
      (0, _classCallCheck2.default)(this, a);
      for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handlePreviousClick', function() {
          t.props.onPreviousClick();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleNextClick', function() {
          t.props.onNextClick();
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.className,
              r = e.localeUtils,
              i = e.nextMonth,
              l = e.previousMonth,
              a = e.size,
              n = r.getMonths(),
              u = n[l.getMonth()],
              o = n[i.getMonth()];
            return _react.default.createElement(
              _box.Box,
              { className: t, display: 'flex', justifyContent: 'space-between' },
              _react.default.createElement(_button.IconButton, {
                icon:
                  'large' === a
                    ? _react.default.createElement(_uiIcons.IconArrowLeftMediumOutline, null)
                    : _react.default.createElement(_uiIcons.IconArrowLeftSmallOutline, null),
                onClick: this.handlePreviousClick,
                title: u,
              }),
              _react.default.createElement(_button.IconButton, {
                icon:
                  'large' === a
                    ? _react.default.createElement(_uiIcons.IconArrowRightMediumOutline, null)
                    : _react.default.createElement(_uiIcons.IconArrowRightSmallOutline, null),
                onClick: this.handleNextClick,
                title: o,
              }),
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent),
  _default = NavigationBar;
exports.default = _default;
