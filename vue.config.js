const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/reaction-timer-app/' : '/',
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 3000
  }
})
