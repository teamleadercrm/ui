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

var _Row = _interopRequireDefault(require('./Row'));

var _HeaderCell = _interopRequireDefault(require('./HeaderCell'));

var _checkbox = _interopRequireDefault(require('../checkbox'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var HeaderRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(HeaderRow, _PureComponent);

    function HeaderRow() {
      (0, _classCallCheck2.default)(this, HeaderRow);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(HeaderRow).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(HeaderRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            checkboxSize = _this$props.checkboxSize,
            children = _this$props.children,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            onSelectionChange = _this$props.onSelectionChange,
            selected = _this$props.selected,
            selectable = _this$props.selectable,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'checkboxSize',
              'children',
              'sliceFrom',
              'sliceTo',
              'onSelectionChange',
              'selected',
              'selectable',
            ]);
          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = (0, _classnames.default)(_theme.default['header-row'], className);
          return _react.default.createElement(
            _Row.default,
            (0, _extends2.default)(
              {
                backgroundColor: 'neutral',
                className: classNames,
                'data-teamleader-ui': 'datagrid-header-row',
              },
              others,
            ),
            selectable &&
              _react.default.createElement(
                _HeaderCell.default,
                {
                  align: 'center',
                  flex: 'min-width',
                },
                _react.default.createElement(_checkbox.default, {
                  checked: selected,
                  onChange: onSelectionChange,
                  size: checkboxSize,
                }),
              ),
            childrenSliced,
          );
        },
      },
    ]);
    return HeaderRow;
  })(_react.PureComponent);

var _default = HeaderRow;
exports.default = _default;
