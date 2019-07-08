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
  IconTab = (function(e) {
    function l() {
      var e, r;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'tabNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleClick', function(e) {
          r.props.onClick && r.props.onClick(e), 0 !== e.pageX && 0 !== e.pageY && r.blur();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'blur', function() {
          r.tabNode.current.boxNode.current && r.tabNode.current.boxNode.current.blur();
        }),
        r
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.active,
              t = e.className,
              i = e.counter,
              a = void 0 === i ? null : i,
              l = e.icon,
              u = (0, _objectWithoutProperties2.default)(e, ['active', 'className', 'counter', 'icon']),
              n = (0, _classnames.default)(
                _theme.default['icon-tab'],
                (0, _defineProperty2.default)({}, _theme.default['is-active'], r),
                t,
              ),
              o = (0, _lodash.default)(u, ['onClick']);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  'data-teamleader-ui': 'icon-tab',
                  className: n,
                  paddingHorizontal: 3,
                  paddingVertical: 4,
                  ref: this.tabNode,
                  onClick: this.handleClick,
                },
                o,
              ),
              _react.default.cloneElement(l, { element: 'span' }),
              a && _react.default.cloneElement(a, { className: _theme.default.counter }),
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
IconTab.defaultProps = { element: 'a', active: !1 };
var _default = IconTab;
exports.default = _default;
