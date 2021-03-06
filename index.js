const transform = function(existingConfig, pluggableConfig) {
  const newConfig = existingConfig;
  const cssStringTests = ['/\\.css$/', '/\\.css?$/']
  
  let idx = existingConfig.module.loaders.findIndex(
    x => x.test ? cssStringTests.indexOf(x.test.toString()) !== -1 : false
  );
  
  const urlIdx = existingConfig.module.loaders.findIndex(
    x => x.loader ? x.loader.toString() === 'url' : false
  );

  const urlRules = newConfig.module.loaders[urlIdx]
    ? newConfig.module.loaders[urlIdx]
    : undefined;
    
  if (urlRules) {
    urlRules.exclude.push(/\.s[ca]ss$/);
    newConfig.module.loaders[urlIdx] = urlRules;
  }

  const cssRules = idx ? newConfig.module.loaders[idx] : undefined;

  if (cssRules) {
    cssRules.test = /s?[ca]ss$/;
    if (cssRules.loader) {
      cssRules.loader = cssRules.loader.replace('!postcss', '!postcss!sass');
    }
    if (cssRules.loaders) {
      cssRules.loaders.push(require.resolve('sass-loader'));
    }
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
