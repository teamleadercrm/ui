import { create } from '@storybook/theming';
import { COLOR } from '../src/constants';
import pkg from '../package.json';

export default create({
  base: 'light',
  colorPrimary: COLOR.TEAL.DARKEST,
  colorSecondary: COLOR.MINT.NORMAL,
  textColor: COLOR.TEAL.DARKEST,
  brandTitle: `UI Version ${pkg.version}`,
});
