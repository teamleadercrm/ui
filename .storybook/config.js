import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

// addon-info
setDefaults({
  header: false,
  inline: false,
  source: true,
  propTablesExclude: [],
  styles: stylesheet => {
    stylesheet.link.topRight.zIndex = 99999999;
    return stylesheet;
  }
});

const req = require.context('../stories', true, /\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
