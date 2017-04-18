/*

Schema for the Brackets

*/

// TODO seating rankings virtual?
  // use win ratio of all players to affect the initial seatings

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = require('../users/usersModel')

var BracketSchema = new Schema({
  created_at: {
    type: Date,
    required: true // need
  },
  name: {
    type: String,
    required: true // need
  },
  matches: [{ // dont need
    users: [{ // dont need
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    victor: { // dont need
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  created_by: { // need created_by
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  admins: [{ // must have at least one admin?
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  users: [{ // must have at least one user
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  victor: { // dont need
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Bracket = mongoose.model('Bracket', BracketSchema)

module.exports = Bracket
