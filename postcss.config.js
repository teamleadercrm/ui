const path = require('path');

module.exports = ({ file, options, env }) => {
  return {
    plugins: {
      'postcss-import': {
        root: './',
        path: [path.join(__dirname, './src/components')],
      },
      '@csstools/postcss-global-data': {
        files: ['./node_modules/@teamleader/ui-utilities/index.css'],
      },
      'postcss-pseudoelements': {},
      'postcss-each': {},
      'postcss-nested': {},
      'postcss-custom-media': {},
      'postcss-reporter': {},
      'postcss-preset-env': {
        preserve: false,
        features: {
          'custom-properties': false,
        },
      },
    },
  };
};
