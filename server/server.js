var express = require('express') // express!
var api = require('./api/api')
// TODO setup global error handling

// var bodyParser = require('body-parser') // 3rd party middlware!
var path = require('path') // built-in middleware! (comes w/ node)
// var morgan = require('morgan') // 3rd party middleware!
// var _ = require('lodash') // 3rd party middleware!
// var PORT = 3000 // the port we will host on

// make app
var app = express()

// setup the app middleware
require('./middleware/appMiddleware')(app)

// get the api
app.use('/api', api)

// serve from brackets folder and it will default to index on get '/'
app.use(express.static('brackets'))

// send index.html on GET request to '/'
app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// give the bundle when its requested
app.get('/dist/bundle.js', function(req, res) {
  res.sendFile(path.resolve('dist/bundle.js'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// give the source-map when its requested
app.get('/dist/bundle.js.map', function(req, res) {
  res.sendFile(path.resolve('dist/bundle.js.map'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app
