import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import cx from 'classnames';
import theme from './theme.css';
import omit from 'lodash.omit';
import { Heading4 } from '../typography';

var TitleTab =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(TitleTab, _PureComponent);

    function TitleTab() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, TitleTab);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(TitleTab)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(_assertThisInitialized(_this), 'tabNode', createRef());

      _defineProperty(_assertThisInitialized(_this), 'handleClick', function(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }

        if (event.pageX !== 0 && event.pageY !== 0) {
          _this.blur();
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'blur', function() {
        if (_this.tabNode.current.boxNode.current) {
          _this.tabNode.current.boxNode.current.blur();
        }
      });

      _defineProperty(_assertThisInitialized(_this), 'getPaddingHorizontal', function() {
        var size = _this.props.size;

        switch (size) {
          case 'small':
            return 2;

          case 'medium':
          default:
            return 3;
        }
      });

      return _this;
    }

    _createClass(TitleTab, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            active = _this$props.active,
            children = _this$props.children,
            className = _this$props.className,
            _this$props$counter = _this$props.counter,
            counter = _this$props$counter === void 0 ? null : _this$props$counter,
            others = _objectWithoutProperties(_this$props, ['active', 'children', 'className', 'counter']);

          var classNames = cx(theme['title-tab'], _defineProperty({}, theme['is-active'], active), className);
          var rest = omit(others, ['onClick']);
          return React.createElement(
            Box,
            _extends(
              {
                'data-teamleader-ui': 'title-tab',
                className: classNames,
                paddingHorizontal: this.getPaddingHorizontal(),
                paddingVertical: 4,
                ref: this.tabNode,
                onClick: this.handleClick,
              },
              rest,
            ),
            React.createElement(
              Heading4,
              {
                element: 'span',
              },
              children,
            ),
            counter,
          );
        },
      },
    ]);

    return TitleTab;
  })(PureComponent);

TitleTab.defaultProps = {
  element: 'a',
  active: false,
  size: 'medium',
};
export default TitleTab;
