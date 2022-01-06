import { addDecorator, addParameters } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { COLOR } from '../src/constants';

import theme from './theme';
import {
  ABOUT_AHOY,
  CHANGELOG,
  COMPOSITIONS,
  FOUNDATION,
  LOW_LEVEL_BLOCKS,
  MARKETING,
  MID_LEVEL_BLOCKS,
  PLAYGROUND,
} from './utils';

addParameters({
  backgrounds: {
    values: [
      { name: 'Aqua lightest', value: COLOR.AQUA.LIGHTEST },
      { name: 'Neutral light', value: COLOR.NEUTRAL.LIGHT },
      { name: 'Gold lightest', value: COLOR.GOLD.LIGHTEST },
      { name: 'Mint lightest', value: COLOR.MINT.LIGHTEST },
      { name: 'Ruby lightest', value: COLOR.RUBY.LIGHTEST },
      { name: 'Teal lightest', value: COLOR.TEAL.LIGHTEST },
      { name: 'Violet lightest', value: COLOR.VIOLET.LIGHTEST },
      { name: 'Teal darkest', value: COLOR.TEAL.DARKEST },
    ],
  },
});

addParameters({
  options: {
    storySort: {
      order: [
        ABOUT_AHOY,
        CHANGELOG,
        FOUNDATION,
        LOW_LEVEL_BLOCKS,
        MID_LEVEL_BLOCKS,
        COMPOSITIONS,
        MARKETING,
        PLAYGROUND,
      ],
    },
  },
});

addParameters({
  docs: {
    theme,
  },
});

addParameters({
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: process.env.STORYBOOK_HIDE_CANVAS_TAB === 'true',
    },
    'storybook/docs/panel': {
      hidden: process.env.STORYBOOK_HIDE_DOCS_TAB === 'true',
    },
  },
});

// addon-designs
addDecorator(withDesign());
