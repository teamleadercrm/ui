'use strict';
var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends')),
  _objectWithoutProperties2 = _interopRequireDefault(require('@babel/runtime/helpers/objectWithoutProperties')),
  _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck')),
  _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass')),
  _possibleConstructorReturn2 = _interopRequireDefault(require('@babel/runtime/helpers/possibleConstructorReturn')),
  _getPrototypeOf3 = _interopRequireDefault(require('@babel/runtime/helpers/getPrototypeOf')),
  _assertThisInitialized2 = _interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),
  _inherits2 = _interopRequireDefault(require('@babel/runtime/helpers/inherits')),
  _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),
  _react = _interopRequireWildcard(require('react')),
  _propTypes = _interopRequireDefault(require('prop-types')),
  _Cell = _interopRequireDefault(require('./Cell')),
  _checkbox = _interopRequireDefault(require('../checkbox')),
  _Row = _interopRequireDefault(require('./Row')),
  _classnames = _interopRequireDefault(require('classnames')),
  _theme = _interopRequireDefault(require('./theme.css')),
  allowedParentNodes = ['datagrid-body-row', 'datagrid-cell'],
  BodyRow = (function(e) {
    function a() {
      var e, t;
      (0, _classCallCheck2.default)(this, a);
      for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
      return (
        (t = (0, _possibleConstructorReturn2.default)(
          this,
          (e = (0, _getPrototypeOf3.default)(a)).call.apply(e, [this].concat(i)),
        )),
        (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(t), 'handleClick', function(e) {
          if (allowedParentNodes.includes(e.target.parentNode.dataset.teamleaderUi)) {
            var r = t.props.onClick;
            r && r(e);
          }
        }),
        t
      );
    }
    return (
      (0, _inherits2.default)(a, e),
      (0, _createClass2.default)(a, [
        {
          key: 'render',
          value: function() {
            var e = this.props,
              r = e.className,
              t = e.checkboxSize,
              i = e.children,
              l = e.hovered,
              a = e.sliceFrom,
              u = e.sliceTo,
              o = e.onClick,
              n = e.onSelectionChange,
              s = e.selected,
              c = e.selectable,
              d = (0, _objectWithoutProperties2.default)(e, [
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
              ]),
              p = (Array.isArray(i) ? i : [i]).slice(a, u),
              _ = (0, _classnames.default)(
                _theme.default['body-row'],
                (0, _defineProperty2.default)({}, _theme.default['has-pointer-cursor'], o),
                r,
              );
            return _react.default.createElement(
              _Row.default,
              (0, _extends2.default)(
                {
                  backgroundColor: l ? 'neutral' : 'white',
                  className: _,
                  'data-teamleader-ui': 'datagrid-body-row',
                  onClick: this.handleClick,
                },
                d,
              ),
              c &&
                _react.default.createElement(
                  _Cell.default,
                  { align: 'center', flex: 'min-width' },
                  _react.default.createElement(_checkbox.default, { checked: s, onChange: n, size: t }),
                ),
              p,
            );
          },
        },
      ]),
      a
    );
  })(_react.PureComponent),
  _default = BodyRow;
exports.default = _default;
