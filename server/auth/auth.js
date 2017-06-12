var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')
var config = require('../config/config')
var checkToken = expressJwt({ secret: config.secrets.jwt })
var User = require('../api/users/usersModel')

module.exports = {
  decodeToken: function() {
    return function(req, res, next) {
      // make it optional to place token on query string
      // if it is, place it on the headers for checkToken
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token
      }
      // if checkToken is correct it will be attached to req.user (req.user._id)
      checkToken(req, res, next)
    }
  },
  getFreshUser: function() {
    // go to the database and get the user document
    var promise = User.findById(req.user._id).exec()
    promise.then(function(user) {
      if (!user) {
        next(new Error('No user with that ID'))
      } else {
        // attach user document to request
        req.user = user
        next()
      }
    })
    .catch(function(err){
      next(err)
    })
  },
  verifyUser: function() {
    return function(req, res, next) {
      var email = req.body.email
      var password = req.body.password
      console.log(req.body)
      if (!email || !password) {
        res.status(400).send('Email or Password missing')
        return
      }

      var promise = User.findOne({email: email}).exec()
      promise.then(function(user) {
        if (!user) {
          // TODO maybe handle this differently
          res.status(401).send('Did not find a user with that email')
          console.log('didnt get a user')
        } else {
          console.log('found user')
          // check the password now
          if (user.authenticate(password)) {
            // success!
            req.user = user
            console.log('authenticated')
            next()
          } else if (!user.authenticate(password)) {
            console.log('wrong password')
            res.status(401).send('Incorrect password')
          }
        }
      })
      .catch(function(err) {
        next(err)
      })
    }
  },
  signToken: function(user) {
    return jwt.sign({
      sub: user._id,
      email: user.email,
      name: user.name
      }, config.secrets.jwt, {
        expiresIn: config.expireTime
      }
    )
  }
}
