/*

Schema for users

basically just your basic info
plus:
  gamesPlayed and wins to calculate win ratio
  anything else I think of

*/

// win ratio as a virtual?
// do i even USE VIRUTALS!@#?

var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  created_at: Date,
  name: String,
  email: String,
  gamesPlayed: Number,
  wins: Number
})

var User = mongoose.model('User', UserSchema)

module.exports = User
