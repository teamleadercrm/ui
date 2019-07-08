import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import theme from './theme.css';

var LoadingMolecule =
  /*#__PURE__*/
  (function(_PureComponent) {
    _inherits(LoadingMolecule, _PureComponent);

    function LoadingMolecule() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LoadingMolecule);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(
        this,
        (_getPrototypeOf2 = _getPrototypeOf(LoadingMolecule)).call.apply(_getPrototypeOf2, [this].concat(args)),
      );

      _defineProperty(
        _assertThisInitialized(_this),
        'randomGradientPostFix',
        Math.random()
          .toString(16)
          .slice(2),
      );

      return _this;
    }

    _createClass(LoadingMolecule, [
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            className = _this$props.className,
            basePath = _this$props.basePath,
            startColor = _this$props.startColor,
            stopColor = _this$props.stopColor,
            type = _this$props.type,
            others = _objectWithoutProperties(_this$props, [
              'className',
              'basePath',
              'startColor',
              'stopColor',
              'type',
            ]);

          var classNames = cx(theme['loading-molecule'], theme[type], className);
          var gradient1Name = 'linearGradient-1-'.concat(this.randomGradientPostFix);
          var gradient2Name = 'linearGradient-2-'.concat(this.randomGradientPostFix);
          var grandient1Source = 'url('.concat(basePath, '#').concat(gradient1Name, ')');
          var grandient2Source = 'url('.concat(basePath, '#').concat(gradient2Name, ')');
          return React.createElement(
            'div',
            _extends(
              {
                'data-teamleader-ui': 'loading-molecule',
                className: classNames,
              },
              others,
            ),
            React.createElement(
              'svg',
              {
                className: 'loader',
                width: '100px',
                height: '56px',
                version: '1.1',
              },
              React.createElement(
                'defs',
                null,
                React.createElement(
                  'linearGradient',
                  {
                    x1: '63.2191022%',
                    y1: '50%',
                    x2: '21.8036493%',
                    y2: '115.713387%',
                    id: gradient1Name,
                  },
                  React.createElement('stop', {
                    stopColor: startColor,
                    offset: '0%',
                  }),
                  React.createElement('stop', {
                    stopColor: stopColor,
                    offset: '100%',
                  }),
                ),
                React.createElement(
                  'linearGradient',
                  {
                    x1: '63.2191002%',
                    y1: '50%',
                    x2: '63.2191002%',
                    y2: '0%',
                    id: gradient2Name,
                  },
                  React.createElement('stop', {
                    stopColor: startColor,
                    offset: '0%',
                  }),
                  React.createElement('stop', {
                    stopColor: stopColor,
                    offset: '100%',
                  }),
                ),
              ),
              React.createElement(
                'g',
                {
                  id: 'Content',
                  stroke: 'none',
                  strokeWidth: '1',
                  fill: 'none',
                  fillRule: 'evenodd',
                },
                React.createElement('polyline', {
                  id: 'left-solid',
                  className: theme['left-solid'],
                  fill: startColor,
                  points: '48.1016216 0.241175937 48.1016216 28.1174122 0.0416216216 28.1174122 48.1016216 0.241175937',
                }),
                React.createElement('polyline', {
                  id: 'right-solid',
                  className: theme['right-solid'],
                  fill: startColor,
                  points: '51.7081081 56.0633336 75.747027 42.0745849 51.7081081 0.241175937 51.7081081 56.0633336',
                }),
                React.createElement('polyline', {
                  id: 'right-gradient',
                  className: theme['right-gradient'],
                  fill: grandient1Source,
                  points: '67.7264865 28.1168678 75.747027 42.0745849 99.7772973 28.1168678 67.7264865 28.1168678',
                }),
                React.createElement('polyline', {
                  id: 'left-gradient',
                  className: theme['left-gradient'],
                  fill: grandient2Source,
                  points: '32.0897297 28.1174122 48.1016216 28.1174122 48.0843243 56.0736775 32.0897297 28.1174122',
                }),
              ),
            ),
          );
        },
      },
    ]);

    return LoadingMolecule;
  })(PureComponent);

LoadingMolecule.defaultProps = {
  className: '',
  startColor: '#BABABA',
  stopColor: '#DADADA',
  type: 'normal',
};
export default LoadingMolecule;
