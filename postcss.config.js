const path = require('path');

module.exports = ctx => {
  return {
    parser: false,
    map: ctx.env === 'development' ? ctx.map : false,
    from: ctx.from,
    to: ctx.to,
    plugins: {
      'postcss-import': {
        root: __dirname,
        path: [path.join(__dirname, './components')]
      },
      'postcss-pseudoelements': {},
      'postcss-mixins': {},
      'postcss-each': {},
      'postcss-cssnext': {},
      'postcss-nested': {},
      'postcss-reporter': {
        clearMessages: true,
      },
    },
  };
};
