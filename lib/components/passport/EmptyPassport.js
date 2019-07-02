'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
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
  _avatar = _interopRequireDefault(require('../avatar')),
  _box = _interopRequireDefault(require('../box')),
  _link = _interopRequireDefault(require('../link')),
  _popover = _interopRequireDefault(require('../popover')),
  _typography = require('../typography'),
  EmptyPassport = (function(e) {
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
            var e = this.props,
              t = e.avatar,
              r = e.link,
              a = e.className,
              i = e.description,
              l = e.title,
              u = (0, _objectWithoutProperties2.default)(e, ['avatar', 'link', 'className', 'description', 'title']);
            return _react.default.createElement(
              _popover.default,
              (0, _extends2.default)({}, u, {
                backdrop: 'transparent',
                className: (0, _classnames.default)(_theme.default['passport-empty'], a),
              }),
              _react.default.createElement(
                _box.default,
                { paddingHorizontal: 4, paddingVertical: 5 },
                _react.default.createElement(
                  _box.default,
                  { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                  t &&
                    _react.default.createElement(
                      _avatar.default,
                      (0, _extends2.default)({}, t, { size: 'small', marginBottom: 4 }),
                    ),
                  _react.default.createElement(_typography.Heading3, { color: 'teal' }, l),
                  i && _react.default.createElement(_typography.TextBody, { color: 'neutral', marginTop: 2 }, i),
                  r &&
                    _react.default.createElement(
                      _typography.TextBody,
                      { marginTop: 4 },
                      _react.default.createElement(_link.default, (0, _extends2.default)({}, r, { inherit: !1 })),
                    ),
                ),
              ),
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent),
  _default = EmptyPassport;
exports.default = _default;
