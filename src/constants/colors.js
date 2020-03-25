import without from 'lodash.without';

export const COLOR = {
  AQUA: {
    LIGHTEST: '#f2f8ff',
    LIGHT: '#cce4ff',
    NORMAL: '#99c9ff',
    DARK: '#0071f2',
    DARKEST: '#004da6',
  },
  GOLD: {
    LIGHTEST: '#fff6e5',
    LIGHT: '#ffda8f',
    NORMAL: '#ffcc66',
    DARK: '#ed9e00',
    DARKEST: '#8f3c00',
  },
  NEUTRAL: {
    LIGHTEST: '#ffffff',
    LIGHT: '#f7f7fa',
    NORMAL: '#e4e4e6',
    DARK: '#c0c0c4',
    DARKEST: '#82828c',
  },
  MINT: {
    LIGHTEST: '#f0fafa',
    LIGHT: '#57d3d2',
    NORMAL: '#00b2b2',
    DARK: '#008a8c',
    DARKEST: '#004b4d',
  },
  RUBY: {
    LIGHTEST: '#fff0ec',
    LIGHT: '#ffbca6',
    NORMAL: '#ff7040',
    DARK: '#e84b17',
    DARKEST: '#992600',
  },
  TEAL: {
    LIGHTEST: '#f0f5fc',
    LIGHT: '#c1cede',
    NORMAL: '#64788f',
    DARK: '#344b63',
    DARKEST: '#2a3b4d',
  },
  VIOLET: {
    LIGHTEST: '#f7f7ff',
    LIGHT: '#d3d1fe',
    NORMAL: '#928cff',
    DARK: '#6961ff',
    DARKEST: '#130abf',
  },
};

export const COLORS = Object.keys(COLOR).map((key) => key.toLowerCase());
export const TINTS = Object.keys(COLOR[Object.keys(COLOR)[0]]).map((key) => key.toLowerCase());

export const colorsWithout = (colorsToExclude) => without(COLORS, ...colorsToExclude);
export const tintsWithout = (tintsToExclude) => without(TINTS, ...tintsToExclude);
