import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';
import theme from './theme.css';

var Overlay =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Overlay, _PureComponent);

    function Overlay() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Overlay);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'handleEscKey', function(e) {
        if (_this.props.active && _this.props.onEscKeyDown && e.which === 27) {
          _this.props.onEscKeyDown(e);
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      });

      return _this;
    }

    _createClass(Overlay, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this$props = this.props,
            active = _this$props.active,
            lockScroll = _this$props.lockScroll,
            onEscKeyDown = _this$props.onEscKeyDown;

          if (onEscKeyDown) {
            document.body.addEventListener('keydown', this.handleEscKey);
          }

          if (active && lockScroll) {
            document.body.style.overflow = 'hidden';
          }
        },
      },
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.active && !prevProps.active && this.props.onEscKeyDown) {
            document.body.addEventListener('keydown', this.handleEscKey);
          }

          if (this.props.lockScroll) {
            var becomingActive = this.props.active && !prevProps.active;
            var becomingUnactive = !this.props.active && prevProps.active;

            if (becomingActive) {
              document.body.style.overflow = 'hidden';
            }

            if (becomingUnactive && !document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
              document.body.style.overflow = '';
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (this.props.active && this.props.lockScroll) {
            if (!document.querySelectorAll('[data-teamleader-ui="overlay"]')[1]) {
              document.body.style.overflow = '';
            }
          }

          if (this.props.onEscKeyDown) {
            document.body.removeEventListener('keydown', this.handleEscKey);
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var _this$props2 = this.props,
            active = _this$props2.active,
            className = _this$props2.className,
            backdrop = _this$props2.backdrop,
            lockScroll = _this$props2.lockScroll,
            onEscKeyDown = _this$props2.onEscKeyDown,
            other = _objectWithoutProperties(_this$props2, [
              'active',
              'className',
              'backdrop',
              'lockScroll',
              'onEscKeyDown',
            ]); // eslint-disable-line

          return React.createElement(
            Transition,
            {
              timeout: 0,
              in: active,
              appear: true,
            },
            function(state) {
              var _cx;

              return React.createElement(
                'div',
                _extends(
                  {
                    'data-teamleader-ui': 'overlay',
                  },
                  other,
                  {
                    onClick: _this2.handleClick,
                    className: cx(
                      theme['overlay'],
                      theme[backdrop],
                      ((_cx = {}),
                      _defineProperty(_cx, theme['is-entering'], state === 'entering'),
                      _defineProperty(_cx, theme['is-entered'], state === 'entered'),
                      _cx),
                      className,
                    ),
                  },
                ),
              );
            },
          );
        },
      },
    ]);

    return Overlay;
  })(PureComponent);

Overlay.defaultProps = {
  backdrop: 'dark',
  lockScroll: true,
};
export default Overlay;
