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
  _box = _interopRequireDefault(require('../box')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _lodash = _interopRequireDefault(require('lodash.omit')),
  _typography = require('../typography'),
  TitleTab = (function(e) {
    function l() {
      var e, t;
      (0, _classCallCheck2.default)(this, l);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'tabNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleClick', function(e) {
          t.props.onClick && t.props.onClick(e), 0 !== e.pageX && 0 !== e.pageY && t.blur();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'blur', function() {
          t.tabNode.current.boxNode.current && t.tabNode.current.boxNode.current.blur();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'getPaddingHorizontal', function() {
          switch (t.props.size) {
            case 'small':
              return 2;
            case 'medium':
            default:
              return 3;
          }
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.active,
              r = e.children,
              i = e.className,
              a = e.counter,
              l = void 0 === a ? null : a,
              u = (0, _objectWithoutProperties2.default)(e, ['active', 'children', 'className', 'counter']),
              n = (0, _classnames.default)(
                _theme.default['title-tab'],
                (0, _defineProperty2.default)({}, _theme.default['is-active'], t),
                i,
              ),
              s = (0, _lodash.default)(u, ['onClick']);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  'data-teamleader-ui': 'title-tab',
                  className: n,
                  paddingHorizontal: this.getPaddingHorizontal(),
                  paddingVertical: 4,
                  ref: this.tabNode,
                  onClick: this.handleClick,
                },
                s,
              ),
              _react.default.createElement(_typography.Heading4, { element: 'span' }, r),
              l,
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
TitleTab.defaultProps = { element: 'a', active: !1, size: 'medium' };
var _default = TitleTab;
exports.default = _default;
