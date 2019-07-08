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
  _box = _interopRequireWildcard(require('../box')),
  _ = require('.'),
  _menu = require('../menu'),
  _popover = _interopRequireDefault(require('../popover')),
  _uiIcons = require('@teamleader/ui-icons'),
  SplitButtonMenu = (function(e) {
    function n() {
      var e, r;
      (0, _classCallCheck2.default)(this, n);
      for (var t = arguments.length, i = new Array(t), l = 0; l < t; l++) i[l] = arguments[l];
      return (
        (r = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(n)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'firstChild', {
          caption: r.props.children[0].props.caption,
          level: r.props.children[0].props.level,
          value: r.props.children[0].props.value,
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'state', {
          buttonLabel: r.firstChild.caption,
          buttonLevel: r.firstChild.level,
          value: r.firstChild.value,
          popoverActive: !1,
          popoverAnchorEl: null,
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleMainButtonClick', function(e) {
          r.props.onButtonClick(e.currentTarget);
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleSecondaryButtonClick', function(
          e,
        ) {
          r.setState({ popoverActive: !0, popoverAnchorEl: e.currentTarget });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleMenuItemClick', function(e) {
          var t = e.props;
          r.setState({ buttonLabel: t.caption, buttonLevel: t.level, popoverActive: !1, value: t.value });
        }),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(r), 'handleCloseClick', function() {
          r.setState({ popoverActive: !1 });
        }),
        r
      );
    }
    return (
      (0, _inherits2.default)(n, e),
      (0, _createClass2.default)(n, [
        {
          key: 'render',
          value: function() {
            var t = this,
              e = this.props,
              r = e.children,
              i = (0, _objectWithoutProperties2.default)(e, ['children']),
              l = this.state,
              n = l.buttonLabel,
              a = l.buttonLevel,
              u = l.popoverActive,
              o = l.popoverAnchorEl,
              s = l.value,
              p = (0, _box.pickBoxProps)(i);
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)({ display: 'flex', justifyContent: 'center' }, p, {
                'data-teamleader-ui': 'split-menu',
              }),
              _react.default.createElement(
                _.ButtonGroup,
                { segmented: !0 },
                _react.default.createElement(_.Button, { label: n, level: a, onClick: this.handleMainButtonClick }),
                _react.default.createElement(_.Button, {
                  icon: _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null),
                  level: a,
                  onClick: this.handleSecondaryButtonClick,
                }),
              ),
              _react.default.createElement(
                _popover.default,
                {
                  active: u,
                  anchorEl: o,
                  backdrop: 'transparent',
                  onEscKeyDown: this.handleCloseClick,
                  onOverlayClick: this.handleCloseClick,
                  position: 'start',
                },
                _react.default.createElement(
                  _menu.Menu,
                  { selected: s },
                  _react.default.Children.map(r, function(e) {
                    return _react.default.cloneElement(e, {
                      onClick: function() {
                        return t.handleMenuItemClick(e);
                      },
                    });
                  }),
                ),
              ),
            );
          },
        },
      ]),
      n
    );
  })(_react.PureComponent),
  _default = SplitButtonMenu;
exports.default = _default;
