import without from 'lodash.without';

export const TINY = 'tiny';
export const SMALLEST = 'smallest';
export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';
export const HERO = 'hero';
export const FULLSCREEN = 'fullscreen';

export const SIZE = { TINY, SMALL, SMALLEST, MEDIUM, LARGE, HERO, FULLSCREEN };
export const SIZES = Object.keys(SIZE).map((key) => key.toLowerCase()) as unknown as Lowercase<keyof typeof SIZE>[];
export const sizesWithout = (sizesToExclude: (typeof SIZES)[number][]) => without(SIZES, ...sizesToExclude);
