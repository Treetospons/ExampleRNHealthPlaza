module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '~/components': './src/components',
          '~/screens': './src/screens',
          '~/navigations': './src/navigations',
          '~/types': './src/types',
          '~/mock': './src/mock',
        },
      },
    ],
  ],
};
