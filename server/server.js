var express = require('express') // express!
// TODO setup global error handling
var path = require('path') // built-in middleware! (comes w/ node)
var mongoose = require('mongoose')

// create the api
var api = require('./api/api')

// make app
var app = express()

// setup the app middleware
require('./middleware/appMiddleware')(app)

// get the api
app.use('/api', api)

// TODO somehow extrapolate this elsewhere? we should only get the app if we want it?
// because this is specifically the web app?
// serve from brackets folder and it will default to index on get '/'

// NOTE
// not really, because this is an SPA, so technically this is the correct way
// well, it may not be the correct way but this is certainly the easiest way


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
