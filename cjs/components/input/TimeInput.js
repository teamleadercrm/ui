'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactInputMask = _interopRequireDefault(require('react-input-mask'));

var _icon = _interopRequireDefault(require('../icon'));

var _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase'));

var _uiIcons = require('@teamleader/ui-icons');

var isValidTime = function isValidTime(input) {
  return RegExp('([0-1][0-9]|[2][0-3]):([0-5][0-9])').test(input);
};

var TimeInput =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(TimeInput, _PureComponent);

    function TimeInput() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TimeInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TimeInput)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'beforeMaskedValueChange', function(
        _ref,
        _ref2,
      ) {
        var newValue = _ref.value,
          selection = _ref.selection;
        var oldValue = _ref2.value;

        if (!isValidTime(newValue)) {
          return {
            value: oldValue,
            selection: selection,
          };
        }

        return {
          value: newValue,
          selection: selection,
        };
      });
      return _this;
    }

    (0, _createClass2.default)(TimeInput, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            disabled = _this$props.disabled,
            readOnly = _this$props.readOnly;
          return _react.default.createElement(
            _reactInputMask.default,
            (0, _extends2.default)({}, this.props, {
              mask: '99:99',
              maskChar: '0',
              beforeMaskedValueChange: this.beforeMaskedValueChange,
            }),
            function(inputProps) {
              return _react.default.createElement(
                _SingleLineInputBase.default,
                (0, _extends2.default)({}, inputProps, {
                  autoComplete: 'off',
                  readOnly: readOnly,
                  disabled: disabled,
                  prefix: _react.default.createElement(
                    _icon.default,
                    {
                      color: 'neutral',
                      tint: 'darkest',
                    },
                    _react.default.createElement(_uiIcons.IconTimerSmallOutline, null),
                  ),
                }),
              );
            },
          );
        },
      },
    ]);
    return TimeInput;
  })(_react.PureComponent);

var _default = TimeInput;
exports.default = _default;
