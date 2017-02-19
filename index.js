const transform = function(existingConfig, pluggableConfig) {
  /*  Transform plugin config in this function.
  
      The default current webpack config is stored in the existingConfig
      variable.
      Any custom configs are pulled from <AppRoot>/.pluggable/<thispluginname.js>
      and stored in the pluggableConfig variable.
      
      Make sure the return the modified config from this function.
      Set module.exports.development and module.exports.production to true or
      false to determine whether this plugin should be injected into the
      corresponding environment's webpack config.
  */
  const newConfig = existingConfig;
  

  
  return newConfig;
};
module.exports = {
  transform: transform,
  development: true,
  production: true
};
