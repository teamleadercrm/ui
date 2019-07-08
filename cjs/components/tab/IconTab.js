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

var _box = _interopRequireDefault(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var IconTab =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(IconTab, _PureComponent);

    function IconTab() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, IconTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IconTab)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'tabNode', (0, _react.createRef)());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleClick', function(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (event.pageX !== 0 && event.pageY !== 0) {
          _this.blur();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'blur', function() {
        if (_this.tabNode.current.boxNode.current) {
          _this.tabNode.current.boxNode.current.blur();
        }
      });
      return _this;
    }

    (0, _createClass2.default)(IconTab, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            active = _this$props.active,
            className = _this$props.className,
            _this$props$counter = _this$props.counter,
            counter = _this$props$counter === void 0 ? null : _this$props$counter,
            icon = _this$props.icon,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['active', 'className', 'counter', 'icon']);
          var classNames = (0, _classnames.default)(
            _theme.default['icon-tab'],
            (0, _defineProperty2.default)({}, _theme.default['is-active'], active),
            className,
          );
          var rest = (0, _lodash.default)(others, ['onClick']);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'icon-tab',
                className: classNames,
                paddingHorizontal: 3,
                paddingVertical: 4,
                ref: this.tabNode,
                onClick: this.handleClick,
              },
              rest,
            ),
            _react.default.cloneElement(icon, {
              element: 'span',
            }),
            counter &&
              _react.default.cloneElement(counter, {
                className: _theme.default['counter'],
              }),
          );
        },
      },
    ]);
    return IconTab;
  })(_react.PureComponent);

IconTab.defaultProps = {
  element: 'a',
  active: false,
};
var _default = IconTab;
exports.default = _default;
