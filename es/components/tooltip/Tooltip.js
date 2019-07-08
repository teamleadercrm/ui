import _extends from '@babel/runtime/helpers/extends';
import _objectSpread from '@babel/runtime/helpers/objectSpread';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import omit from 'lodash.omit';
import { createPortal } from 'react-dom';
import { getViewport } from '../utils/utils';
import DocumentObjectProvider, { Context as DocumentObjectContext } from '../hoc/DocumentObjectProvider';
import theme from './theme.css';
import uiUtilities from '@teamleader/ui-utilities';
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
      _inherits(TooltippedComponent, _Component);

      function TooltippedComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, TooltippedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(
          this,
          (_getPrototypeOf2 = _getPrototypeOf(TooltippedComponent)).call.apply(_getPrototypeOf2, [this].concat(args)),
        );

        _defineProperty(_assertThisInitialized(_this), 'tooltipRoot', _this.props.documentObject.createElement('div'));

        _defineProperty(_assertThisInitialized(_this), 'state', {
          active: false,
          position: _this.props.tooltipPosition,
        });

        _defineProperty(_assertThisInitialized(_this), 'handleMouseEnter', function(event) {
          _this.activate(_this.calculatePosition(event.currentTarget));

          if (_this.props.onMouseEnter) {
            _this.props.onMouseEnter(event);
          }
        });

        _defineProperty(_assertThisInitialized(_this), 'handleMouseLeave', function(event) {
          _this.deactivate();

          if (_this.props.onMouseLeave) {
            _this.props.onMouseLeave(event);
          }
        });

        _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
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

        _defineProperty(_assertThisInitialized(_this), 'handleTransitionExited', function() {
          _this.props.documentObject.body.removeChild(_this.tooltipRoot);
        });

        return _this;
      }

      _createClass(TooltippedComponent, [
        {
          key: 'getPosition',
          value: function getPosition(element) {
            var tooltipPosition = this.props.tooltipPosition;

            if (tooltipPosition === POSITIONS.HORIZONTAL) {
              var origin = element.getBoundingClientRect();

              var _getViewport = getViewport(),
                windowWidth = _getViewport.width;

              var toRight = origin.left < windowWidth / 2 - origin.width / 2;
              return toRight ? POSITIONS.RIGHT : POSITIONS.LEFT;
            } else if (tooltipPosition === POSITIONS.VERTICAL) {
              var _origin = element.getBoundingClientRect();

              var _getViewport2 = getViewport(),
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
              other = _objectWithoutProperties(_this$props, [
                'children',
                'className',
                'tooltip',
                'tooltipColor',
                'tooltipIcon',
                'tooltipSize',
              ]);

            var rest = omit(other, [
              'onClick',
              'onMouseEnter',
              'onMouseLeave',
              'tooltipHideOnClick',
              'tooltipPosition',
              'tooltipShowOnClick',
              'documentObject',
            ]);

            var childProps = _objectSpread({}, rest, {
              className: className,
              onClick: this.handleClick,
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave,
            });

            return React.createElement(
              ComposedComponent,
              childProps,
              children,
              createPortal(
                React.createElement(
                  Transition,
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

                    var classNames = cx(
                      uiUtilities['box-shadow-200'],
                      theme['tooltip'],
                      theme[tooltipColor],
                      theme[tooltipSize],
                      ((_cx = {}),
                      _defineProperty(_cx, theme['is-entering'], state === 'entering'),
                      _defineProperty(_cx, theme['is-entered'], state === 'entered'),
                      _defineProperty(_cx, theme['is-exiting'], state === 'exiting'),
                      _defineProperty(_cx, theme[position], theme[position]),
                      _cx),
                    );
                    return React.createElement(
                      'div',
                      {
                        className: classNames,
                        'data-teamleader-ui': 'tooltip',
                        style: {
                          top: top,
                          left: left,
                        },
                      },
                      React.createElement(
                        Box,
                        _extends(
                          {
                            className: theme['inner'],
                          },
                          SIZES[tooltipSize],
                        ),
                        tooltipIcon &&
                          React.createElement(
                            'div',
                            {
                              className: theme['icon'],
                            },
                            tooltipIcon,
                          ),
                        React.createElement(
                          'div',
                          {
                            className: theme['text'],
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
    })(Component);

  TooltippedComponent.defaultProps = {
    className: '',
    tooltipColor: 'white',
    tooltipHideOnClick: true,
    tooltipIcon: null,
    tooltipPosition: POSITIONS.TOP,
    tooltipShowOnClick: false,
    tooltipSize: 'medium',
  };
  return DocumentObjectProvider(function(props) {
    return React.createElement(DocumentObjectContext.Consumer, null, function(documentObject) {
      return React.createElement(
        TooltippedComponent,
        _extends({}, props, {
          documentObject: documentObject,
        }),
      );
    });
  });
};

export default Tooltip;
