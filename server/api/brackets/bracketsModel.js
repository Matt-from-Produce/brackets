var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = require('../users/usersModel')

// TODO seating rankings virtual?
  // use win ratio of all players to affect the initial seatings

var BracketSchema = new Schema({
  created_at: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  matches: [{
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    victor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  admins: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  victor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Bracket = mongoose.model('Bracket', BracketSchema)

module.exports = Bracket
