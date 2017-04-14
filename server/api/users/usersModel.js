/*

Schema for users

basically just your basic info
plus:
  gamesPlayed and wins to calculate win ratio
  anything else I think of

*/

// win ratio as a virtual?
// do i even USE VIRUTALS!@#?

// test required things

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  created_at: {
    type: Date,
    required: true // need a created_at
  },
  name: {
    type: String,
    required: true // need a name
  },
  email: {
    type: String,
    required: true, // need an email
    unique: true // must be a unique as well
  },
  gamesPlayed: Number, // not required
  wins: Number // not required
})

var User = mongoose.model('User', UserSchema)

module.exports = User
