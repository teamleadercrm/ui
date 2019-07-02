'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _reactDom = require('react-dom'),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _Overlay = _interopRequireDefault(require('../overlay/Overlay')),
  _Transition = _interopRequireDefault(require('react-transition-group/Transition')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  DialogBase = (function(e) {
    function l() {
      var e, t;
      (0, _classCallCheck2.default)(this, l);
      for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(a)),
        )),
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(t),
          'dialogRoot',
          document.createElement('div'),
        ),
        t
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'componentDidMount',
          value: function() {
            document.body.appendChild(this.dialogRoot);
          },
        },
        {
          key: 'componentWillUnmount',
          value: function() {
            document.body.removeChild(this.dialogRoot);
          },
        },
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.active,
              a = e.backdrop,
              i = e.children,
              t = e.className,
              l = e.onEscKeyDown,
              u = e.onOverlayClick,
              o = e.onOverlayMouseDown,
              n = e.onOverlayMouseMove,
              s = e.onOverlayMouseUp,
              d = e.size;
            if (!r) return null;
            var c = (0, _classnames.default)(
                _uiUtilities.default['box-shadow-300'],
                _theme.default['dialog-base'],
                _theme.default['is-'.concat(d)],
                t,
              ),
              p = _react.default.createElement(_Transition.default, { timeout: 0, in: r, appear: !0 }, function(e) {
                var t;
                return _react.default.createElement(
                  'div',
                  {
                    className: (0, _classnames.default)(
                      _theme.default.wrapper,
                      ((t = {}),
                      (0, _defineProperty2.default)(t, _theme.default['is-entering'], 'entering' === e),
                      (0, _defineProperty2.default)(t, _theme.default['is-entered'], 'entered' === e),
                      t),
                    ),
                  },
                  _react.default.createElement(_Overlay.default, {
                    active: r,
                    backdrop: a,
                    className: _theme.default.overlay,
                    onClick: u,
                    onEscKeyDown: l,
                    onMouseDown: o,
                    onMouseMove: n,
                    onMouseUp: s,
                  }),
                  _react.default.createElement(
                    'div',
                    { 'data-teamleader-ui': 'dialog', className: c },
                    _react.default.createElement('div', { className: _theme.default.inner }, i),
                  ),
                );
              });
            return (0, _reactDom.createPortal)(p, this.dialogRoot);
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
DialogBase.defaultProps = { active: !1, backdrop: 'dark', size: 'medium' };
var _default = DialogBase;
exports.default = _default;
