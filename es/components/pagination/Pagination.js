import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/inherits';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import { TextBody } from '../typography';
import { IconChevronLeftMediumOutline, IconChevronRightMediumOutline } from '@teamleader/ui-icons';
import cx from 'classnames';
import theme from './theme.css';

var Pagination =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(Pagination, _PureComponent);

    function Pagination() {
      _classCallCheck(this, Pagination);

      return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
    }

    _createClass(Pagination, [
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
            others = _objectWithoutProperties(_this$props, [
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

          var classNames = cx(theme['pagination'], _defineProperty({}, theme['is-inverse'], inverse), className);
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

          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'pagination',
                className: classNames,
                element: 'nav',
              },
              others,
            ),
            React.createElement(
              'ul',
              {
                className: theme['list'],
              },
              currentPage > 1 &&
                React.createElement(
                  'li',
                  {
                    className: theme['list-item'],
                  },
                  children({
                    number: currentPage - 1,
                    text: prevPageText,
                    isActive: false,
                    icon: React.createElement(IconChevronLeftMediumOutline, null),
                    iconPlacement: 'left',
                  }),
                ),
              iterator.map(function(page) {
                var isActive = page === currentPage;
                return React.createElement(
                  'li',
                  {
                    key: page,
                    className: theme['list-item'],
                  },
                  String(page).startsWith('ellipsis')
                    ? React.createElement(
                        TextBody,
                        {
                          className: theme['ellipsis'],
                          element: 'span',
                        },
                        '...',
                      )
                    : children({
                        number: page,
                        text: page,
                        isActive: isActive,
                        className: isActive ? theme['is-current'] : '',
                      }),
                );
              }),
              currentPage < numPages &&
                React.createElement(
                  'li',
                  {
                    className: theme['list-item'],
                  },
                  children({
                    number: currentPage + 1,
                    text: nextPageText,
                    isActive: false,
                    icon: React.createElement(IconChevronRightMediumOutline, null),
                    iconPlacement: 'right',
                  }),
                ),
            ),
          );
        },
      },
    ]);

    return Pagination;
  })(PureComponent);

Pagination.defaultProps = {
  currentPage: 1,
  inverse: false,
  maxNumPagesVisible: 7,
};
export default Pagination;
