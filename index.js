var config = require('./server/config/config')
var app = require('./server/server')
var logger = require('./server/utils/logger')
var mongoose = require('mongoose')

// get config
var uri = config.uri
var options = {
  user: config.user,
  pass: config.pass
}

// connect to db
mongoose.connect(uri, options).then(
  function() {
    logger.log('connected to mongoose')
  },
  function(err) {
    logger.log('error connecting to mongoose')
  }
)

app.listen(config.port, function() {
  logger.log('listen! http://localhost:' + config.port)
})
