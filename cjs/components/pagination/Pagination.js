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

var _typography = require('../typography');

var _uiIcons = require('@teamleader/ui-icons');

var _classnames = _interopRequireDefault(require('classnames'));

var _theme = _interopRequireDefault(require('./theme.css'));

var Pagination =
  /*#__PURE__*/
  (function(_PureComponent) {
    (0, _inherits2.default)(Pagination, _PureComponent);

    function Pagination() {
      (0, _classCallCheck2.default)(this, Pagination);
      return (0, _possibleConstructorReturn2.default)(
        this,
        (0, _getPrototypeOf2.default)(Pagination).apply(this, arguments),
      );
    }

    (0, _createClass2.default)(Pagination, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            currentPage = _this$props.currentPage,
            inverse = _this$props.inverse,
            maxNumPagesVisible = _this$props.maxNumPagesVisible,
            nextPageText = _this$props.nextPageText,
            numPages = _this$props.numPages,
            prevPageText = _this$props.prevPageText,
            children = _this$props.children,
            others = (0, _objectWithoutProperties2.default)(_this$props, [
              'className',
              'currentPage',
              'inverse',
              'maxNumPagesVisible',
              'nextPageText',
              'numPages',
              'prevPageText',
              'children',
            ]);

          if (numPages < 2) {
            return null;
          }

          var classNames = (0, _classnames.default)(
            _theme.default['pagination'],
            (0, _defineProperty2.default)({}, _theme.default['is-inverse'], inverse),
            className,
          );
          var iterator = [currentPage];
          var counter = 0;

          while (iterator.length < maxNumPagesVisible && iterator.length < numPages) {
            if (counter % 2 === 0 && iterator[0] !== 1) {
              iterator.unshift(iterator[0] - 1);
            } else if (counter % 2 === 1 && iterator[iterator.length - 1] !== numPages) {
              iterator.push(iterator[iterator.length - 1] + 1);
            }

            counter++;
          } // make sure the first and the last item are the first and the last page

          iterator[0] = 1;
          iterator[iterator.length - 1] = numPages; // should we replace the 2nd and 2nd last by ellipsis?

          if (iterator.length > 1 && iterator[1] !== 2) {
            iterator[1] = 'ellipsis-left';
          }

          if (iterator.length > 1 && iterator[iterator.length - 2] !== numPages - 1) {
            iterator[iterator.length - 2] = 'ellipsis-right';
          }

          return _react.default.createElement(
            _box.default,
            (0, _extends2.default)(
              {
                'data-teamleader-ui': 'pagination',
                className: classNames,
                element: 'nav',
              },
              others,
            ),
            _react.default.createElement(
              'ul',
              {
                className: _theme.default['list'],
              },
              currentPage > 1 &&
                _react.default.createElement(
                  'li',
                  {
                    className: _theme.default['list-item'],
                  },
                  children({
                    number: currentPage - 1,
                    text: prevPageText,
                    isActive: false,
                    icon: _react.default.createElement(_uiIcons.IconChevronLeftMediumOutline, null),
                    iconPlacement: 'left',
                  }),
                ),
              iterator.map(function(page) {
                var isActive = page === currentPage;
                return _react.default.createElement(
                  'li',
                  {
                    key: page,
                    className: _theme.default['list-item'],
                  },
                  String(page).startsWith('ellipsis')
                    ? _react.default.createElement(
                        _typography.TextBody,
                        {
                          className: _theme.default['ellipsis'],
                          element: 'span',
                        },
                        '...',
                      )
                    : children({
                        number: page,
                        text: page,
                        isActive: isActive,
                        className: isActive ? _theme.default['is-current'] : '',
                      }),
                );
              }),
              currentPage < numPages &&
                _react.default.createElement(
                  'li',
                  {
                    className: _theme.default['list-item'],
                  },
                  children({
                    number: currentPage + 1,
                    text: nextPageText,
                    isActive: false,
                    icon: _react.default.createElement(_uiIcons.IconChevronRightMediumOutline, null),
                    iconPlacement: 'right',
                  }),
                ),
            ),
          );
        },
      },
    ]);
    return Pagination;
  })(_react.PureComponent);

Pagination.defaultProps = {
  currentPage: 1,
  inverse: false,
  maxNumPagesVisible: 7,
};
var _default = Pagination;
exports.default = _default;
