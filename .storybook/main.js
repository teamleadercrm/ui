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
      },
    },
  ],
};
