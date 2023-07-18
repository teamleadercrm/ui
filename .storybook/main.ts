const chromaticTestStories = ['../src/**/__tests__/*.stories.@(tsx|mdx)'];
const storybookStories = ['./**/*.stories.@(tsx|mdx)', '../src/components/*/*.stories.@(tsx|mdx)'];
module.exports = {
  stories: process.env.CHROMATIC ? chromaticTestStories : storybookStories,
  addons: [
    '@storybook/addon-backgrounds',
    '@storybook/addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require('postcss'),
        },
        cssModules: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  features: {
    // Use babel config from project root .babelrc file
    babelModeV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
