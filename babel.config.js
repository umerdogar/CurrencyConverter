module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@styles': './src/styles',
            '@components': './src/components',
            '@screens': './src/screens',
            '@api': './src/api',
            '@storage': './src/storage',
            '@hooks': './src/hooks',
            '@appTypes': './src/types',
            '@utils': './src/utils',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};