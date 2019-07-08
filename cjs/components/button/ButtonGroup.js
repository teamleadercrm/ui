'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

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

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _box = _interopRequireWildcard(require('../box'));

var _Button = _interopRequireDefault(require('./Button'));

var _classnames = _interopRequireDefault(require('classnames'));

var _isComponentOfType = _interopRequireDefault(require('../utils/is-component-of-type'));

var _theme = _interopRequireDefault(require('./theme.css'));

var ButtonGroup =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ButtonGroup, _PureComponent);

    function ButtonGroup() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, ButtonGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ButtonGroup)).call.apply(
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

    (0, _createClass2.default)(ButtonGroup, [
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            segmented = _this$props.segmented,
            value = _this$props.value,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'segmented',
              'value',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['group'],
            (0, _defineProperty2.default)({}, _theme.default['segmented'], segmented),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'button-group',
                className: classNames,
              },
              others,
            ),
            _react.default.Children.map(children, function(child) {
              if (!(0, _isComponentOfType.default)(_Button.default, child)) {
                return child;
              }

              var optionalChildProps = {};

              if (value) {
                optionalChildProps = {
                  active: child.props.value === value,
                  onClick: function onClick(event) {
                    return _this2.handleChange(child.props.value, event);
                  },
                };
              }

              var childProps = (0, _lodash.default)(child.props, ['value']);
              var groupProps = (0, _lodash.default)(others, ['onChange']);
              return _react.default.createElement(
                child.type,
                (0, _objectSpread2.default)({}, childProps, optionalChildProps, (0, _box.omitBoxProps)(groupProps)),
              );
            }),
          );
        },
      },
    ]);
    return ButtonGroup;
  })(_react.PureComponent);

ButtonGroup.defaultProps = {
  segmented: false,
};
var _default = ButtonGroup;
exports.default = _default;
