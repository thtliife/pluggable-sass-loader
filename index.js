const transform = function(existingConfig, pluggableConfig) {
  const newConfig = existingConfig;

  const idx = existingConfig.module.loaders.findIndex(
    x => x.test ? x.test.toString() === '/\\.css$/' : false
  );

  const cssRules = idx ? newConfig.module.loaders[idx] : undefined;

  if (cssRules) {
    cssRules.test = /s?[ca]ss$/;
    cssRules.loader = cssRules.loader.replace('!postcss', '!postcss!sass');
    if (pluggableConfig) {
      newConfig.module.sassLoader = pluggableConfig.options;
    }
  }

  return newConfig;
};
module.exports = {
  transform: transform,
  development: true,
  production: true
};
