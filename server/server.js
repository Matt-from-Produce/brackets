var express = require('express')
// TODO setup global error handling
var path = require('path') // built-in middleware
var mongoose = require('mongoose')

// change promise library of mongoose to bluebird
mongoose.Promise = require('bluebird')

// create the api
var api = require('./api/api')

// make app
var app = express()

// setup the app middleware
require('./middleware/appMiddleware')(app)

// get the api
app.use('/api', api)

// serve static assets
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
