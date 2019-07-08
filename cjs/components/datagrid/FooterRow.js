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

var _getPrototypeOf2 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf'));

var _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Cell = _interopRequireDefault(require('./Cell'));

var _Row = _interopRequireDefault(require('./Row'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var FooterRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(FooterRow, _PureComponent);

    function FooterRow() {
      (0, _classCallCheck2.default)(this, FooterRow);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(FooterRow).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(FooterRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            children = _this$props.children,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            preserveSelectableSpace = _this$props.preserveSelectableSpace,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'children',
              'sliceFrom',
              'sliceTo',
              'preserveSelectableSpace',
            ]);
          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = (0, _classnames.default)(_theme.default['footer-row'], className);
          return _react.default.createElement(
            _Row.default,
            (0, _extends2.default)(
              {
                className: classNames,
                'data-teamleader-ui': 'datagrid-footer-row',
              },
              others,
            ),
            preserveSelectableSpace &&
              _react.default.createElement(_Cell.default, {
                flex: 'min-width',
              }),
            childrenSliced,
          );
        },
      },
    ]);
    return FooterRow;
  })(_react.PureComponent);

var _default = FooterRow;
exports.default = _default;
