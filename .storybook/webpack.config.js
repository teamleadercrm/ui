const pkg = require('../package.json');
const env = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config }) => {
  // Overwrite some default rules
  // https://github.com/storybooks/storybook/issues/6319#issuecomment-477852640
  config.module.rules = config.module.rules.filter((f) => {
    const ruleTest = f.test && f.test.toString();

    return ruleTest !== '/\\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/';
  });

  config.module.rules.push({
    test: /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
    use: ['file-loader'],
  });

  // Return the altered config
  return config;
};
