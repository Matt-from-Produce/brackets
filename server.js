// pull in express
var express = require('express')
var path = require('path')
var PORT = 3000

// make fake data
var jsonData = {count: 12, message: 'poo nerd'}

// make app
var app = express()

// send index.html on GET request to '/'
app.get('/', function(req, res) {
  res.sendFile(path.resolve('index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// send jsonData on Get request to '/data'
app.get('/data', function(req, res) {
  res.json(jsonData)
})

// listen
app.listen(PORT, function() {
  console.log('poopies listening 3000')
})
