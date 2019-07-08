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

var _theme = _interopRequireDefault(require('./theme.css'));

var _Cell = _interopRequireDefault(require('./Cell'));

var _icon = _interopRequireDefault(require('../icon'));

var _classnames = _interopRequireDefault(require('classnames'));

var _uiIcons = require('@teamleader/ui-icons');

var HeaderCell =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(HeaderCell, _PureComponent);

    function HeaderCell() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, HeaderCell);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(
        this,
        (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HeaderCell)).call.apply(
          _getPrototypeOf2,
          [this].concat(args),
        ),
      );
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), 'renderSortedIndicators', function() {
        var sorted = _this.props.sorted;

        if (sorted === 'asc') {
          return _react.default.createElement(_uiIcons.IconChevronUpSmallOutline, null);
        }

        if (sorted === 'desc') {
          return _react.default.createElement(_uiIcons.IconChevronDownSmallOutline, null);
        }

        if (!sorted) {
          return _react.default.createElement(_uiIcons.IconSortSmallOutline, null);
        }

        return null;
      });
      return _this;
    }

    (0, _createClass2.default)(HeaderCell, [
      {
        key: 'render',
        value: function render() {
          var _cx;

          var _this$props = this.props,
            children = _this$props.children,
            className = _this$props.className,
            onClick = _this$props.onClick,
            sorted = _this$props.sorted,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'children',
              'className',
              'onClick',
              'sorted',
            ]);
          var classNames = (0, _classnames.default)(
            _theme.default['header-cell'],
            ((_cx = {}),
            (0, _defineProperty2.default)(_cx, _theme.default['is-sortable'], onClick),
            (0, _defineProperty2.default)(_cx, _theme.default['is-sorted'], sorted === 'asc' || sorted === 'desc'),
            _cx),
            className,
          );
          return _react.default.createElement(
            _Cell.default,
            (0, _extends2.default)(
              {
                className: classNames,
                onClick: onClick,
              },
              others,
              {
                preventOverflow: false,
              },
            ),
            _react.default.createElement(
              'span',
              {
                className: _theme.default['has-overflow-prevention'],
              },
              children,
            ),
            _react.default.createElement(_icon.default, null, this.renderSortedIndicators()),
          );
        },
      },
    ]);
    return HeaderCell;
  })(_react.PureComponent);

HeaderCell.defaultProps = {
  sorted: 'none',
};
var _default = HeaderCell;
exports.default = _default;
