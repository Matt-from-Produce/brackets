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

// set up mock db if we're in dev
if (config.env === 'dev') {
  console.log('hitting that shit')
  var jsonServer = require('json-server')
  var server = jsonServer.create()
  var router = jsonServer.router('db.json')
  var middlewares = jsonServer.defaults()

  server.use(middlewares)
  server.use(router)
  server.listen(3001, () => {
    console.log('JSON server listening on port 3001')
  })
} else {
  // connect to db
  mongoose.connect(uri, options).then(
    function() {
      logger.log('connected to mongoose')
    },
    function(err) {
      logger.log('error connecting to mongoose')
    }
  )
}

app.listen(config.port, function() {
  logger.log('listen! http://localhost:' + config.port)
})
