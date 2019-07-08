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

var _Cell = _interopRequireDefault(require('./Cell'));

var _checkbox = _interopRequireDefault(require('../checkbox'));

var _Row = _interopRequireDefault(require('./Row'));

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var allowedParentNodes = ['datagrid-body-row', 'datagrid-cell'];

var BodyRow =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(BodyRow, _PureComponent);

    function BodyRow() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, BodyRow);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BodyRow)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'handleClick', function(event) {
        if (allowedParentNodes.includes(event.target.parentNode.dataset.teamleaderUi)) {
          var onClick = _this.props.onClick;
          onClick && onClick(event);
        }
      });
      return _this;
    }

    (0, _createClass2.default)(BodyRow, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            checkboxSize = _this$props.checkboxSize,
            children = _this$props.children,
            hovered = _this$props.hovered,
            sliceFrom = _this$props.sliceFrom,
            sliceTo = _this$props.sliceTo,
            onClick = _this$props.onClick,
            onSelectionChange = _this$props.onSelectionChange,
            selected = _this$props.selected,
            selectable = _this$props.selectable,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'checkboxSize',
              'children',
              'hovered',
              'sliceFrom',
              'sliceTo',
              'onClick',
              'onSelectionChange',
              'selected',
              'selectable',
            ]);
          var childrenArray = Array.isArray(children) ? children : [children];
          var childrenSliced = childrenArray.slice(sliceFrom, sliceTo);
          var classNames = (0, _classnames.default)(
            _theme.default['body-row'],
            (0, _defineProperty2.default)({}, _theme.default['has-pointer-cursor'], onClick),
            className,
          );
          return _react.default.createElement(
            _Row.default,
            (0, _extends2.default)(
              {
                backgroundColor: hovered ? 'neutral' : 'white',
                className: classNames,
                'data-teamleader-ui': 'datagrid-body-row',
                onClick: this.handleClick,
              },
              others,
            ),
            selectable &&
              _react.default.createElement(
                _Cell.default,
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
    return BodyRow;
  })(_react.PureComponent);

var _default = BodyRow;
exports.default = _default;
