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

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var CompactMessage =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(CompactMessage, _PureComponent);

    function CompactMessage() {
      (0, _classCallCheck2.default)(this, CompactMessage);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(CompactMessage).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(CompactMessage, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            image = _this$props.image,
            button = _this$props.button,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['className', 'children', 'image', 'button']);
          var classNames = (0, _classnames.default)(_theme.default['compact-message'], className);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'compact-message',
                className: classNames,
              },
              others,
            ),
            image &&
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['image'],
                },
                image,
              ),
            _react.default.createElement(
              _box.default,
              {
                display: 'flex',
                flexDirection: 'column',
              },
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['content'],
                },
                children,
              ),
              button &&
                _react.default.createElement(
                  'div',
                  {
                    className: _theme.default['button'],
                  },
                  button,
                ),
            ),
          );
        },
      },
    ]);
    return CompactMessage;
  })(_react.PureComponent);

var _default = CompactMessage;
exports.default = _default;
