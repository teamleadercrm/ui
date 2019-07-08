'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _avatar = _interopRequireDefault(require('../avatar')),
  _box = _interopRequireDefault(require('../box')),
  _icon = _interopRequireDefault(require('../icon')),
  _link = _interopRequireDefault(require('../link')),
  _popover = _interopRequireDefault(require('../popover')),
  _typography = require('../typography'),
  Passport = (function(e) {
    function i() {
      var e, t;
      (0, _classCallCheck2.default)(this, i);
      for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++) a[l] = arguments[l];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(i)).call.apply(e, [this].concat(a)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'renderDescription', function() {
          var e = t.props.description;
          return e
            ? Array.isArray(e)
              ? _react.default.createElement(
                  _react.Fragment,
                  null,
                  e.map(function(e, t) {
                    return _react.default.createElement(_typography.TextBody, { color: 'teal', key: t }, e);
                  }),
                )
              : _react.default.createElement(_typography.TextBody, { color: 'teal' }, e)
            : null;
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'renderTitle', function() {
          var e = t.props.title;
          return _react.default.createElement(
            _typography.Heading3,
            {
              className: (0, _classnames.default)(
                _theme.default['prevent-overflow'],
                _theme.default['prevent-wrap'],
                _theme.default['show-ellipsis'],
              ),
              color: 'teal',
            },
            'string' == typeof e
              ? e
              : _react.default.createElement(_link.default, (0, _extends2.default)({}, e, { inherit: !1 })),
          );
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(i, e),
      (0, _createClass2.default)(i, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.avatar,
              r = e.className,
              a = e.lineItems,
              l = (0, _objectWithoutProperties2.default)(e, ['avatar', 'className', 'lineItems']);
            return _react.default.createElement(
              _popover.default,
              (0, _extends2.default)({}, l, {
                backdrop: 'transparent',
                className: (0, _classnames.default)(_theme.default.passport, r),
              }),
              _react.default.createElement(
                _box.default,
                { padding: 3 },
                _react.default.createElement(
                  _box.default,
                  { display: 'flex' },
                  _react.default.createElement(
                    _box.default,
                    { flex: '48px 0 0', paddingRight: 3 },
                    _react.default.createElement(_avatar.default, (0, _extends2.default)({}, t, { size: 'small' })),
                  ),
                  _react.default.createElement(
                    _box.default,
                    { className: _theme.default['prevent-overflow'] },
                    this.renderTitle(),
                    this.renderDescription(),
                  ),
                ),
                a &&
                  _react.default.createElement(
                    _box.default,
                    { marginTop: 3 },
                    a.map(function(e, t) {
                      var r = e.icon,
                        a = (0, _objectWithoutProperties2.default)(e, ['icon']);
                      return _react.default.createElement(
                        _box.default,
                        { alignItems: 'flex-start', display: 'flex', key: t },
                        _react.default.createElement(
                          _box.default,
                          { display: 'flex', flex: '48px 0 0', justifyContent: 'center', paddingRight: 3 },
                          r &&
                            _react.default.createElement(
                              _icon.default,
                              {
                                color: a.href || a.onClick ? 'aqua' : 'teal',
                                tint: a.href || a.onClick ? 'dark' : 'darkest',
                                marginTop: 1,
                              },
                              r,
                            ),
                        ),
                        _react.default.createElement(
                          _typography.TextBody,
                          {
                            className: (0, _classnames.default)(
                              _theme.default['prevent-overflow'],
                              _theme.default['prevent-wrap'],
                              _theme.default['show-ellipsis'],
                            ),
                            color: 'teal',
                          },
                          a.href || a.onClick
                            ? _react.default.createElement(
                                _link.default,
                                (0, _extends2.default)({}, a, { inherit: !1 }),
                              )
                            : a.children,
                        ),
                      );
                    }),
                  ),
              ),
            );
          },
        },
      ]),
      i
    );
  })(_react.PureComponent),
  _default = Passport;
exports.default = _default;
