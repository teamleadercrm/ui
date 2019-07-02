'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _classnames = _interopRequireDefault(require('classnames')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _box = _interopRequireWildcard(require('../box')),
  _typography = require('../typography'),
  Toggle = (function(e) {
    function l() {
      var e, i;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (i = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'inputNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(i), 'handleToggle', function(e) {
          var t = i.props,
            r = t.disabled,
            a = t.checked,
            l = t.onChange;
          0 !== e.pageX && 0 !== e.pageY && i.blur(), !r && l && l(!a, e);
        }),
        i
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'blur',
          value: function() {
            this.inputNode.current && this.inputNode.current.blur();
          },
        },
        {
          key: 'focus',
          value: function() {
            this.inputNode.current && this.inputNode.current.focus();
          },
        },
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.checked,
              a = t.disabled,
              l = t.className,
              i = t.size,
              u = t.label,
              s = t.children,
              n = (0, _objectWithoutProperties2.default)(t, [
                'checked',
                'disabled',
                'className',
                'size',
                'label',
                'children',
              ]),
              o = (0, _lodash.default)(n, ['onChange']),
              d = (0, _box.pickBoxProps)(o),
              p = (0, _box.omitBoxProps)(o),
              c = (0, _classnames.default)(
                _theme.default.toggle,
                _theme.default['is-'.concat(i)],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-checked'], r),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], a),
                e),
                l,
              ),
              _ =
                'small' === i ? _typography.TextSmall : 'medium' === i ? _typography.TextBody : _typography.TextDisplay;
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ element: 'label', 'data-teamleader-ui': 'toggle', className: c }, d),
              _react.default.createElement(
                'input',
                (0, _extends2.default)(
                  {
                    className: _theme.default.input,
                    type: 'checkbox',
                    checked: r,
                    disabled: a,
                    onClick: this.handleToggle,
                    ref: this.inputNode,
                    readOnly: !0,
                  },
                  p,
                ),
              ),
              _react.default.createElement(
                'span',
                { className: _theme.default.track },
                _react.default.createElement('span', { className: _theme.default.thumb }),
              ),
              (u || s) &&
                _react.default.createElement(
                  'span',
                  { className: _theme.default.label },
                  u && _react.default.createElement(_, { element: 'span', color: a ? 'neutral' : 'teal' }, u),
                  s,
                ),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
Toggle.defaultProps = { checked: !1, disabled: !1, size: 'medium' };
var _default = Toggle;
exports.default = _default;
