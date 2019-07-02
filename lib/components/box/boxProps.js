'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', { value: !0 }),
  (exports.pickBoxProps = exports.omitBoxProps = exports.default = void 0);
var _lodash = _interopRequireDefault(require('lodash.omit')),
  _lodash2 = _interopRequireDefault(require('lodash.pick')),
  boxProps = [
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
  ],
  omitBoxProps = function(e) {
    return (0, _lodash.default)(e, boxProps);
  };
exports.omitBoxProps = omitBoxProps;
var pickBoxProps = function(e) {
  return (0, _lodash2.default)(e, boxProps);
};
exports.pickBoxProps = pickBoxProps;
var _default = boxProps;
exports.default = _default;
