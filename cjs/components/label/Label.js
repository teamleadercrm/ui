'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _typography = require('../typography');

var _theme = _interopRequireDefault(require('./theme.css'));

var _classnames = _interopRequireDefault(require('classnames'));

var Label =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Label, _PureComponent);

    function Label() {
      (0, _classCallCheck2.default)(this, Label);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Label).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Label, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            connectedLeft = _this$props.connectedLeft,
            connectedRight = _this$props.connectedRight,
            className = _this$props.className,
            inverse = _this$props.inverse,
            helpText = _this$props.helpText,
            required = _this$props.required,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'connectedLeft',
              'connectedRight',
              'className',
              'inverse',
              'helpText',
              'required',
              'size',
            ]);
          var childProps = {
            inverse: inverse,
            marginTop: 1,
            size: size,
          };
          var classNames = (0, _classnames.default)(
            _theme.default['label'],
            (0, _defineProperty2.default)({}, _theme.default['is-inverse'], inverse),
            className,
          );
          var Element = size === 'large' ? _typography.TextDisplay : _typography.TextBody;
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                element: 'label',
                marginBottom: 3,
                className: classNames,
              },
              others,
            ),
            _react.default.Children.map(children, function(child) {
              if (typeof child !== 'string') {
                return _react.default.cloneElement(child, (0, _objectSpread2.default)({}, childProps, child.props));
              }

              return _react.default.createElement(
                _box.default,
                {
                  display: 'flex',
                  alignItems: 'center',
                },
                connectedLeft &&
                  _react.default.createElement(
                    _box.default,
                    {
                      element: 'span',
                      marginRight: 1,
                    },
                    connectedLeft,
                  ),
                _react.default.createElement(
                  Element,
                  {
                    color: inverse ? 'neutral' : 'teal',
                    tint: inverse ? 'lightest' : 'darkest',
                    element: 'span',
                  },
                  child,
                ),
                !required &&
                  _react.default.createElement(
                    _typography.TextSmall,
                    {
                      color: inverse ? 'teal' : 'neutral',
                      element: 'span',
                      marginLeft: 1,
                      tint: inverse ? 'light' : 'darkest',
                    },
                    helpText,
                  ),
                connectedRight &&
                  _react.default.createElement(
                    _box.default,
                    {
                      element: 'span',
                      marginLeft: 1,
                    },
                    connectedRight,
                  ),
              );
            }),
          );
        },
      },
    ]);
    return Label;
  })(_react.PureComponent);

exports.default = Label;
Label.defaultProps = {
  inverse: false,
  helpText: 'Optional',
  required: false,
  size: 'medium',
};
