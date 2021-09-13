// eslint-disable-next-line no-undef
module.exports = {
  targets: {
    node: '12',
  },
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
  // plugins: ['babel-plugin-add-import-extension'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'auto',
          },
        ],
      ],
    },
  },
};
