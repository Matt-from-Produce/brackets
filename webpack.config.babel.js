
// hey webpack

const { resolve } = require('path')

module.exports = env => {
  return {
    context: resolve('src'),
    entry: './js/ClientApp.js',
    output: {
      path: resolve('dist'),
      filename: './bundle.js',
      publicPath: 'http://localhost:8080/dist/'
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
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
      ]
    }
  }
}
