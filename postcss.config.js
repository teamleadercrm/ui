const path = require('path');

module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      'postcss-import': {
        root: './',
        path: [path.join(__dirname, './src/components')],
      },
      'postcss-pseudoelements': {},
      'postcss-mixins': {},
      'postcss-each': {},
      'postcss-preset-env': {
        stage: false,
        customProperties: true,
      },
      'postcss-nested': {},
      'postcss-reporter': {
        clearMessages: true,
      },
      cssnano: env === 'production',
    },
  };
};
