require('babel-register')
var express = require('express')
// TODO setup global error handling
var path = require('path') // built-in middleware
var mongoose = require('mongoose')

const isomorphic = require('./isomorphic')

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

// serverside rendering
// TODO
/*

hey if you're not one of my clientside routes, dont run this function
that means i've got to put a check in for all the routes i have on the client
or is there a more elegant way of handling that?

*/
app.use(isomorphic)

module.exports = app
