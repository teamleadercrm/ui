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

var _classnames = _interopRequireDefault(require('classnames'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = require('../box');

var _theme = _interopRequireDefault(require('./theme.css'));

var ScrollContainer =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(ScrollContainer, _PureComponent);

    function ScrollContainer() {
      (0, _classCallCheck2.default)(this, ScrollContainer);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(ScrollContainer).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(ScrollContainer, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            header = _this$props.header,
            body = _this$props.body,
            footer = _this$props.footer,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['className', 'header', 'body', 'footer']);
          var classNames = (0, _classnames.default)(_theme.default['scroll-container'], className);
          return _react.default.createElement(
            _box.Box,
            (0, _extends2.default)(
              {
                className: classNames,
                display: 'flex',
                flexDirection: 'column',
              },
              others,
            ),
            header &&
              _react.default.createElement(
                'header',
                {
                  className: _theme.default['scroll-container-header'],
                },
                header,
              ),
            body &&
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['scroll-container-body'],
                },
                _react.default.createElement(
                  _box.Box,
                  {
                    flex: '1',
                  },
                  body,
                ),
              ),
            footer &&
              _react.default.createElement(
                'footer',
                {
                  className: _theme.default['scroll-container-footer'],
                },
                footer,
              ),
          );
        },
      },
    ]);
    return ScrollContainer;
  })(_react.PureComponent);

var _default = ScrollContainer;
exports.default = _default;
