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

var _reactDom = _interopRequireDefault(require('react-dom'));

var _classnames = _interopRequireDefault(require('classnames'));

var _utils = require('../utils');

var _utils2 = require('../utils/utils');

var _box = _interopRequireDefault(require('../box'));

var _MenuItem = _interopRequireDefault(require('./MenuItem.js'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var POSITION = {
  AUTO: 'auto',
  STATIC: 'static',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
};

var Menu =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Menu, _PureComponent);

    function Menu() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Menu);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {});
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'menuNode', (0, _react.createRef)());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleDocumentClick', function(
        event,
      ) {
        if (
          _this.state.active &&
          !_utils.events.targetIsDescendant(
            event,
            _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this)),
          )
        ) {
          _this.hide();
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleSelect', function(item, event) {
        var onSelect = _this.props.onSelect;
        var _item$props = item.props,
          value = _item$props.value,
          onClick = _item$props.onClick;

        if (onSelect) {
          onSelect(value);
        }

        if (onClick) {
          event.persist();
          onClick(event);
        }

        _this.hide();
      });
      return _this;
    }

    (0, _createClass2.default)(
      Menu,
      [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this$menuNode$curren = this.menuNode.current.getBoundingClientRect(),
              width = _this$menuNode$curren.width,
              height = _this$menuNode$curren.height;

            this.setState({
              width: width,
              height: height,
            });
            var position = this.props.position;

            if (position === POSITION.AUTO) {
              this.setState({
                position: this.calculatePosition(),
              });
            }
          },
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevState) {
            if (prevState.active && !this.state.active) {
              this.hide();
            }

            if (!prevState.active && this.state.active) {
              this.show();
            }

            if (prevState.position !== this.state.position && this.state.position === POSITION.AUTO) {
              this.setState({
                position: this.calculatePosition(),
              });
            }

            var _this$menuNode$curren2 = this.menuNode.current.getBoundingClientRect(),
              width = _this$menuNode$curren2.width,
              height = _this$menuNode$curren2.height;

            if (prevState.width !== width || prevState.height !== height) {
              this.setState({
                width: width,
                height: height,
              }); // eslint-disable-line
            }
          },
        },
        {
          key: 'show',
          value: function show() {
            var onShow = this.props.onShow;

            if (onShow) {
              onShow();
            }

            this.setState({
              active: true,
            });
            this.addEvents();
          },
        },
        {
          key: 'hide',
          value: function hide() {
            var onHide = this.props.onHide;

            if (onHide) {
              onHide();
            }

            this.setState({
              active: false,
            });
            this.removeEvents();
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            if (this.state.active) {
              this.removeEvents();
            }
          },
        },
        {
          key: 'addEvents',
          value: function addEvents() {
            _utils.events.addEventsToDocument({
              click: this.handleDocumentClick,
              touchstart: this.handleDocumentClick,
            });
          },
        },
        {
          key: 'removeEvents',
          value: function removeEvents() {
            _utils.events.removeEventsFromDocument({
              click: this.handleDocumentClick,
              touchstart: this.handleDocumentClick,
            });
          },
        },
        {
          key: 'calculatePosition',
          value: function calculatePosition() {
            var parentNode = _reactDom.default.findDOMNode(this).parentNode;

            if (!parentNode) {
              return;
            }

            var _parentNode$getBoundi = parentNode.getBoundingClientRect(),
              top = _parentNode$getBoundi.top,
              left = _parentNode$getBoundi.left,
              height = _parentNode$getBoundi.height,
              width = _parentNode$getBoundi.width;

            var _getViewport = (0, _utils2.getViewport)(),
              vh = _getViewport.height,
              vw = _getViewport.width;

            var toTop = top < vh / 2 - height / 2;
            var toLeft = left < vw / 2 - width / 2;
            return ''.concat(toTop ? 'top' : 'bottom').concat(toLeft ? 'Left' : 'Right');
          },
        },
        {
          key: 'getRootStyle',
          value: function getRootStyle() {
            var _this$state = this.state,
              width = _this$state.width,
              height = _this$state.height,
              position = _this$state.position;

            if (position !== POSITION.STATIC) {
              return {
                width: width,
                height: height,
              };
            }
          },
        },
        {
          key: 'getMenuStyle',
          value: function getMenuStyle() {
            var active = this.state.active;

            if (active) {
              return this.getActiveMenuStyle();
            }

            return this.getMenuStyleByPosition();
          },
        },
        {
          key: 'getActiveMenuStyle',
          value: function getActiveMenuStyle() {
            var _this$state2 = this.state,
              width = _this$state2.width,
              height = _this$state2.height;
            return {
              clip: 'rect(0 '.concat(width, 'px ').concat(height, 'px 0)'),
            };
          },
        },
        {
          key: 'getMenuStyleByPosition',
          value: function getMenuStyleByPosition() {
            var _this$state3 = this.state,
              width = _this$state3.width,
              height = _this$state3.height,
              position = _this$state3.position;

            switch (position) {
              case POSITION.TOP_RIGHT:
                return {
                  clip: 'rect(0 '.concat(width, 'px 0 ').concat(width, 'px)'),
                };

              case POSITION.BOTTOM_RIGHT:
                return {
                  clip: 'rect('
                    .concat(height, 'px ')
                    .concat(width, 'px ')
                    .concat(height, 'px ')
                    .concat(width, 'px)'),
                };

              case POSITION.BOTTOM_LEFT:
                return {
                  clip: 'rect('.concat(height, 'px 0 ').concat(height, 'px 0)'),
                };

              case POSITION.TOP_LEFT:
                return {
                  clip: 'rect(0 0 0 0)',
                };

              default:
                return {};
            }
          },
        },
        {
          key: 'getItems',
          value: function getItems() {
            var _this2 = this;

            var _this$props = this.props,
              children = _this$props.children,
              selectable = _this$props.selectable,
              selected = _this$props.selected; // Because React Hot Loader creates proxied versions of your components,
            // comparing reference types of elements won't work
            // https://github.com/gaearon/react-hot-loader/blob/master/docs/Known%20Limitations.md#checking-element-types

            var MenuItemType = _react.default.createElement(_MenuItem.default, null).type;

            return _react.default.Children.map(children, function(item) {
              if (!item) {
                return item;
              }

              if (item.type === MenuItemType) {
                return _react.default.cloneElement(item, {
                  selected: typeof item.props.value !== 'undefined' && selectable && item.props.value === selected,
                  onClick: _this2.handleSelect.bind(_this2, item),
                });
              } else {
                return _react.default.cloneElement(item);
              }
            });
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this$state4 = this.state,
              width = _this$state4.width,
              height = _this$state4.height,
              active = _this$state4.active,
              position = _this$state4.position;
            var _this$props2 = this.props,
              className = _this$props2.className,
              outline = _this$props2.outline,
              others = (0, _objectWithoutProperties2.default)(_this$props2, ['className', 'outline']);
            var classNames = (0, _classnames.default)(
              _theme.default['menu'],
              _theme.default[position],
              (0, _defineProperty2.default)({}, _theme.default['active'], active),
              className,
            );
            var outlineClassNames = (0, _classnames.default)(
              _theme.default['outline'],
              (0, _defineProperty2.default)({}, _uiUtilities.default['box-shadow-200'], position !== POSITION.STATIC),
            );
            return _react.default.createElement(
              _box.default,
              (0, _extends2.default)(
                {
                  'data-teamleader-ui': 'menu',
                  className: classNames,
                  style: this.getRootStyle(),
                },
                others,
              ),
              outline
                ? _react.default.createElement('div', {
                    className: outlineClassNames,
                    style: {
                      width: width,
                      height: height,
                    },
                  })
                : null,
              _react.default.createElement(
                'ul',
                {
                  ref: this.menuNode,
                  className: _theme.default['menu-inner'],
                  style: this.getMenuStyle(),
                },
                this.getItems(),
              ),
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(props, state) {
            var newStateSlice = {};

            if (props.active !== state.active) {
              newStateSlice.active = props.active;
            }

            if (props.position !== state.position) {
              newStateSlice.position = props.position;
            }

            if (newStateSlice.active || newStateSlice.position) {
              return newStateSlice;
            }

            return null;
          },
        },
      ],
    );
    return Menu;
  })(_react.PureComponent);

Menu.defaultProps = {
  active: false,
  outline: true,
  position: POSITION.STATIC,
  selectable: true,
};
var _default = Menu;
exports.default = _default;
