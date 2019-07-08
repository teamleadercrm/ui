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
  _reactDom = _interopRequireDefault(require('react-dom')),
  _classnames = _interopRequireDefault(require('classnames')),
  _utils = require('../utils'),
  _utils2 = require('../utils/utils'),
  _box = _interopRequireWildcard(require('../box')),
  _MenuItem = _interopRequireDefault(require('./MenuItem.js')),
  _theme = _interopRequireDefault(require('./theme.css')),
  _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities')),
  POSITION = {
    AUTO: 'auto',
    STATIC: 'static',
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
  },
  Menu = (function(e) {
    function a() {
      var e, u;
      (0, _classCallCheck2.default)(this, a);
      for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
      return (
        (u = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'state', {}),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'menuNode', (0, _react.createRef)()),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'handleDocumentClick', function(e) {
          u.state.active &&
            !_utils.events.targetIsDescendant(
              e,
              _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(u)),
            ) &&
            u.hide();
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(u), 'handleSelect', function(e, t) {
          var i = u.props.onSelect,
            r = e.props,
            a = r.value,
            n = r.onClick;
          i && i(a), n && (t.persist(), n(t)), u.hide();
        }),
        u
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(
        a,
        [
          {
            key: 'componentDidMount',
            value: function() {
              var e = this.menuNode.current.getBoundingClientRect(),
                t = e.width,
                i = e.height;
              this.setState({ width: t, height: i }),
                this.props.position === POSITION.AUTO && this.setState({ position: this.calculatePosition() });
            },
          },
          {
            key: 'componentDidUpdate',
            value: function(e) {
              e.active && !this.state.active && this.hide(),
                !e.active && this.state.active && this.show(),
                e.position !== this.state.position &&
                  this.state.position === POSITION.AUTO &&
                  this.setState({ position: this.calculatePosition() });
              var t = this.menuNode.current.getBoundingClientRect(),
                i = t.width,
                r = t.height;
              (e.width === i && e.height === r) || this.setState({ width: i, height: r });
            },
          },
          {
            key: 'show',
            value: function() {
              var e = this.props.onShow;
              e && e(), this.setState({ active: !0 }), this.addEvents();
            },
          },
          {
            key: 'hide',
            value: function() {
              var e = this.props.onHide;
              e && e(), this.setState({ active: !1 }), this.removeEvents();
            },
          },
          {
            key: 'componentWillUnmount',
            value: function() {
              this.state.active && this.removeEvents();
            },
          },
          {
            key: 'addEvents',
            value: function() {
              _utils.events.addEventsToDocument({
                click: this.handleDocumentClick,
                touchstart: this.handleDocumentClick,
              });
            },
          },
          {
            key: 'removeEvents',
            value: function() {
              _utils.events.removeEventsFromDocument({
                click: this.handleDocumentClick,
                touchstart: this.handleDocumentClick,
              });
            },
          },
          {
            key: 'calculatePosition',
            value: function() {
              var e = _reactDom.default.findDOMNode(this).parentNode;
              if (e) {
                var t = e.getBoundingClientRect(),
                  i = t.top,
                  r = t.left,
                  a = t.height,
                  n = t.width,
                  u = (0, _utils2.getViewport)(),
                  s = u.height,
                  l = r < u.width / 2 - n / 2;
                return ''.concat(i < s / 2 - a / 2 ? 'top' : 'bottom').concat(l ? 'Left' : 'Right');
              }
            },
          },
          {
            key: 'getRootStyle',
            value: function() {
              var e = this.state,
                t = e.width,
                i = e.height;
              if (e.position !== POSITION.STATIC) return { width: t, height: i };
            },
          },
          {
            key: 'getMenuStyle',
            value: function() {
              return this.state.active ? this.getActiveMenuStyle() : this.getMenuStyleByPosition();
            },
          },
          {
            key: 'getActiveMenuStyle',
            value: function() {
              var e = this.state,
                t = e.width,
                i = e.height;
              return { clip: 'rect(0 '.concat(t, 'px ').concat(i, 'px 0)') };
            },
          },
          {
            key: 'getMenuStyleByPosition',
            value: function() {
              var e = this.state,
                t = e.width,
                i = e.height;
              switch (e.position) {
                case POSITION.TOP_RIGHT:
                  return { clip: 'rect(0 '.concat(t, 'px 0 ').concat(t, 'px)') };
                case POSITION.BOTTOM_RIGHT:
                  return {
                    clip: 'rect('
                      .concat(i, 'px ')
                      .concat(t, 'px ')
                      .concat(i, 'px ')
                      .concat(t, 'px)'),
                  };
                case POSITION.BOTTOM_LEFT:
                  return { clip: 'rect('.concat(i, 'px 0 ').concat(i, 'px 0)') };
                case POSITION.TOP_LEFT:
                  return { clip: 'rect(0 0 0 0)' };
                default:
                  return {};
              }
            },
          },
          {
            key: 'getItems',
            value: function() {
              var t = this,
                e = this.props,
                i = e.children,
                r = e.selectable,
                a = e.selected,
                n = _react.default.createElement(_MenuItem.default, null).type;
              return _react.default.Children.map(i, function(e) {
                return e
                  ? e.type === n
                    ? _react.default.cloneElement(e, {
                        selected: void 0 !== e.props.value && r && e.props.value === a,
                        onClick: t.handleSelect.bind(t, e),
                      })
                    : _react.default.cloneElement(e)
                  : e;
              });
            },
          },
          {
            key: 'render',
            value: function() {
              var e = this.state,
                t = e.width,
                i = e.height,
                r = e.active,
                a = e.position,
                n = this.props,
                u = n.className,
                s = n.outline,
                l = (0, _objectWithoutProperties2.default)(n, ['className', 'outline']),
                o = (0, _classnames.default)(
                  _theme.default.menu,
                  _theme.default[a],
                  (0, _defineProperty2.default)({}, _theme.default.active, r),
                  u,
                ),
                c = (0, _classnames.default)(
                  _theme.default.outline,
                  (0, _defineProperty2.default)({}, _uiUtilities.default['box-shadow-200'], a !== POSITION.STATIC),
                ),
                h = (0, _box.pickBoxProps)(l);
              return _react.default.createElement(
                _box.default,
                (0, _extends2.default)({ 'data-teamleader-ui': 'menu', className: o, style: this.getRootStyle() }, h),
                s ? _react.default.createElement('div', { className: c, style: { width: t, height: i } }) : null,
                _react.default.createElement(
                  'ul',
                  { ref: this.menuNode, className: _theme.default['menu-inner'], style: this.getMenuStyle() },
                  this.getItems(),
                ),
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function(e, t) {
              var i = {};
              return (
                e.active !== t.active && (i.active = e.active),
                e.position !== t.position && (i.position = e.position),
                i.active || i.position ? i : null
              );
            },
          },
        ],
      ),
      a
    );
  })(_react.PureComponent);
Menu.defaultProps = { active: !1, outline: !0, position: POSITION.STATIC, selectable: !0 };
var _default = Menu;
exports.default = _default;
