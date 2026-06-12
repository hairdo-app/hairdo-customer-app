module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
            '@app': './src/app',
            '@components': './src/components',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@services': './src/services',
            '@theme': './src/theme',
            '@hooks': './src/hooks',
            '@redux': './src/redux',
            '@utils': './src/utils',
            '@assets': './src/assets',
            '@types': './src/types',
            '@constants': './src/constants'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};