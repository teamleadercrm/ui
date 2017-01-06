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
const __STAGING__ = config.globals.__STAGING__;
const __TEST__ = config.globals.__TEST__;

debug('Creating configuration.');
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    root: paths.client(),
    extensions: [ '', '.js', '.jsx', '.json' ]
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
  vendor: config.compiler_vendors
};

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
    new webpack.NoErrorsPlugin()
  );
} else if (__STAGING__ || __PROD__) {
  debug('Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).');
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
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
webpackConfig.module.loaders = [ {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: config.compiler_babel
}, {
  test: /\.json$/,
  loader: 'json'
} ];

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = 'css?sourceMap&-minimize';

// Add any packge names here whose styles need to be treated as CSS modules.
// These paths will be combined into a single regex.
const PATHS_TO_TREAT_AS_CSS_MODULES = [
  // 'react-toolbox', (example)
  'components'
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
    (__DEV__ || __STAGING__) ? 'localIdentName=[name]__[local]___[hash:base64:5]' : 'localIdentName=[hash:base64:7]'
  ].join('&');

  webpackConfig.module.loaders.push({
    test: /\.css$/,
    include: cssModulesRegex,
    loaders: [
      'style',
      cssModulesLoader,
      'postcss'
    ]
  });
}

// Loaders for files that should not be treated as CSS modules.
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false;
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: excludeCSSModules,
  loaders: [
    'style',
    BASE_CSS_LOADER,
    'postcss'
  ]
});

// ------------------------------------
// Style Configuration
// ------------------------------------
webpackConfig.sassLoader = {
  includePaths: paths.client('styles')
};

webpackConfig.postcss = () => {
  return [
    require('postcss-import')({
      root: __dirname,
      path: [path.join(__dirname, './components')]
    }),
    require('postcss-mixins')(),
    require('postcss-each')(),
    require('postcss-cssnext')(),
    require('postcss-reporter')({ clearMessages: true })
  ];
};

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {test: /\.otf(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'},
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {test: /\.eot(\?.*)?$/, loader: 'file?prefix=fonts/&name=[path][name].[ext]'},
  {test: /\.svg(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'},
  {test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
);
/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__ && !__STAGING__) {
  debug('Apply ExtractTextPlugin to CSS loaders.');
  webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[ 0 ]))
  ).forEach((loader) => {
    const first = loader.loaders[ 0 ];
    const rest = loader.loaders.slice(1);
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
    delete loader.loaders;
  });

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  );
}

module.exports = webpackConfig;
