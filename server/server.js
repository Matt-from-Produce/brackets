require('babel-register')
var express = require('express')
// TODO setup global error handling
var path = require('path') // built-in middleware
var mongoose = require('mongoose')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var ReactRouter = require('react-router-dom')
var fs = require('fs')
var _ = require('lodash')
var App = require('../src/js/App').default

// change promise library of mongoose to bluebird
mongoose.Promise = require('bluebird')

// create the api
var api = require('./api/api')
var auth = require('./auth/routes')

// serverside rendering
var StaticRouter = ReactRouter.StaticRouter
var baseTemplate = fs.readFileSync('./index.html') // TODO change to async function maybe
var template = _.template(baseTemplate)

// make app
var app = express()

// setup the app middleware
require('./middleware/appMiddleware')(app)

// get the api and auth
app.use('/api', api)
app.use('/auth', auth)

// serve static assets
app.use('/dist', express.static('./dist'))

// send index.html on GET request to '/'
app.get('/', function(req, res) {
  var context = {}
  var body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, { location: req.url, context },
      React.createElement(App)
    )
  )

  if (context.url) {
    // TODO if there is a redirect
  }

  res.write(template({body: body}))
  res.end()
})

module.exports = app
