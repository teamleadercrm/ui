'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _button = _interopRequireWildcard(require('../button'));

var _overlay = _interopRequireDefault(require('../overlay'));

var _uiIcons = require('@teamleader/ui-icons');

var _box = _interopRequireDefault(require('../box'));

var QTip =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(QTip, _PureComponent);

    function QTip() {
      (0, _classCallCheck2.default)(this, QTip);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(QTip).apply(this, arguments));
    }

    (0, _createClass2.default)(QTip, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            active = _this$props.active,
            children = _this$props.children,
            highlighted = _this$props.highlighted,
            icon = _this$props.icon,
            onChange = _this$props.onChange,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            onOverlayMouseDown = _this$props.onOverlayMouseDown,
            onOverlayMouseMove = _this$props.onOverlayMouseMove,
            onOverlayMouseUp = _this$props.onOverlayMouseUp,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'active',
              'children',
              'highlighted',
              'icon',
              'onChange',
              'onEscKeyDown',
              'onOverlayClick',
              'onOverlayMouseDown',
              'onOverlayMouseMove',
              'onOverlayMouseUp',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['container'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-active'], active),
            (0, _defineProperty2.default)(_cx, _theme.default['is-highlighted'], highlighted),
            _cx),
          );
          var level = highlighted ? 'primary' : 'secondary';
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
              },
              others,
            ),
            _react.default.createElement(_overlay.default, {
              active: active,
              onClick: onOverlayClick,
              onEscKeyDown: onEscKeyDown,
              onMouseDown: onOverlayMouseDown,
              onMouseMove: onOverlayMouseMove,
              onMouseUp: onOverlayMouseUp,
            }),
            _react.default.createElement(
              'div',
              {
                className: _theme.default['qtip'],
              },
              _react.default.createElement(_button.default, {
                className: _theme.default['icon'],
                level: level,
                onClick: onChange,
                icon: icon,
              }),
              _react.default.createElement(
                'div',
                {
                  className: _theme.default['inner-container'],
                },
                _react.default.createElement(
                  'div',
                  {
                    className: _theme.default['content'],
                  },
                  children,
                ),
                _react.default.createElement(_button.IconButton, {
                  className: _theme.default['close-button'],
                  size: 'small',
                  onClick: onChange,
                  icon: _react.default.createElement(_uiIcons.IconArrowRightSmallOutline, null),
                }),
              ),
            ),
          );
        },
      },
    ]);
    return QTip;
  })(_react.PureComponent);

QTip.defaultProps = {
  active: false,
};
var _default = QTip;
exports.default = _default;
