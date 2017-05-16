var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
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
  password: {
    type: String,
    required: true
  },
  gamesPlayed: Number,
  wins: Number
})

UserSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next()
  this.password = this.encryptPassword(this.password)
  next()
})

// these are used on the INSTANCE of a User (ie: req.user can call these methods)
UserSchema.methods = {
  authenticate: function(plainTextPassword) {
    return bcrypt.compareSync(plainTextPassword, this.password) // this refers to this instance of the user
  },
  encryptPassword: function(plainTextPassword) {
    if (!plainTextPassword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10)
      return bcrypt.hashSync(plainTextPassword, salt)
    }
  }
}

var User = mongoose.model('User', UserSchema)

module.exports = User
