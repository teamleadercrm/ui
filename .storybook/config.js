import { centerStyles } from './styles';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from '@storybook/addon-options';
import backgroundColor from 'react-storybook-decorator-background';
import PropTable from '../stories/components/propTable';
import styles from '@sambego/storybook-styles';

// addon-info
addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: stylesheet => {
      stylesheet.infoBody = {
        color: '#2a3b4d',
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
          color: '#82828c',
          fontFamily: 'Inter-UI-Medium',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '24px',
          margin: '24px 0 10px 0',
        },
        body: {
          borderBottom: '1px solid #c0c0c4',
          paddingTop: 10,
          marginBottom: 10,
        },
      };

      stylesheet.source = {
        h1: {
          borderBottom: '1px solid #c0c0c4',
          color: '#82828c',
          fontFamily: 'Inter-UI-Medium',
          margin: '24px 0 10px 0',
          fontWeight: 500,
          fontSize: '18px',
          lineHeight: '24px',
          padding: '12px 0',
        },
      };

      stylesheet.propTableHead = {
        color: '#344b63',
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

// addon-options
addDecorator(
  withOptions({
    addonPanelInRight: true,
    enableShortcuts: false,
    name: 'Teamleader',
    url: 'https://teamleader.design',
  }),
);

// addon-styles
addDecorator(styles({ ...centerStyles }));

// addon-background
addDecorator(backgroundColor(['#ffffff', '#e6f2ff', '#ffeecc', '#d3f3f3', '#ffe3d9', '#e1edfa', '#f1f0ff', '#2a3b4d']));

const req = require.context('../stories', true, /\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
