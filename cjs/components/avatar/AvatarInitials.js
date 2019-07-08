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

var _box = _interopRequireWildcard(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _typography = require('../typography');

var AvatarInitials =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(AvatarInitials, _PureComponent);

    function AvatarInitials() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, AvatarInitials);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AvatarInitials)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'getInitials', function() {
        var name = _this.props.name;
        var splitName = name.split(' ');
        var firstLetter = splitName[0].charAt(0);

        if (splitName.length > 1) {
          var lastLetter = splitName[splitName.length - 1].charAt(0);
          return ''.concat(firstLetter).concat(lastLetter);
        }

        return firstLetter;
      });
      return _this;
    }

    (0, _createClass2.default)(AvatarInitials, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            color = _this$props.color,
            shape = _this$props.shape,
            size = _this$props.size,
            others = (0, _objectWithoutProperties2.default)(_this$props, ['className', 'color', 'shape', 'size']);
          var avatarClassNames = (0, _classnames.default)(
            _theme.default['avatar-initials'],
            _theme.default['is-'.concat(size)],
            _theme.default['is-'.concat(shape)],
            _theme.default[color],
            className,
          );
          var boxProps = (0, _box.pickBoxProps)(others);
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: avatarClassNames,
              },
              boxProps,
              {
                'data-teamleader-ui': 'avatar-initials',
              },
            ),
            _react.default.createElement(
              _typography.Heading4,
              {
                className: _theme.default['content'],
              },
              this.getInitials(),
            ),
          );
        },
      },
    ]);
    return AvatarInitials;
  })(_react.PureComponent);

AvatarInitials.defaultProps = {
  shape: 'circle',
  size: 'medium',
  name: 'Michael Scott',
};
var _default = AvatarInitials;
exports.default = _default;
