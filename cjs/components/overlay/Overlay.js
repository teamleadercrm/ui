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

var _Transition = _interopRequireDefault(require('react-transition-group/Transition'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Overlay =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Overlay, _PureComponent);

    function Overlay() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Overlay);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Overlay)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleEscKey', function(e) {
        if (_this.props.active && _this.props.onEscKeyDown && e.which === 27) {
          _this.props.onEscKeyDown(e);
        }
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleClick', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(Overlay, [
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
            other = (0, _objectWithoutProperties2.default)(_this$props2, [
              'active',
              'className',
              'backdrop',
              'lockScroll',
              'onEscKeyDown',
            ]); // eslint-disable-line

          return _react.default.createElement(
            _Transition.default,
            {
              timeout: 0,
              in: active,
              appear: true,
            },
            function(state) {
              var _cx;

              return _react.default.createElement(
                'div',
                (0, _extends2.default)(
                  {
                    'data-teamleader-ui': 'overlay',
                  },
                  other,
                  {
                    onClick: _this2.handleClick,
                    className: (0, _classnames.default)(
                      _theme.default['overlay'],
                      _theme.default[backdrop],
                      ((_cx = {}),
                      (0, _defineProperty2.default)(_cx, _theme.default['is-entering'], state === 'entering'),
                      (0, _defineProperty2.default)(_cx, _theme.default['is-entered'], state === 'entered'),
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
  })(_react.PureComponent);

Overlay.defaultProps = {
  backdrop: 'dark',
  lockScroll: true,
};
var _default = Overlay;
exports.default = _default;
