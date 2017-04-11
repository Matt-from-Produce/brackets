var mongoose = require('mongoose')
var express = require('express')

var User = require('./db/models/User')
var Bracket = require('./db/models/Bracket')

var app = express()

// app.get('/', function(res, req) {
//   res.send('hello express')
// })
//
// app.listen(3000, function() {
//   console.log('shits listening on 3000')
// })

mongoose.connect("mongodb://localhost:27017/brackets")
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function() {
  console.log('connected')

  var leif = new User({
    created_at: new Date(),
    name: 'Leif',
    email: 'leify@blah.com',
    gamesPlayed: 100,
    wins: 92
  })

  leif.save()

  var bracketTest = new Bracket({
    created_at: new Date(),
    name: 'Testing 1 2',
    created_by: leif._id,
    admins: leif._id,
    users: leif._id,
  })

  //bracketTest.save()

  Bracket.find().populate('users').exec(function(err, brackets) {
    if (err)
      console.log(err)
    else
      console.log('popped')
      console.log(brackets[0])
  })

  console.log('done')

})
