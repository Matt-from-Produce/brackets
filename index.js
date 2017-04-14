// server entry point

// require is sync function
// this builds the config object and does everything in there before continuing
var config = require('./server/config/config')

// same here
var app = require('./server/server')

// and here
var logger = require('./server/utils/logger')

// config.js is the FIRST thing that ever happens when starting the server
// i feel like i already knew that but its good to remember that

app.listen(config.port, function() {
  logger.log('listen! http://localhost:' + config.port)
})
