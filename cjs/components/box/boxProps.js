'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.pickBoxProps = exports.omitBoxProps = exports.default = void 0;

var _lodash = _interopRequireDefault(require('lodash.omit'));

var _lodash2 = _interopRequireDefault(require('lodash.pick'));

var boxProps = [
  'alignContent',
  'alignItems',
  'alignSelf',
  'boxSizing',
  'children',
  'className',
  'display',
  'element',
  'flex',
  'flexBasis',
  'flexDirection',
  'flexGrow',
  'flexShrink',
  'flexWrap',
  'justifyContent',
  'margin',
  'marginHorizontal',
  'marginVertical',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'order',
  'overflow',
  'overflowX',
  'overflowY',
  'padding',
  'paddingHorizontal',
  'paddingVertical',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
];

var omitBoxProps = function omitBoxProps(props) {
  return (0, _lodash.default)(props, boxProps);
};

exports.omitBoxProps = omitBoxProps;

var pickBoxProps = function pickBoxProps(props) {
  return (0, _lodash2.default)(props, boxProps);
};

exports.pickBoxProps = pickBoxProps;
var _default = boxProps;
exports.default = _default;
