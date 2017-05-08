var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  created_at: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gamesPlayed: Number,
  wins: Number
})

var User = mongoose.model('User', UserSchema)

module.exports = User
