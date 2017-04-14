/*

Schema for the Brackets

*/

// i know it looks like this should be relational but
// if we put all user data in users array and then
// DO NOT populate all other fields and only check the ID against
// that array, then we can still access it all and have it make sense
// the goal being not to repeat user data within the document

// yea, stick with that
// also think of many many things to put inside users and brackets
// they are pretty much my only two data objects, so just fill them up with info

// like seating:
  // use win ratio of all players to affect the initial seatings


var mongoose = require('mongoose')
var Schema = mongoose.Schema
var User = require('./User')

var BracketSchema = new Schema({
  created_at: {
    type: Date,
    required: true // need
  },
  name: {
    type: String,
    required: true // need
  }
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
