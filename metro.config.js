const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      app: path.resolve(__dirname, 'src'),
    },
  },
  watchFolders: [path.resolve(__dirname, 'src')],
};

module.exports = mergeConfig(defaultConfig, config);