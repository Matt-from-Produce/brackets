

// oh suh webpack

// put my fucking project together because i have no idea how to build it without you!


const { resolve } = require('path')

module.exports = env => {
  return {
    context: resolve('src'),
    entry: './ClientApp.js',
    output: {
      path: resolve('dist'),
      filename: './bundle.js',
      publicPath: '/dist/'
    },
    devtool : env.prod ? 'source-map' : 'eval',
    module: {
      loaders: [
         // transpile all js (except node packages), uses regex
        {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
        // TODO css loaded in js first via css-loader, then that js injected into dom at runtime with style-loader (injects style tags)
        // {test: /\.css$/, loaders: ['style-loader', 'css-loader']}
      ]
    }
  }
}
