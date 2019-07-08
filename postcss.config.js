const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      root: './',
      path: [path.join(__dirname, './src/components')],
    },
    'postcss-pseudoelements': {},
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-cssnext': {
      features: {
        customProperties: {
          warnings: false,
        },
      },
    },
    'postcss-nested': {},
    'postcss-reporter': {
      clearMessages: true,
    },
  },
};
