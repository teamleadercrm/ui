const path = require('path');

module.exports = ctx => {
  return {
    parser: false,
    map: ctx.env === 'development' ? ctx.map : false,
    from: ctx.from,
    to: ctx.to,
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
};
