import { Preview } from '@storybook/react';
import { COLOR } from '../src/constants';
import '../src/index.css';

import theme from './theme';

const preview: Preview = {
  parameters: {
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
    options: {
      storySort: {
        order: [
          'About Ahoy',
          'Changelog',
          'Foundation',
          'Low level blocks',
          'Mid level blocks',
          'Compositions',
          'Marketing',
          'Playground',
        ],
      },
    },
    docs: {
      theme,
      /**
       * @todo temporary workaround to avoid JSDOC parameters from being rendered
       * remove once there are no longer any @type annotations in any javascript files
       */
      description: {
        component: ' ',
      },
    },
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: process.env.STORYBOOK_HIDE_CANVAS_TAB === 'true',
      },
      'storybook/docs/panel': {
        hidden: process.env.STORYBOOK_HIDE_DOCS_TAB === 'true',
      },
    },
  },
};

export default preview;
