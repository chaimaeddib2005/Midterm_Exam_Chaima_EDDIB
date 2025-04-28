const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    client: {
      webSocketURL: {
        protocol: 'wss',
        hostname: '10.0.10.103',
        port: 8080,
        pathname: '/ws',
      }
    }
  }
};


module.exports = {
  publicPath: "/",
};

