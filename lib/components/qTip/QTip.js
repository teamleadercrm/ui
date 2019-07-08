'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _button = _interopRequireWildcard(require('../button')),
  _overlay = _interopRequireDefault(require('../overlay')),
  _uiIcons = require('@teamleader/ui-icons'),
  _box = _interopRequireDefault(require('../box')),
  QTip = (function(e) {
    function t() {
      return (
        (0, _classCallCheck2.default)(this, t),
        (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(t).apply(this, arguments))
      );
    }
    return (
      (0, _inherits2.default)(t, e),
      (0, _createClass2.default)(t, [
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.active,
              a = t.children,
              i = t.highlighted,
              l = t.icon,
              u = t.onChange,
              o = t.onEscKeyDown,
              n = t.onOverlayClick,
              s = t.onOverlayMouseDown,
              c = t.onOverlayMouseMove,
              _ = t.onOverlayMouseUp,
              p = (0, _objectWithoutProperties2.default)(t, [
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
              ]),
              d = (0, _classnames.default)(
                _theme.default.container,
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-active'], r),
                (0, _defineProperty2.default)(e, _theme.default['is-highlighted'], i),
                e),
              ),
              f = i ? 'primary' : 'secondary';
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: d }, p),
              _react.default.createElement(_overlay.default, {
                active: r,
                onClick: n,
                onEscKeyDown: o,
                onMouseDown: s,
                onMouseMove: c,
                onMouseUp: _,
              }),
              _react.default.createElement(
                'div',
                { className: _theme.default.qtip },
                _react.default.createElement(_button.default, {
                  className: _theme.default.icon,
                  level: f,
                  onClick: u,
                  icon: l,
                }),
                _react.default.createElement(
                  'div',
                  { className: _theme.default['inner-container'] },
                  _react.default.createElement('div', { className: _theme.default.content }, a),
                  _react.default.createElement(_button.IconButton, {
                    className: _theme.default['close-button'],
                    size: 'small',
                    onClick: u,
                    icon: _react.default.createElement(_uiIcons.IconArrowRightSmallOutline, null),
                  }),
                ),
              ),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
QTip.defaultProps = { active: !1 };
var _default = QTip;
exports.default = _default;
