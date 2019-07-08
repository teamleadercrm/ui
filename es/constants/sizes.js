import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import without from 'lodash.without';
export var TINY = 'tiny';
export var SMALL = 'small';
export var MEDIUM = 'medium';
export var LARGE = 'large';
export var FULLSCREEN = 'fullscreen';
export var SIZES = [TINY, SMALL, MEDIUM, LARGE, FULLSCREEN];
export var sizesWithout = function sizesWithout(sizesToExclude) {
  return without.apply(void 0, [SIZES].concat(_toConsumableArray(sizesToExclude)));
};
