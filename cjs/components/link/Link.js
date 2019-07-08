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

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Link =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Link, _PureComponent);

    function Link() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, Link);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Link)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'linkNode', (0, _react.createRef)());
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseUp', function(event) {
        var onMouseUp = _this.props.onMouseUp;

        _this.blur();

        onMouseUp && onMouseUp(event);
      });
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleMouseLeave', function(event) {
        var onMouseLeave = _this.props.onMouseLeave;

        _this.blur();

        onMouseLeave && onMouseLeave(event);
      });
      return _this;
    }

    (0, _createClass2.default)(Link, [
      {
        key: 'blur',
        value: function blur() {
          if (this.linkNode.current.blur) {
            this.linkNode.current.blur();
          }
        },
      },
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            disabled = _this$props.disabled,
            icon = _this$props.icon,
            iconPlacement = _this$props.iconPlacement,
            element = _this$props.element,
            inherit = _this$props.inherit,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'disabled',
              'icon',
              'iconPlacement',
              'element',
              'inherit',
            ]);
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-font-smoothing'],
            _theme.default['link'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-disabled'], disabled),
            (0, _defineProperty2.default)(_cx, _theme.default['inherit'], inherit),
            (0, _defineProperty2.default)(_cx, _theme.default['has-icon'], icon),
            _cx),
            className,
          );
          var ChildrenWrapper = icon ? 'span' : _react.Fragment;
          var Element = element;
          return _react.default.createElement(
            Element,
            (0, _extends2.default)(
              {
                ref: this.linkNode,
                className: classNames,
                'data-teamleader-ui': 'link',
                onMouseUp: this.handleMouseUp,
                onMouseLeave: this.handleMouseLeave,
              },
              others,
            ),
            icon && iconPlacement === 'left' && icon,
            _react.default.createElement(ChildrenWrapper, null, children),
            icon && iconPlacement === 'right' && icon,
          );
        },
      },
    ]);
    return Link;
  })(_react.PureComponent);

Link.defaultProps = {
  className: '',
  disabled: false,
  element: 'a',
  inherit: true,
};
var _default = Link;
exports.default = _default;
