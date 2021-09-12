module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  typescript: {
    check: false,
    checkOptions: {},
    // temp disable react-docgen-typescript pending https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-850400428
    reactDocgen: 'none',
    // reactDocgen: 'react-docgen-typescript',
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    // },
    webpackFinal: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.fallback,
            assert: require.resolve('assert'),
          },
        },
      };
    },
  },
};
