import { addParameters } from '@storybook/react';
import { COLOR } from '../src/constants';

addParameters({
  backgrounds: [
    { name: 'Aqua lightest', value: COLOR.AQUA.LIGHTEST },
    { name: 'Neutral', value: COLOR.NEUTRAL.NORMAL },
    { name: 'Gold lightest', value: COLOR.GOLD.LIGHTEST },
    { name: 'Mint lightest', value: COLOR.MINT.LIGHTEST },
    { name: 'Ruby lightest', value: COLOR.RUBY.LIGHTEST },
    { name: 'Teal lightest', value: COLOR.TEAL.LIGHTEST },
    { name: 'Violet lightest', value: COLOR.VIOLET.LIGHTEST },
    { name: 'Teal darkest', value: COLOR.TEAL.DARKEST },
  ],
});
