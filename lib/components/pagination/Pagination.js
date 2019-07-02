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
  _typography = require('../typography'),
  _uiIcons = require('@teamleader/ui-icons'),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  Pagination = (function(e) {
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
              t = e.className,
              r = e.currentPage,
              a = e.inverse,
              i = e.maxNumPagesVisible,
              l = e.nextPageText,
              u = e.numPages,
              n = e.prevPageText,
              s = e.children,
              o = (0, _objectWithoutProperties2.default)(e, [
                'className',
                'currentPage',
                'inverse',
                'maxNumPagesVisible',
                'nextPageText',
                'numPages',
                'prevPageText',
                'children',
              ]);
            if (u < 2) return null;
            for (
              var c = (0, _classnames.default)(
                  _theme.default.pagination,
                  (0, _defineProperty2.default)({}, _theme.default['is-inverse'], a),
                  t,
                ),
                p = [r],
                m = 0;
              p.length < i && p.length < u;

            )
              m % 2 == 0 && 1 !== p[0]
                ? p.unshift(p[0] - 1)
                : m % 2 == 1 && p[p.length - 1] !== u && p.push(p[p.length - 1] + 1),
                m++;
            return (
              (p[0] = 1),
              (p[p.length - 1] = u),
              1 < p.length && 2 !== p[1] && (p[1] = 'ellipsis-left'),
              1 < p.length && p[p.length - 2] !== u - 1 && (p[p.length - 2] = 'ellipsis-right'),
              _react.default.createElement(
                _box.default,
                (0, _extends2.default)({ 'data-teamleader-ui': 'pagination', className: c, element: 'nav' }, o),
                _react.default.createElement(
                  'ul',
                  { className: _theme.default.list },
                  1 < r &&
                    _react.default.createElement(
                      'li',
                      { className: _theme.default['list-item'] },
                      s({
                        number: r - 1,
                        text: n,
                        isActive: !1,
                        icon: _react.default.createElement(_uiIcons.IconChevronLeftMediumOutline, null),
                        iconPlacement: 'left',
                      }),
                    ),
                  p.map(function(e) {
                    var t = e === r;
                    return _react.default.createElement(
                      'li',
                      { key: e, className: _theme.default['list-item'] },
                      String(e).startsWith('ellipsis')
                        ? _react.default.createElement(
                            _typography.TextBody,
                            { className: _theme.default.ellipsis, element: 'span' },
                            '...',
                          )
                        : s({ number: e, text: e, isActive: t, className: t ? _theme.default['is-current'] : '' }),
                    );
                  }),
                  r < u &&
                    _react.default.createElement(
                      'li',
                      { className: _theme.default['list-item'] },
                      s({
                        number: r + 1,
                        text: l,
                        isActive: !1,
                        icon: _react.default.createElement(_uiIcons.IconChevronRightMediumOutline, null),
                        iconPlacement: 'right',
                      }),
                    ),
                ),
              )
            );
          },
        },
      ]),
      t
    );
  })(_react.PureComponent);
Pagination.defaultProps = { currentPage: 1, inverse: !1, maxNumPagesVisible: 7 };
var _default = Pagination;
exports.default = _default;
