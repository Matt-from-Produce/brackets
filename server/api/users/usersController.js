var User = require('./usersModel')
var logger = require('../../utils/logger')
var _ = require('lodash')

module.exports = {
  // i think params sets up the object for the REST / CRUD operations
  // but when I want an array?
  // if I want one, use params?
  // if I want one or more, use get?

  // make create, update, and delete
  // and getOne
  params: function (err, req, res, next, id) { // NOTE what the fuck is params
    var promise = User.findById(id).exec()
    promise
    .then(function(user) {
      if (!user) {
        next(new Error('didnt find that user'))
      } else {
        logger.log('got a user!!!!')
        logger.log(user)
        req.user = user // attach the user to the current req object (and continue down this stack)
        next() // next!!! could be a CRUD op
      }
    })
    .catch(function(err) {
      next(err) // all next with the error and it will bubble up?
    })
  },
  get: function(req, res, next) {
    var promise = User.find().exec()
    promise
    .then(function(users){
      if (!users) {
        next(new Error('didnt find any users'))
      } else {
        //logger.log('got users!')
        logger.log(users)
        res.json = users // attach response
        next() // next!
      }
    })
    .catch(function(err) {
      next(err) // pass error
    })
  },
  getOne: function(req, res, next) {
    res.json = req.user // def already have from params
  },
  put: function(req, res, next) {
    var user = req.user // grab the user from this current request (params)
    var update = req.body // grab what was sent to us, which is inside req.body

    // lodash merge?
    _.merge(user, update)

    var promise = user.save().exec()
    promise
    .then(function(saved) { // this will give us what was saved
      res.json = saved // send the user back
      next() // next!
    })
    .catch(function(err) {
      next(err) // pass the error
    })
  },
  delete: function(req, res, next) {
    var user = req.user
    var promise = user.remove().exec()
    promise
    .then(function(deleted) {
      res.json = deleted
    })
    .catch(function(err) {
      next(err)
    })
  }
}
