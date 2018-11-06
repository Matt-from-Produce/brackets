require('babel-register')

// because we are running inside node
// we dont have to worry about poluting the global namespace

var express = require('express')
// TODO setup global error handling
var path = require('path') // built-in middleware
var mongoose = require('mongoose')

// change promise library of mongoose to bluebird
mongoose.Promise = require('bluebird')

// create the api and auth
var api = require('./api/api')
var auth = require('./auth/routes')

// make app
var app = express()

// setup the app middleware
require('./middleware/appMiddleware')(app)

// serve static assets
app.use(express.static(path.join(__dirname, '../dist/')))

// get the api and auth
app.use('/api', api)
app.use('/auth', auth)

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

// send index.html on GET request to all paths
app.get('/*', function(req, res) {
  res.sendFile(path.resolve('index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app
