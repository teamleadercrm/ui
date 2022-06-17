const chromaticTestStories = ['../src/**/*.stories.spec.@(js|tsx|mdx)'];
const storybookStories = ['./**/*.stories.@(js|tsx|mdx)', '../src/**/*.stories.@(js|tsx|mdx)'];

module.exports = {
  stories: process.env.CHROMATIC ? chromaticTestStories : storybookStories,
  addons: [
    '@storybook/addon-backgrounds',
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-controls',
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
  features: {
    // Use babel config from project root .babelrc file
    babelModeV7: true,
  },
  core: {
    builder: 'webpack5',
  },
};
