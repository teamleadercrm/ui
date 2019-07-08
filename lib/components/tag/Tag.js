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
  _box = _interopRequireDefault(require('../box')),
  _button = _interopRequireWildcard(require('../button')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiIcons = require('@teamleader/ui-icons'),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Tag = (function(e) {
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
              r = t.children,
              l = t.className,
              i = t.inverse,
              a = t.onLabelClick,
              u = t.onRemoveClick,
              s = t.size,
              n = t.color,
              o = t.disabled,
              d = (0, _objectWithoutProperties2.default)(t, [
                'children',
                'className',
                'inverse',
                'onLabelClick',
                'onRemoveClick',
                'size',
                'color',
                'disabled',
              ]),
              _ = (0, _classnames.default)(
                _theme.default.tag,
                _theme.default['is-'.concat(s)],
                _theme.default[n],
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-removable'], u),
                (0, _defineProperty2.default)(e, _theme.default['is-inverse'], i),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], o),
                e),
                l,
              ),
              c = i ? 'white' : 'neutral',
              f = _react.default.createElement(_uiIcons.IconCloseSmallOutline, null);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ className: _, 'data-teamleader-ui': 'tag' }, d),
              a
                ? _react.default.createElement(
                    _button.default,
                    {
                      className: _theme.default['label-button'],
                      onClick: a,
                      level: 'outline',
                      inverse: i,
                      disabled: o,
                    },
                    r,
                  )
                : _react.default.createElement(
                    'span',
                    {
                      className: (0, _classnames.default)(
                        _uiUtilities.default['reset-font-smoothing'],
                        _theme.default.label,
                      ),
                    },
                    r,
                  ),
              u &&
                _react.default.createElement(_button.IconButton, {
                  className: _theme.default['remove-button'],
                  color: c,
                  icon: f,
                  onClick: u,
                  size: 'small',
                  disabled: o,
                }),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
Tag.defaultProps = { inverse: !1, size: 'medium', color: 'neutral' };
var _default = Tag;
exports.default = _default;
