module.exports = {
  stories: ['./**/*.stories.@(js|mdx)', '../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-backgrounds',
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        cssLoaderOptions: {
          sourceMap: true,
          modules: {
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
          importLoaders: 1,
        },
      },
    },
  ],
};
