import without from 'lodash.without';

export const TINY = 'tiny';
export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const FULLSCREEN = 'fullscreen';

export const SIZE = { TINY, SMALL, MEDIUM, LARGE, FULLSCREEN };
export const SIZES = Object.keys(SIZE).map((key) => key.toLowerCase()) as unknown as Lowercase<keyof typeof SIZE>[];
export const sizesWithout = (sizesToExclude: typeof SIZES[number][]) => without(SIZES, ...sizesToExclude);
