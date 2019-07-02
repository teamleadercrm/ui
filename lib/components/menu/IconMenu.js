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
  _uiIcons = require('@teamleader/ui-icons'),
  _IconButton = _interopRequireDefault(require('../button/IconButton.js')),
  _Menu = _interopRequireDefault(require('./Menu.js')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _box = _interopRequireWildcard(require('../box')),
  IconMenu = (function(e) {
    function u() {
      var e, t;
      (0, _classCallCheck2.default)(this, u);
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(u)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'state', { active: !1 }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleButtonClick', function(e) {
          t.setState({ active: !t.state.active }), t.props.onClick && t.props.onClick(e);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleMenuHide', function() {
          t.setState({ active: !1 }), t.props.onHide && t.props.onHide();
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(u, e),
      (0, _createClass2.default)(u, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.icon,
              a = (e.onHide, e.onSelect),
              u = e.onShow,
              l = e.position,
              n = e.selectable,
              o = e.selected,
              s = (0, _objectWithoutProperties2.default)(e, [
                'children',
                'className',
                'icon',
                'onHide',
                'onSelect',
                'onShow',
                'position',
                'selectable',
                'selected',
              ]),
              c = (0, _box.pickBoxProps)(s),
              p = i || _react.default.createElement(_uiIcons.IconMoreMediumOutline, null);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ 'data-teamleader-ui': 'icon-menu' }, c, {
                className: (0, _classnames.default)(_theme.default['icon-menu'], r),
              }),
              _react.default.createElement(_IconButton.default, {
                className: _theme.default.icon,
                icon: p,
                onClick: this.handleButtonClick,
              }),
              _react.default.createElement(
                _Menu.default,
                {
                  active: this.state.active,
                  onHide: this.handleMenuHide,
                  onSelect: a,
                  onShow: u,
                  position: l,
                  selectable: n,
                  selected: o,
                },
                t,
              ),
            );
          },
        },
      ]),
      u
    );
  })(_react.PureComponent);
IconMenu.defaultProps = { className: '', position: 'auto', selectable: !1 };
var _default = IconMenu;
exports.default = _default;
