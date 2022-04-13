const injectDevServer = require('@cypress/react/plugins/load-webpack');

module.exports = (on, config) => {

  if (config.testingType === "component") {
    injectDevServer(on, config, {
      webpackFilename: 'webpack.config.js'
    });
  }

  return config; // IMPORTANT to return a config
}

