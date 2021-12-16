const pkg = require('../package.json');
const env = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const globals = {
  __DEV__: env === 'development',
  __PROD__: env === 'production',
  __TEST__: env === 'test',
  __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
  __VERSION__: JSON.stringify(pkg.version),
};

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

  if (config.optimization) {
    config.optimization.minimize = false;
  }

  config.plugins.map((plugin) => {
    if (plugin instanceof webpack.DefinePlugin) {
      plugin.definitions = { ...plugin.definitions, 'process.env': globals };
    }
    return plugin;
  });

  // Return the altered config
  return config;
};
