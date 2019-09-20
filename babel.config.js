module.exports = function babelConfig(api) {
  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    ],
  ];
  const presets = ['module:metro-react-native-babel-preset'];
  api.cache(true);

  return { plugins, presets };
};
