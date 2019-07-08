'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _index = _interopRequireDefault(require('./index'));

var _box = _interopRequireDefault(require('../box'));

var _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var RadioGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(RadioGroup, _PureComponent);

    function RadioGroup() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, RadioGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RadioGroup)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleChange', function(
        value,
        event,
      ) {
        if (_this.props.onChange) {
          _this.props.onChange(value, event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(RadioGroup, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            value = _this$props.value,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'disabled',
              'value',
            ]);
          var rest = (0, _lodash.default)(others, ['onChange']);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'radio-group',
                className: className,
              },
              rest,
            ),
            _react.default.Children.map(children, function(child) {
              return !(0, _isComponentOfType.default)(_index.default, child)
                ? child
                : _react.default.cloneElement(child, {
                    checked: child.props.value === value,
                    disabled: disabled || child.props.disabled,
                    onChange: function onChange(event) {
                      return _this2.handleChange(child.props.value, event);
                    },
                  });
            }),
          );
        },
      },
    ]);
    return RadioGroup;
  })(_react.PureComponent);

RadioGroup.defaultProps = {
  className: '',
  disabled: false,
};
var _default = RadioGroup;
exports.default = _default;
