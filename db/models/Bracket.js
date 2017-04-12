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
var User = require('./User')

var BracketSchema = new mongoose.Schema({
  created_at: Date,
  name: String,
  matches: [{
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    victor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  admins: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  victor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

var Bracket = mongoose.model('Bracket', BracketSchema)

module.exports = Bracket
