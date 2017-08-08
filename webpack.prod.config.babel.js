
// hey webpack

const { resolve } = require('path')

module.exports = () => {
  return {
    context: resolve('src'),
    entry: './js/ClientApp.js',
    output: {
      path: resolve('dist'),
      filename: './bundle.js',
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js']
    },
    devServer: {
      historyApiFallback: true
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    devtool: 'source-map'
    module: {
      loaders: [
        {enforce: 'pre', test: /\.js$/, loaders: ['eslint-loader'], exclude: /node_modules/},
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
      ]
    }
  }
}
