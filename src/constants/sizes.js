import without from 'lodash.without';

export const TINY = 'tiny';
export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const FULLSCREEN = 'fullscreen';

export const SIZES = [TINY, SMALL, MEDIUM, LARGE, FULLSCREEN];
export const sizesWithout = (sizesToExclude) => without(SIZES, ...sizesToExclude);
