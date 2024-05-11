const { override, addWebpackConfig } = require('customize-cra');

module.exports = override(
  addWebpackConfig({
    devServer: {
      allowedHosts: ['localhost', 'your.domain.com'],
    },
  })
);