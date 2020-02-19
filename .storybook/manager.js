import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import { COLOR } from '../src/constants';
import pkg from '../package';

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: `UI Version ${pkg.version}`,
    colorPrimary: COLOR.TEAL.DARKEST,
    colorSecondary: COLOR.MINT.NORMAL,
    textColor: COLOR.TEAL.DARKEST,
  }),
});
