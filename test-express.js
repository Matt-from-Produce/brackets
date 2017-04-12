var express = require('express')
var path = require('path')

// start the show
var app = express()

// build the root route
app.get('/', function(req, res) {
  res.send('hello')
})

// listen!
app.listen(3000, function() {
  console.log('listening to bitches on 3000')
})
