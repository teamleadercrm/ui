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

var _SingleLineInputBase = _interopRequireDefault(require('./SingleLineInputBase'));

var Input =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Input, _PureComponent);

    function Input() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Input);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Input)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        value: '',
      });
      return _this;
    }

    (0, _createClass2.default)(
      Input,
      [
        {
          key: 'render',
          value: function render() {
            var _this2 = this;

            var _this$props = this.props,
              _onChange = _this$props.onChange,
              others = (0, _objectWithoutProperties2.default)(_this$props, ['onChange']);
            return _react.default.createElement(
              _SingleLineInputBase.default,
              (0, _extends2.default)(
                {
                  value: this.state.value,
                  onChange: function onChange(event) {
                    _this2.setState({
                      value: event.currentTarget.value,
                    });

                    _onChange && _onChange(event, event.currentTarget.value);
                  },
                },
                others,
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps.value !== undefined) {
              var newValue = nextProps.value || '';

              if (newValue !== prevState.value) {
                return {
                  value: newValue,
                };
              }
            }

            return null;
          },
        },
      ],
    );
    return Input;
  })(_react.PureComponent);

Input.defaultProps = {
  type: 'text',
};
var _default = Input;
exports.default = _default;
