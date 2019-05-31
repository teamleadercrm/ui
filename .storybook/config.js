import { centerStyles } from './styles';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { COLOR } from '../src/constants';
import PropTable from '../stories/components/propTable';
import styles from '@sambego/storybook-styles';
import teamleaderTheme from './teamleaderTheme';

// global parameters
addParameters({
  options: {
    panelPosition: 'right',
    enableShortcuts: false,
    theme: teamleaderTheme,
    url: 'https://teamleader.design',
  },
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

// addon-info
addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: stylesheet => {
      stylesheet.infoBody = {
        color: COLOR.TEAL.DARKEST,
        fontFamily: 'Inter-UI-Regular',
        fontSize: '14px',
        margin: '48px 0',
        padding: '0',
      };

      stylesheet.header = {
        h1: {
          fontFamily: 'Inter-UI-Medium',
          fontSize: '24px',
          fontWeight: 500,
          lineHeight: '30px',
          margin: 0,
        },
        h2: {
          color: COLOR.NEUTRAL.DARKEST,
          fontFamily: 'Inter-UI-Medium',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '24px',
          margin: '24px 0 10px 0',
        },
        body: {
          borderBottom: `1px solid ${COLOR.NEUTRAL.NORMAL}`,
          paddingTop: 10,
          marginBottom: 10,
        },
      };

      stylesheet.source = {
        h1: {
          borderBottom: `1px solid ${COLOR.NEUTRAL.NORMAL}`,
          color: COLOR.NEUTRAL.DARKEST,
          fontFamily: 'Inter-UI-Medium',
          margin: '24px 0 10px 0',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '24px',
          padding: '12px 0',
        },
      };

      stylesheet.propTableHead = {
        color: COLOR.TEAL.DARKEST,
        fontFamily: 'Inter-UI-Medium',
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

// addon-knobs
addDecorator(withKnobs);

// addon-styles
addDecorator(styles({ ...centerStyles }));

const req = require.context('../stories', true, /\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
