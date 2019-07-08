'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _reactDom = require('react-dom');

var _propTypes = _interopRequireDefault(require('prop-types'));

var _classnames = _interopRequireDefault(require('classnames'));

var _box = _interopRequireDefault(require('../box'));

var _Overlay = _interopRequireDefault(require('../overlay/Overlay'));

var _Transition = _interopRequireDefault(require('react-transition-group/Transition'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var DialogBase =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(DialogBase, _PureComponent);

    function DialogBase() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, DialogBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DialogBase)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'dialogRoot',
        document.createElement('div'),
      );
      return _this;
    }

    (0, _createClass2.default)(DialogBase, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.body.appendChild(this.dialogRoot);
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.body.removeChild(this.dialogRoot);
        },
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            active = _this$props.active,
            backdrop = _this$props.backdrop,
            children = _this$props.children,
            className = _this$props.className,
            onEscKeyDown = _this$props.onEscKeyDown,
            onOverlayClick = _this$props.onOverlayClick,
            onOverlayMouseDown = _this$props.onOverlayMouseDown,
            onOverlayMouseMove = _this$props.onOverlayMouseMove,
            onOverlayMouseUp = _this$props.onOverlayMouseUp,
            scrollable = _this$props.scrollable,
            size = _this$props.size;

          if (!active) {
            return null;
          }

          var dialogClassNames = (0, _classnames.default)(
            _uiUtilities.default['box-shadow-300'],
            _theme.default['dialog-base'],
            _theme.default['is-'.concat(size)],
            className,
          );

          var dialog = _react.default.createElement(
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
                {
                  className: (0, _classnames.default)(
                    _theme.default['wrapper'],
                    ((_cx = {}),
                    (0, _defineProperty2.default)(_cx, _theme.default['is-entering'], state === 'entering'),
                    (0, _defineProperty2.default)(_cx, _theme.default['is-entered'], state === 'entered'),
                    _cx),
                  ),
                },
                _react.default.createElement(_Overlay.default, {
                  active: active,
                  backdrop: backdrop,
                  className: _theme.default['overlay'],
                  onClick: onOverlayClick,
                  onEscKeyDown: onEscKeyDown,
                  onMouseDown: onOverlayMouseDown,
                  onMouseMove: onOverlayMouseMove,
                  onMouseUp: onOverlayMouseUp,
                }),
                _react.default.createElement(
                  'div',
                  {
                    'data-teamleader-ui': 'dialog',
                    className: dialogClassNames,
                  },
                  _react.default.createElement(
                    'div',
                    {
                      className: _theme.default['inner'],
                    },
                    scrollable
                      ? _react.default.createElement(
                          _box.default,
                          {
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                          },
                          children,
                        )
                      : children,
                  ),
                ),
              );
            },
          );

          return (0, _reactDom.createPortal)(dialog, this.dialogRoot);
        },
      },
    ]);
    return DialogBase;
  })(_react.PureComponent);

DialogBase.defaultProps = {
  active: false,
  backdrop: 'dark',
  scrollable: true,
  size: 'medium',
};
var _default = DialogBase;
exports.default = _default;
