var User = require('./usersModel')
var logger = require('../../utils/logger')
var _ = require('lodash')

module.exports = {
  // params is hit when an id is passed
  params: function (req, res, next, id) {

    // TODO
    // remove
    // dont need to do this anymore because of auth
    
    var promise = User.findById(id).exec() // save promise
    promise.then(function(user) { // got response from db
      if (!user) {
        next(new Error('Didn\'t find that user'))
      } else { // found user
        logger.log(user)
        req.user = user // attach the user to the current req object (and continue down this stack)
        next() // call next, could be CRUD op
      }
    })
    .catch(function(err) {
      logger.log('ERORRROr')
      logger.log(next)
      next(err) // call next with the error and it will bubble up
    })
  },
  // get is hit when getting all or many
  get: function(req, res, next) {
    var promise = User.find().exec()
    promise.then(function(users){
      if (!users) {
        next(new Error('Didn\'t find any users'))
      } else {
        logger.log('hello from get, calling next')
        res.json(users)// attach response
        next() // call next, could be CRUD op
      }
    })
    .catch(function(err) {
      next(err) // pass error up
    })
  },
  getOne: function(req, res, next) {
    res.json(req.user)
    logger.log('hello from getOne')
    next() // call next
  },
  post: function(req, res, next) {
    var newUser = req.body // get user
    newUser.created_at = new Date() // set created_at to now
    // save the user
    var promise = User.create(newUser)
    promise.then(function(user) { // created user
      res.json(user) // send back
      next()
    })
    .catch(function(err) {
      next(err) // send error
    })
  },
  put: function(req, res, next) {
    var user = req.user // grab the user from this current request (params)
    var update = req.body // grab what was sent to us, which is inside req.body
    _.merge(user, update) // lodash merge the two together, store result in user

    var promise = user.save().exec() // save the updated user to db, capture that promise

    promise.then(function(saved) { // on save
      res.json(saved) // send the user back
      next() // call next
    })
    .catch(function(err) { // on error
      next(err) // pass the error
    })
  },
  delete: function(req, res, next) {
    var user = req.user // get from params
    var promise = user.remove().exec() // save the promise
    promise.then(function(deleted) { // on delete
      res.json(deleted) // return what was deleted
      next() // call next
    })
    .catch(function(err) {
      next(err)
    })
  }
}
