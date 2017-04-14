// server entry point

var config = require('./server/config/config')
var app = require('./server/server')
var logger = require('./server/utils/logger')

app.listen(config.port, function() {
  logger.log('listen! http://localhost:' + config.port)
})
