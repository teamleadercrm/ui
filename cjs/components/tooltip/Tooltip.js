'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _objectSpread2 = _interopRequireDefault(require('@babel/runtime/helpers/objectSpread'));

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

var _box = _interopRequireDefault(require('../box'));

var _Transition = _interopRequireDefault(require('react-transition-group/Transition'));

var _classnames = _interopRequireDefault(require('classnames'));

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _reactDom = require('react-dom');

var _utils = require('../utils/utils');

var _DocumentObjectProvider = _interopRequireWildcard(require('../hoc/DocumentObjectProvider'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var POSITIONS = {
  BOTTOM: 'bottom',
  HORIZONTAL: 'horizontal',
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  VERTICAL: 'vertical',
};
var SIZES = {
  medium: {
    padding: 3,
  },
  small: {
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
};

var Tooltip = function Tooltip(ComposedComponent) {
  var TooltippedComponent =
    /*#__PURE__*/
    (function(_Component) {
      (0, _inherits2.default)(TooltippedComponent, _Component);

      function TooltippedComponent() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, TooltippedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(
          this,
          (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TooltippedComponent)).call.apply(
            _getPrototypeOf2,
            [this].concat(args),
          ),
        );
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(_this),
          'tooltipRoot',
          _this.props.documentObject.createElement('div'),
        );
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'state', {
          active: false,
          position: _this.props.tooltipPosition,
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseEnter', function(event) {
          _this.activate(_this.calculatePosition(event.currentTarget));

          if (_this.props.onMouseEnter) {
            _this.props.onMouseEnter(event);
          }
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseLeave', function(event) {
          _this.deactivate();

          if (_this.props.onMouseLeave) {
            _this.props.onMouseLeave(event);
          }
        });
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleClick', function(event) {
          if (_this.props.tooltipHideOnClick && _this.state.active) {
            _this.deactivate();
          }

          if (_this.props.tooltipShowOnClick && !_this.state.active) {
            _this.activate(_this.calculatePosition(event.currentTarget));
          }

          if (_this.props.onClick) {
            _this.props.onClick(event);
          }
        });
        (0, _defineProperty2.default)(
          (0, _assertThisInitialized2.default)(_this),
          'handleTransitionExited',
          function() {
            _this.props.documentObject.body.removeChild(_this.tooltipRoot);
          },
        );
        return _this;
      }

      (0, _createClass2.default)(TooltippedComponent, [
        {
          key: 'getPosition',
          value: function getPosition(element) {
            var tooltipPosition = this.props.tooltipPosition;

            if (tooltipPosition === POSITIONS.HORIZONTAL) {
              var origin = element.getBoundingClientRect();

              var _getViewport = (0, _utils.getViewport)(),
                windowWidth = _getViewport.width;

              var toRight = origin.left < windowWidth / 2 - origin.width / 2;
              return toRight ? POSITIONS.RIGHT : POSITIONS.LEFT;
            } else if (tooltipPosition === POSITIONS.VERTICAL) {
              var _origin = element.getBoundingClientRect();

              var _getViewport2 = (0, _utils.getViewport)(),
                windowHeight = _getViewport2.height;

              var toBottom = _origin.top < windowHeight / 2 - _origin.height / 2;
              return toBottom ? POSITIONS.BOTTOM : POSITIONS.TOP;
            }

            return tooltipPosition;
          },
        },
        {
          key: 'activate',
          value: function activate(_ref) {
            var top = _ref.top,
              left = _ref.left,
              position = _ref.position;
            this.props.documentObject.body.appendChild(this.tooltipRoot);
            this.setState({
              active: true,
              top: top,
              left: left,
              position: position,
            });
          },
        },
        {
          key: 'deactivate',
          value: function deactivate() {
            this.setState({
              active: false,
            });
          },
        },
        {
          key: 'calculatePosition',
          value: function calculatePosition(element) {
            var _element$getBoundingC = element.getBoundingClientRect(),
              top = _element$getBoundingC.top,
              left = _element$getBoundingC.left,
              height = _element$getBoundingC.height,
              width = _element$getBoundingC.width;

            var position = this.getPosition(element);
            var xOffset = window.scrollX || window.pageXOffset;
            var yOffset = window.scrollY || window.pageYOffset;

            if (position === POSITIONS.BOTTOM) {
              return {
                top: top + height + yOffset,
                left: left + width / 2 + xOffset,
                position: position,
              };
            } else if (position === POSITIONS.TOP) {
              return {
                top: top + yOffset,
                left: left + width / 2 + xOffset,
                position: position,
              };
            } else if (position === POSITIONS.LEFT) {
              return {
                top: top + height / 2 + yOffset,
                left: left + xOffset,
                position: position,
              };
            } else if (position === POSITIONS.RIGHT) {
              return {
                top: top + height / 2 + yOffset,
                left: left + width + xOffset,
                position: position,
              };
            }
          },
        },
        {
          key: 'render',
          value: function render() {
            var _this$state = this.state,
              active = _this$state.active,
              left = _this$state.left,
              top = _this$state.top,
              position = _this$state.position;
            var _this$props = this.props,
              children = _this$props.children,
              className = _this$props.className,
              tooltip = _this$props.tooltip,
              tooltipColor = _this$props.tooltipColor,
              tooltipIcon = _this$props.tooltipIcon,
              tooltipSize = _this$props.tooltipSize,
              other = (0, _objectWithoutProperties2.default)(_this$props, [
                'children',
                'className',
                'tooltip',
                'tooltipColor',
                'tooltipIcon',
                'tooltipSize',
              ]);
            var rest = (0, _lodash.default)(other, [
              'onClick',
              'onMouseEnter',
              'onMouseLeave',
              'tooltipHideOnClick',
              'tooltipPosition',
              'tooltipShowOnClick',
              'documentObject',
            ]);
            var childProps = (0, _objectSpread2.default)({}, rest, {
              className: className,
              onClick: this.handleClick,
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
            });
            return _react.default.createElement(
              ComposedComponent,
              childProps,
              children,
              (0, _reactDom.createPortal)(
                _react.default.createElement(
                  _Transition.default,
                  {
                    in: active,
                    onExited: this.handleTransitionExited,
                    timeout: {
                      enter: 0,
                      exit: 1000,
                    },
                  },
                  function(state) {
                    var _cx;

                    var classNames = (0, _classnames.default)(
                      _uiUtilities.default['box-shadow-200'],
                      _theme.default['tooltip'],
                      _theme.default[tooltipColor],
                      _theme.default[tooltipSize],
                      ((_cx = {}),
                      (0, _defineProperty2.default)(_cx, _theme.default['is-entering'], state === 'entering'),
                      (0, _defineProperty2.default)(_cx, _theme.default['is-entered'], state === 'entered'),
                      (0, _defineProperty2.default)(_cx, _theme.default['is-exiting'], state === 'exiting'),
                      (0, _defineProperty2.default)(_cx, _theme.default[position], _theme.default[position]),
                      _cx),
                    );
                    return _react.default.createElement(
                      'div',
                      {
                        className: classNames,
                        'data-teamleader-ui': 'tooltip',
                        style: {
                          top: top,
                          left: left,
                        },
                      },
                      _react.default.createElement(
                        _box.default,
                        (0, _extends2.default)(
                          {
                            className: _theme.default['inner'],
                          },
                          SIZES[tooltipSize],
                        ),
                        tooltipIcon &&
                          _react.default.createElement(
                            'div',
                            {
                              className: _theme.default['icon'],
                            },
                            tooltipIcon,
                          ),
                        _react.default.createElement(
                          'div',
                          {
                            className: _theme.default['text'],
                          },
                          tooltip,
                        ),
                      ),
                    );
                  },
                ),
                this.tooltipRoot,
              ),
            );
          },
        },
      ]);
      return TooltippedComponent;
    })(_react.Component);

  TooltippedComponent.defaultProps = {
    className: '',
    tooltipColor: 'white',
    tooltipHideOnClick: true,
    tooltipIcon: null,
    tooltipPosition: POSITIONS.TOP,
    tooltipShowOnClick: false,
    tooltipSize: 'medium',
  };
  return (0, _DocumentObjectProvider.default)(function(props) {
    return _react.default.createElement(_DocumentObjectProvider.Context.Consumer, null, function(documentObject) {
      return _react.default.createElement(
        TooltippedComponent,
        (0, _extends2.default)({}, props, {
          documentObject: documentObject,
        }),
      );
    });
  });
};

var _default = Tooltip;
exports.default = _default;
