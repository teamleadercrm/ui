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
const cssModulesLoader = [
  'css-loader?sourceMap&-minimize',
  'modules',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]',
].join('&');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', cssModulesLoader, 'postcss-loader'],
  });

  storybookBaseConfig.module.rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          query: {
            hash: 'sha512',
            digest: 'hex',
            name: '[hash].[ext]',
          },
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: true,
            },
            optipng: {
              optimizationLevel: 7,
            },
          },
        },
      },
    ],
  });

  if (storybookBaseConfig.optimization) {
    storybookBaseConfig.optimization.minimize = false;
  }

  storybookBaseConfig.plugins.map(plugin => {
    if (plugin instanceof webpack.DefinePlugin) {
      plugin.definitions = {
        ...plugin.definitions,
        'process.env': globals,
      };
    }
    return plugin;
  });

  // Return the altered config
  return storybookBaseConfig;
};
