

// oh suh webpack

// put my fucking project together because i have no idea how to build it without you!
const { resolve } = require('path')

module.exports = () => {
  return {
    context: resolve('src'),
    entry: './ClientApp.js',
    output: {
      filename: './dist/bundle.js'
    }
  }
}
