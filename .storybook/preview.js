import { addDecorator, addParameters } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { COLOR } from '../src/constants';

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
    showRoots: true,
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
});

// addon-designs
addDecorator(withDesign());
