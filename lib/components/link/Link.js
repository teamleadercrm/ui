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
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  Link = (function(e) {
    function l() {
      var e, r;
      (0, _classCallCheck2.default)(this, l);
      for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(l)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'linkNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleMouseUp', function(e) {
          var t = r.props.onMouseUp;
          r.blur(), t && t(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleMouseLeave', function(e) {
          var t = r.props.onMouseLeave;
          r.blur(), t && t(e);
        }),
        r
      );
    }
    return (
      (0, _inherits2.default)(l, e),
      (0, _createClass2.default)(l, [
        {
          key: 'blur',
          value: function() {
            this.linkNode.current.blur && this.linkNode.current.blur();
          },
        },
        {
          key: 'render',
          value: function() {
            var e,
              t = this.props,
              r = t.children,
              i = t.className,
              a = t.disabled,
              l = t.icon,
              u = t.iconPlacement,
              n = t.element,
              s = t.inherit,
              o = (0, _objectWithoutProperties2.default)(t, [
                'children',
                'className',
                'disabled',
                'icon',
                'iconPlacement',
                'element',
                'inherit',
              ]),
              d = (0, _classnames.default)(
                _uiUtilities.default['reset-font-smoothing'],
                _theme.default.link,
                ((e = {}),
                (0, _defineProperty2.default)(e, _theme.default['is-disabled'], a),
                (0, _defineProperty2.default)(e, _theme.default.inherit, s),
                (0, _defineProperty2.default)(e, _theme.default['has-icon'], l),
                e),
                i,
              ),
              p = l ? 'span' : _react.Fragment,
              f = n;
            return _react.default.createElement(
              f,
              (0, _extends2.default)(
                {
                  ref: this.linkNode,
                  className: d,
                  'data-teamleader-ui': 'link',
                  onMouseUp: this.handleMouseUp,
                  onMouseLeave: this.handleMouseLeave,
                },
                o,
              ),
              l && 'left' === u && l,
              _react.default.createElement(p, null, r),
              l && 'right' === u && l,
            );
          },
        },
      ]),
      l
    );
  })(_react.PureComponent);
Link.defaultProps = { className: '', disabled: !1, element: 'a', inherit: !0 };
var _default = Link;
exports.default = _default;
