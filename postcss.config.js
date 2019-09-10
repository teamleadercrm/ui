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
      'postcss-nested': {},
      'postcss-reporter': {
        clearMessages: true,
      },
      'postcss-preset-env': {
        preserve: false,
        browsers: '>0.5%, ie 11, not op_mini all',
      },
      // @TODO deprecated, a different approach for colors should be used
      'postcss-color-function': {},
      cssnano: env === 'production',
    },
  };
};
