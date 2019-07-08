'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _uiIcons = require('@teamleader/ui-icons');

var _IconButton = _interopRequireDefault(require('../button/IconButton.js'));

var _Menu = _interopRequireDefault(require('./Menu.js'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _box = _interopRequireDefault(require('../box'));

var IconMenu =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(IconMenu, _PureComponent);

    function IconMenu() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, IconMenu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IconMenu)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
        active: false,
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleButtonClick', function(event) {
        _this.setState({
          active: !_this.state.active,
        });

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMenuHide', function() {
        _this.setState({
          active: false,
        });

        if (_this.props.onHide) {
          _this.props.onHide();
        }
      });
      return _this;
    }

    (0, _createClass2.default)(IconMenu, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            icon = _this$props.icon,
            onHide = _this$props.onHide,
            onSelect = _this$props.onSelect,
            onShow = _this$props.onShow,
            position = _this$props.position,
            selectable = _this$props.selectable,
            selected = _this$props.selected,
            other = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'icon',
              'onHide',
              'onSelect',
              'onShow',
              'position',
              'selectable',
              'selected',
            ]);

          var buttonIcon = icon || _react.default.createElement(_uiIcons.IconMoreMediumOutline, null);

          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'icon-menu',
              },
              other,
              {
                className: (0, _classnames.default)(_theme.default['icon-menu'], className),
              },
            ),
            _react.default.createElement(_IconButton.default, {
              className: _theme.default['icon'],
              icon: buttonIcon,
              onClick: this.handleButtonClick,
            }),
            _react.default.createElement(
              _Menu.default,
              {
                active: this.state.active,
                onHide: this.handleMenuHide,
                onSelect: onSelect,
                onShow: onShow,
                position: position,
                selectable: selectable,
                selected: selected,
              },
              children,
            ),
          );
        },
      },
    ]);
    return IconMenu;
  })(_react.PureComponent);

IconMenu.defaultProps = {
  className: '',
  position: 'auto',
  selectable: false,
};
var _default = IconMenu;
exports.default = _default;
