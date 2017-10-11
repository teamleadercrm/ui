import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

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
setOptions({
  name: `Version ${process.env.__VERSION__}`,
  url: 'http://teamleader.design'
});

const req = require.context('../stories', true, /\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
