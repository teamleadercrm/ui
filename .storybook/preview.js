import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { COLOR } from '../src/constants';
import styles from '@sambego/storybook-styles';
import PropTable from './components/propTable';

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

addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
});

// addon-info
addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: stylesheet => {
      stylesheet.infoBody = {
        color: COLOR.TEAL.DARKEST,
        fontFamily: 'Inter-Regular',
        fontSize: '14px',
        margin: '24px 0',
        padding: '0',
      };

      stylesheet.header = {
        h1: {
          fontFamily: 'Inter-Medium',
          fontSize: '24px',
          fontWeight: 500,
          lineHeight: '30px',
          margin: 0,
        },
        h2: {
          color: COLOR.NEUTRAL.DARKEST,
          fontFamily: 'Inter-Medium',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '24px',
          margin: '24px 0 10px 0',
        },
        body: {
          paddingTop: 10,
          marginBottom: 10,
        },
      };

      stylesheet.source = {
        h1: {
          color: COLOR.NEUTRAL.DARKEST,
          fontFamily: 'Inter-Medium',
          margin: '24px 0 10px 0',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '24px',
          padding: '12px 0',
        },
      };

      stylesheet.propTableHead = {
        color: COLOR.TEAL.DARKEST,
        fontFamily: 'Inter-Medium',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '21px',
        margin: '20px 0 0 0',
      };

      return stylesheet;
    },
    TableComponent: PropTable,
  }),
);

// addon-styles
addDecorator(
  styles({
    margin: '24px auto',
    maxWidth: '90%',
  }),
);
