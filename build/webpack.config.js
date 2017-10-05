const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');
const debug = require('debug')('app:webpack:config');
const path = require('path');

const host = config.server_host;
const port = config.server_port;

const paths = config.utils_paths;
const __DEV__ = config.globals.__DEV__;
const __PROD__ = config.globals.__PROD__;
const __TEST__ = config.globals.__TEST__;

debug('Creating configuration.');
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    modules: [ paths.client(), 'node_modules' ],
    extensions: [ '.js', '.jsx', '.json' ]
  },
  module: {}
};
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY = paths.client('index.js');
const WEBPACK_HMR_ENTRY = `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`;

webpackConfig.entry = {
  app: __DEV__
    ? [ 'react-hot-loader/patch', APP_ENTRY, WEBPACK_HMR_ENTRY ]
    : [ APP_ENTRY ],
};

if (config.compiler_vendors.length) {
  webpackConfig.entry.vendor = config.compiler_vendors;
}

// ------------------------------------
// Bundle Output
// ------------------------------------
const filename = config.compiler_hash_type ? `[name].[${config.compiler_hash_type}].js` : '[name].js';

webpackConfig.output = {
  filename,
  path: paths.dist(),
  publicPath: config.compiler_public_path
};

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: paths.client('index.html'),
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
];

if (__DEV__) {
  debug('Enable plugins for live development (HMR, NoErrors).');
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()

  );
} else if (__PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).');
  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: [ 'vendor' ]
    })
  );
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.rules = [ {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}, {
  test: /\.json$/,
  loader: 'json-loader'
} ];

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = 'css-loader?sourceMap&-minimize';

// Add any packge names here whose styles need to be treated as CSS modules.
// These paths will be combined into a single regex.
const PATHS_TO_TREAT_AS_CSS_MODULES = [
  'components',
  'lib'
];

// If config has CSS modules enabled, treat this project's styles as CSS modules.
if (config.compiler_css_modules) {
  PATHS_TO_TREAT_AS_CSS_MODULES.push(
    paths.client().replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&') // eslint-disable-line
  );
}

const isUsingCSSModules = !!PATHS_TO_TREAT_AS_CSS_MODULES.length;
const cssModulesRegex = new RegExp(`(${PATHS_TO_TREAT_AS_CSS_MODULES.join('|')})`);

if (isUsingCSSModules) {
  const cssModulesLoader = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    (__DEV__) ? 'localIdentName=[name]__[local]___[hash:base64:5]' : 'localIdentName=[hash:base64:7]'
  ].join('&');

  webpackConfig.module.rules.push({
    test: /\.css$/,
    include: cssModulesRegex,
    use: [
      'style-loader',
      cssModulesLoader,
      'postcss-loader'
    ]
  });
}

// Loaders for files that should not be treated as CSS modules.
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false;
webpackConfig.module.rules.push({
  test: /\.css$/,
  exclude: excludeCSSModules,
  use: [
    'style',
    BASE_CSS_LOADER,
    'postcss-loader'
  ]
});

// File loaders
/* eslint-disable */
webpackConfig.module.rules.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff',
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2',
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype',
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream',
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]',
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml',
  },
  {
    test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192',
  }
);
/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Apply ExtractTextPlugin to CSS loaders.');
  webpackConfig.module.rules.filter((rule) =>
    rule.use && rule.use.find((name) => /css/.test(name.split('?')[ 0 ]))
  ).forEach((rule) => {
    const fallback = rule.use[ 0 ];
    const rest = rule.use.slice(1);
    rule.loader = ExtractTextPlugin.extract({fallback, use: rest.join('!')});
    delete rule.use;
  });

  const filename = config.compiler_hash_type ? `[name].[${config.compiler_hash_type}].css` : '[name].css';

  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename,
      allChunks: true,
    })
  );
}

module.exports = webpackConfig;
