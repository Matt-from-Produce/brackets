var _ = require('lodash')

// default config
var config = {
  dev: 'dev',
  prod: 'prod',
  test: 'test',
  port: process.env.PORT || 3000
}

// check to see if NODE_ENV was set if not, set to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev

// actually set it in the config object
config.env = process.env.NODE_ENV

var envConfig

try {
  envConfig = require('./' + config.env)
  // making sure require actually got something back
  envConfig = envConfig || {}
} catch(e) {
  envConfig = {}
}

module.exports = _.merge(config, envConfig)
