
// hey webpack

const { resolve } = require('path')

module.exports = env => {
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
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
        {enforce: 'pre', test: /\.js$/, loaders: ['eslint-loader'], exclude: /node_modules/},
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/}
        // TODO css loaded in js first via css-loader, then that js injected into dom at runtime with style-loader (injects style tags)
        // {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
      ]
    }
  }
}
