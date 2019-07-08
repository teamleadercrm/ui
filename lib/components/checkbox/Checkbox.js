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
  _uiIcons = require('@teamleader/ui-icons'),
  Checkbox = (function(e) {
    function i() {
      var e, l;
      (0, _classCallCheck2.default)(this, i);
      for (var t = arguments.length, r = new Array(t), a = 0; a < t; a++) r[a] = arguments[a];
      return (
        (l = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(r)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(l), 'inputNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(l), 'handleToggle', function(e) {
          var t = l.props,
            r = t.disabled,
            a = t.checked,
            i = t.onChange;
          0 !== e.pageX && 0 !== e.pageY && l.blur(), !r && i && i(!a, e);
        }),
        l
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(i, [
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
              i = t.className,
              l = t.size,
              u = t.label,
              n = t.children,
              s = t.indeterminate,
              o = (0, _objectWithoutProperties2.default)(t, [
                'checked',
                'disabled',
                'className',
                'size',
                'label',
                'children',
                'indeterminate',
              ]),
              c =
                'small' === l ? _typography.TextSmall : 'medium' === l ? _typography.TextBody : _typography.TextDisplay,
              d = 'large' === l ? _uiIcons.IconCheckmarkMediumOutline : _uiIcons.IconCheckmarkSmallOutline,
              p = (0, _lodash.default)(o, ['onChange']),
              _ = (0, _box.pickBoxProps)(p),
              h = (0, _box.omitBoxProps)(p),
              f = (0, _classnames.default)(
                _theme.default.checkbox,
                _theme.default['is-'.concat(l)],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-checked'], r || s),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], a),
                e),
                i,
              );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ element: 'label', 'data-teamleader-ui': 'checkbox', className: f }, _),
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
                  h,
                ),
              ),
              _react.default.createElement(
                'span',
                { className: _theme.default.shape },
                r
                  ? _react.default.createElement(d, { className: _theme.default.icon })
                  : _react.default.createElement(_uiIcons.IconMinusSmallOutline, { className: _theme.default.icon }),
              ),
              (u || n) &&
                _react.default.createElement(
                  'span',
                  { className: _theme.default.label },
                  u && _react.default.createElement(c, { element: 'span', color: a ? 'neutral' : 'teal' }, u),
                  n,
                ),
            );
          },
        },
      ]),
      i
    );
  })(_react.PureComponent);
Checkbox.defaultProps = { checked: !1, disabled: !1, indeterminate: !1, size: 'medium' };
var _default = Checkbox;
exports.default = _default;
