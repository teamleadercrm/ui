'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties'));

var _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

var _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

var _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn'));

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _box = _interopRequireDefault(require('../box'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var _uiUtilities = _interopRequireDefault(require('@teamleader/ui-utilities'));

var Cell =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Cell, _PureComponent);

    function Cell() {
      (0, _classCallCheck2.default)(this, Cell);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Cell).apply(this, arguments));
    }

    (0, _createClass2.default)(Cell, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            align = _this$props.align,
            backgroundColor = _this$props.backgroundColor,
            border = _this$props.border,
            children = _this$props.children,
            className = _this$props.className,
            flex = _this$props.flex,
            preventOverflow = _this$props.preventOverflow,
            soft = _this$props.soft,
            strong = _this$props.strong,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'align',
              'backgroundColor',
              'border',
              'children',
              'className',
              'flex',
              'preventOverflow',
              'soft',
              'strong',
            ]);
          var classNames = (0, _classnames.default)(
            _uiUtilities.default['reset-font-smoothing'],
            _theme.default['cell'],
            _theme.default['align-'.concat(align)],
            _theme.default['flex-'.concat(flex)],
            _theme.default['has-background-'.concat(backgroundColor)],
            _theme.default['has-border-'.concat(border)],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-soft'], soft),
            (0, _defineProperty2.default)(_cx, _theme.default['is-strong'], strong),
            _cx),
            className,
          );
          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                className: classNames,
                'data-teamleader-ui': 'datagrid-cell',
                boxSizing: 'content-box',
              },
              others,
            ),
            preventOverflow
              ? _react.default.createElement(
                  'div',
                  {
                    className: _theme.default['has-overflow-prevention'],
                  },
                  children,
                )
              : children,
          );
        },
      },
    ]);
    return Cell;
  })(_react.PureComponent);

Cell.defaultProps = {
  align: 'left',
  flex: '1',
  preventOverflow: true,
  soft: false,
  strong: false,
};
var _default = Cell;
exports.default = _default;
