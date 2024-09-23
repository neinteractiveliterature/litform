import { dirname, join } from 'path';
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@storybook/addon-mdx-gfm'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],

  typescript: {
    check: false,
    checkOptions: {},
    // temp disable react-docgen-typescript pending https://github.com/styleguidist/react-docgen-typescript/issues/356#issuecomment-850400428
    // reactDocgen: 'none',
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      include: ['**/*.tsx', '**/.yarn/__virtual__/**/*.tsx'],
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
    reactOptions: {
      strictMode: true,
    },
    webpackFinal: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          fallback: {
            ...config.fallback,
            assert: require.resolve('assert'),
            util: require.resolve('util'),
          },
        },
      };
    },
  },

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
